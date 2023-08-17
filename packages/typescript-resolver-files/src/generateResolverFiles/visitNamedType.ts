import * as path from 'path';
import {
  GraphQLNamedType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
  Location,
} from 'graphql';
import {
  relativeModulePath,
  parseLocationForWhitelistedModule,
  RootObjectType,
} from '../utils';
import {
  GraphQLTypeHandler,
  GraphQLTypeHandlerParams,
  GenerateResolverFilesContext,
} from './types';
import { addExternalResolverImport } from './addExternalResolverImport';

export interface VisitNamedTypeParams {
  namedType: GraphQLNamedType;
  resolverName: string;
  belongsToRootObject: RootObjectType | null;
  visitor: {
    RootObjectTypeField: GraphQLTypeHandler<RootObjectType>;
    ObjectType: GraphQLTypeHandler;
    ScalarType: GraphQLTypeHandler;
    UnionType: GraphQLTypeHandler;
    InterfaceType: GraphQLTypeHandler;
  };
  location?: Location;
}

export const visitNamedType = <P extends Record<string, unknown>>(
  {
    namedType,
    resolverName,
    belongsToRootObject,
    location,
    visitor,
    ...extraParams
  }: VisitNamedTypeParams & P,
  ctx: GenerateResolverFilesContext
): void => {
  // Check to see if need to generate resolver files
  const parsedDetails = parseLocationForOutputDir(
    belongsToRootObject ? [belongsToRootObject] : [],
    ctx,
    location
  );
  if (!parsedDetails) {
    // No `parsedDetails` means the location is NOT whitelisted, ignore.
    return;
  }

  const { moduleName, outputDir } = parsedDetails;

  const normalizedResolverName = normalizeResolverName(
    moduleName,
    resolverName,
    belongsToRootObject
  );

  const externalResolverImportSyntax =
    ctx.config.externalResolvers[normalizedResolverName.base];

  if (externalResolverImportSyntax) {
    // If has external resolver, use it
    addExternalResolverImport(
      {
        moduleName,
        normalizedResolverName: normalizedResolverName.base,
        configImportSyntax: externalResolverImportSyntax,
      },
      ctx
    );

    return;
  }

  // Generate resolver files based on its type
  const visitorHandlerParamsBase = validateAndPrepareForGraphQLTypeHandler(
    {
      resolverName,
      normalizedResolverName: normalizedResolverName.withModule,
      outputDir,
      belongsToRootObject,
      moduleName,
    },
    ctx
  );

  const visitorHandlerParams = { ...visitorHandlerParamsBase, ...extraParams };

  if (visitorHandlerParams.belongsToRootObject) {
    visitor['RootObjectTypeField'](visitorHandlerParams, ctx);
  } else {
    if (isObjectType(namedType)) {
      visitor['ObjectType'](visitorHandlerParams, ctx);
    } else if (isUnionType(namedType)) {
      visitor['UnionType'](visitorHandlerParams, ctx);
    } else if (isScalarType(namedType)) {
      visitor['ScalarType'](visitorHandlerParams, ctx);
    } else if (isInterfaceType(namedType)) {
      visitor['InterfaceType'](visitorHandlerParams, ctx);
    }
  }
};

/**
 * Parse location to see which module it belongs to.
 * Also check against whitelisted and blacklisted to see if need to generate file.
 */
const parseLocationForOutputDir = (
  nestedDirs: string[],
  {
    config: {
      mode,
      sourceMap,
      whitelistedModules,
      blacklistedModules,
      baseOutputDir,
      resolverRelativeTargetDir,
    },
  }: GenerateResolverFilesContext,
  location?: Location
): { outputDir: string; moduleName: string } | undefined => {
  // If mode is "merged", there's only one module:
  //   - always generate a.k.a  it's always whitelisted
  //   - put them together at designated relativeTargetDir
  //   - moduleName='' i.e. no module
  if (mode === 'merged') {
    return {
      outputDir: path.posix.join(
        baseOutputDir,
        resolverRelativeTargetDir,
        ...nestedDirs
      ),
      moduleName: '',
    };
  }

  // 2. mode is "modules", each module is the folder containing the schema files
  // This means one or multiple schema files can add up to one module
  const parsedSource = parseLocationForWhitelistedModule({
    location,
    sourceMap,
    whitelistedModules,
    blacklistedModules,
  });

  return parsedSource
    ? {
        outputDir: path.posix.join(
          baseOutputDir,
          parsedSource.moduleName,
          resolverRelativeTargetDir,
          ...nestedDirs
        ),
        moduleName: parsedSource.moduleName,
      }
    : undefined;
};

interface ValidateAndPrepareForGraphQLTypeParams {
  resolverName: string;
  normalizedResolverName: string;
  outputDir: string;
  belongsToRootObject: RootObjectType | null;
  moduleName: string;
}
const validateAndPrepareForGraphQLTypeHandler = (
  {
    resolverName,
    normalizedResolverName,
    outputDir,
    belongsToRootObject,
    moduleName,
  }: ValidateAndPrepareForGraphQLTypeParams,
  { config, result }: GenerateResolverFilesContext
): GraphQLTypeHandlerParams<RootObjectType> | GraphQLTypeHandlerParams => {
  const fieldFilePath = path.posix.join(outputDir, `${resolverName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${resolverName}, file: ${fieldFilePath}`
    );
  }

  // resolverTypeName are generated from typescript-resolvers plugin
  const resolversTypeMetaModule = relativeModulePath(
    outputDir,
    config.resolverTypesPath
  );
  const resolversTypeMeta: GraphQLTypeHandlerParams['resolversTypeMeta'] =
    belongsToRootObject
      ? {
          typeNamedImport: `${belongsToRootObject}Resolvers`,
          module: resolversTypeMetaModule,
          moduleType: 'file',
          typeString: `${belongsToRootObject}Resolvers['${resolverName}']`,
        }
      : {
          typeNamedImport: `${resolverName}Resolvers`,
          module: resolversTypeMetaModule,
          moduleType: 'file',
          typeString: `${resolverName}Resolvers`,
        };

  return {
    fieldFilePath,
    resolverName,
    belongsToRootObject,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
  };
};

/**
 * Function to get format resolver name based on its definition in the schema
 * - Root object type resolver e.g Query.me, Mutation.updateUser
 * - Object type e.g. User, Profile
 *
 * Returns an object with 2 key/value pairs:
 *   - base: resolver name without module. This is used by to match up with config.externalResolvers.
 *   - withModule: resolver name with module. This is used to identify the resolver INTERNAL unique path used in main resolver files.
 */
const normalizeResolverName = (
  moduleName: string,
  name: string,
  rootObject: RootObjectType | null
): { base: string; withModule: string } => {
  const baseResolverName = !rootObject ? name : `${rootObject}.${name}`;
  return {
    base: baseResolverName,
    withModule: `${moduleName}.${baseResolverName}`,
  };
};
