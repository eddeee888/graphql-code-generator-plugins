import * as path from 'path';
import {
  type GraphQLNamedType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
  type Location,
} from 'graphql';
import { relativeModulePath, type RootObjectType } from '../utils';
import type {
  GraphQLTypeHandler,
  GraphQLTypeHandlerParams,
  GenerateResolverFilesContext,
} from './types';
import { addExternalResolverImport } from './addExternalResolverImport';
import { parseLocationForOutputDir } from '../utils/parseLocationForOutputDir';
import {
  normalizeResolverName,
  type NormalizedResolverName,
} from '../utils/normalizeResolverName';

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
  const parsedDetails = parseLocationForOutputDir({
    nestedDirs: belongsToRootObject ? [belongsToRootObject] : [],
    location,
    mode: ctx.config.mode,
    sourceMap: ctx.config.sourceMap,
    resolverRelativeTargetDir: ctx.config.resolverRelativeTargetDir,
    baseOutputDir: ctx.config.baseOutputDir,
    blacklistedModules: ctx.config.blacklistedModules,
    whitelistedModules: ctx.config.whitelistedModules,
  });
  if (!parsedDetails) {
    // No `parsedDetails` means the location is NOT whitelisted, ignore.
    return;
  }

  const { moduleName, resolversOutputDir, relativePathFromBaseToModule } =
    parsedDetails;

  const normalizedResolverName = normalizeResolverName(
    moduleName,
    resolverName,
    belongsToRootObject
  );

  const externalResolverImportSyntax =
    ctx.config.externalResolvers[normalizedResolverName.base];

  // when used with extended object types scenario
  if (externalResolverImportSyntax) {
    // If has external resolver, use it
    addExternalResolverImport(
      {
        moduleName,
        relativePathFromBaseToModule,
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
      normalizedResolverName,
      resolversOutputDir,
      belongsToRootObject,
      moduleName,
      relativePathFromBaseToModule,
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

interface ValidateAndPrepareForGraphQLTypeParams {
  resolverName: string;
  normalizedResolverName: NormalizedResolverName;
  resolversOutputDir: string;
  belongsToRootObject: RootObjectType | null;
  moduleName: string;
  relativePathFromBaseToModule: string[];
}
const validateAndPrepareForGraphQLTypeHandler = (
  {
    resolverName,
    normalizedResolverName,
    resolversOutputDir,
    belongsToRootObject,
    moduleName,
    relativePathFromBaseToModule,
  }: ValidateAndPrepareForGraphQLTypeParams,
  { config, result }: GenerateResolverFilesContext
): GraphQLTypeHandlerParams<RootObjectType> | GraphQLTypeHandlerParams => {
  const fieldFilePath = path.posix.join(
    resolversOutputDir,
    `${resolverName}.ts`
  );
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${resolverName}, file: ${fieldFilePath}`
    );
  }

  // resolverTypeName are generated from typescript-resolvers plugin
  const resolversTypeMetaModule = relativeModulePath(
    resolversOutputDir,
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
    relativePathFromBaseToModule,
  };
};
