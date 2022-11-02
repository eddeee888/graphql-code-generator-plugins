import * as path from 'path';
import {
  GraphQLNamedType,
  isObjectType,
  isScalarType,
  isUnionType,
  Location,
} from 'graphql';
import { relativeModulePath } from '../utils';
import {
  GraphQLTypeHandler,
  GraphQLTypeHandlerParams,
  RootObjectType,
  RunContext,
} from '../types';
import { addExternalResolverImport } from './addExternalResolverImport';

export interface VisitNamedTypeParams {
  namedType: GraphQLNamedType;
  resolverName: string;
  belongsToRootObject: RootObjectType | null;
  visitor: {
    RootObjectTypeField: GraphQLTypeHandler;
    ObjectType: GraphQLTypeHandler;
    ScalarType: GraphQLTypeHandler;
    UnionType: GraphQLTypeHandler;
  };
  location?: Location;
}

export const visitNamedType = (
  {
    namedType,
    resolverName,
    belongsToRootObject,
    location,
    visitor,
  }: VisitNamedTypeParams,
  ctx: RunContext
): void => {
  const normalizedResolverName = normalizeResolverName(
    resolverName,
    belongsToRootObject
  );

  const externalResolverImportSyntax =
    ctx.config.externalResolvers[normalizedResolverName];
  if (externalResolverImportSyntax) {
    // If has external resolver, use it
    addExternalResolverImport(
      {
        normalizedResolverName,
        configImportSyntax: externalResolverImportSyntax,
      },
      ctx
    );

    return;
  }

  // Check to see if need to generate resolver files
  const outputDir = parseLocation(
    belongsToRootObject ? [belongsToRootObject] : [],
    ctx,
    location
  );
  if (!outputDir) {
    return;
  }

  // Generate resolver files based on its type
  const visitorParams = validateAndPrepareForGraphQLType(
    { resolverName, normalizedResolverName, outputDir, belongsToRootObject },
    ctx
  );

  if (isObjectType(namedType)) {
    belongsToRootObject
      ? visitor['RootObjectTypeField'](visitorParams, ctx)
      : visitor['ObjectType'](visitorParams, ctx);
  } else if (isUnionType(namedType)) {
    visitor['UnionType'](visitorParams, ctx);
  } else if (isScalarType(namedType)) {
    visitor['ScalarType'](visitorParams, ctx);
  }
};

const parseLocation = (
  nestedDirs: string[],
  {
    config: {
      mode,
      sourcesMap,
      whitelistedModules,
      baseOutputDir,
      relativeTargetDir,
    },
  }: RunContext,
  location?: Location
): string | undefined => {
  if (!location) {
    throw new Error('Location is invalid');
  }

  // If mode is "merged", there's only one module:
  //   - always generate a.k.a  it's always whitelisted
  //   - put them together at degsinated relativeTargetDir
  if (mode === 'merged') {
    return path.join(baseOutputDir, relativeTargetDir, ...nestedDirs);
  }

  // 2. mode is "modules", each module is the folder containing the schema files
  // This means one or multiple schema files can add up to one module
  const sourceFilename = location.source.name;
  const sourceFile = sourcesMap[sourceFilename];
  if (!sourceFile) {
    throw new Error(`Unable to find ${sourceFilename} in sourcesMap`);
  }

  const isInWhitelistedModule =
    // whitelistedModules is empty a.k.a. all are whitelisted
    whitelistedModules.length === 0
      ? true
      : whitelistedModules.includes(sourceFile.moduleName);

  return isInWhitelistedModule
    ? path.join(
        baseOutputDir,
        sourceFile.moduleName,
        relativeTargetDir,
        ...nestedDirs
      )
    : undefined;
};

interface ValidateAndPrepareForGraphQLTypeParams {
  resolverName: string;
  normalizedResolverName: string;
  outputDir: string;
  belongsToRootObject: RootObjectType | null;
}
const validateAndPrepareForGraphQLType = (
  {
    resolverName,
    normalizedResolverName,
    outputDir,
    belongsToRootObject,
  }: ValidateAndPrepareForGraphQLTypeParams,
  { config, result }: RunContext
): GraphQLTypeHandlerParams => {
  const fieldFilePath = path.join(outputDir, `${resolverName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${resolverName}, file: ${fieldFilePath}`
    );
  }

  result.dirs[outputDir] = true;

  // resolverTypeName are generated from typescript-resolvers plugin
  const resolverType = belongsToRootObject
    ? {
        namedImport: `${belongsToRootObject}Resolvers`,
        type: `${belongsToRootObject}Resolvers['${resolverName}']`,
      }
    : {
        namedImport: `${resolverName}Resolvers`,
        type: `${resolverName}Resolvers`,
      };

  return {
    resolverName,
    resolverType,
    normalizedResolverName,
    fieldFilePath,
    belongsToRootObject,
    relativeModulePath: relativeModulePath(outputDir, config.resolverTypesPath),
  };
};

/**
 * Function to get format resolver name based on its definition in the schema
 * - Root object type resolver e.g Query.me, Mutation.updateUser
 * - Object type e.g. User, Profile
 */
const normalizeResolverName = (
  name: string,
  rootObject: RootObjectType | null
): string => {
  if (!rootObject) {
    return name;
  }
  return `${rootObject}.${name}`;
};
