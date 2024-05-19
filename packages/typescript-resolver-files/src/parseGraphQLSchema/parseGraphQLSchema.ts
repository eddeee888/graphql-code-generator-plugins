import * as path from 'path';
import {
  type GraphQLField,
  type GraphQLScalarType,
  type GraphQLSchema,
  type GraphQLObjectType,
  type Location,
  isObjectType,
  isScalarType,
  isSpecifiedScalarType,
} from 'graphql';
import type { ParseSourcesResult } from '../parseSources';
import type { TypeMappersMap } from '../parseTypeMappers';
import type {
  ParsedPresetConfig,
  ScalarsOverridesType,
} from '../validatePresetConfig';
import {
  type RootObjectType,
  logger,
  isNativeNamedType,
  isRootObjectType,
  parseLocationForWhitelistedModule,
  relativeModulePath,
} from '../utils';
import { parseLocationForOutputDir } from '../utils/parseLocationForOutputDir';
import { normalizeResolverName } from '../utils/normalizeResolverName';

interface ParseGraphQLSchemaParams {
  schemaAst: GraphQLSchema;
  sourceMap: ParseSourcesResult['sourceMap'];
  resolverTypesPath: string;
  typeMappersMap: TypeMappersMap;
  scalarsModule: ParsedPresetConfig['scalarsModule'];
  scalarsOverrides: ParsedPresetConfig['scalarsOverrides'];
  mode: ParsedPresetConfig['mode'];
  baseOutputDir: string;
  resolverRelativeTargetDir: string;
  whitelistedModules: ParsedPresetConfig['whitelistedModules'];
  blacklistedModules: ParsedPresetConfig['blacklistedModules'];
}

interface RootResolverDetails {
  schemaType: string;
  moduleName: string;
  resolversOutputDir: string;
  resolverFilename: string;
  relativePathFromBaseToModule: string[];
  normalizedResolverName: ReturnType<typeof normalizeResolverName>;
  typeNamedImport: string;
  typeString: string;
  relativePathToResolverTypesFile: string;
  moduleType: 'file';
}

export interface ParsedGraphQLSchemaMeta {
  userDefinedSchemaTypeMap: {
    query: Record<
      string, // normalized resolver name
      RootResolverDetails
    >;
    mutation: Record<
      string, // normalized resolver name
      RootResolverDetails
    >;
    subscription: Record<
      string, // normalized resolver name
      RootResolverDetails
    >;
    object: Record<
      string, // schema name e.g. `User`, `Job`, etc.
      Record<
        string, // normalized name e.g. `user.User` (modules) or `.User` (merged)
        {
          schemaType: string;
          moduleName: string;
          resolversOutputDir: string;
          resolverFilename: string;
          fieldsToPick: string[];
          relativePathFromBaseToModule: string[];
          normalizedResolverName: ReturnType<typeof normalizeResolverName>;
          typeNamedImport: string;
          typeString: string;
          relativePathToResolverTypesFile: string;
          moduleType: 'file';
        }
      >
    >;
    scalar: Record<string, true>;
  };
  pluginsConfig: {
    defaultScalarTypesMap: Record<string, ScalarsOverridesType>;
    defaultScalarExternalResolvers: Record<string, string>;
    defaultTypeMappers: Record<string, string>;
  };
}

export const parseGraphQLSchema = async ({
  schemaAst,
  sourceMap,
  resolverTypesPath,
  typeMappersMap,
  scalarsModule,
  scalarsOverrides,
  mode,
  baseOutputDir,
  resolverRelativeTargetDir,
  whitelistedModules,
  blacklistedModules,
}: ParseGraphQLSchemaParams): Promise<ParsedGraphQLSchemaMeta> => {
  const scalarResolverMap = scalarsModule
    ? await getScalarResolverMapFromModule(scalarsModule)
    : {};

  return Object.entries(schemaAst.getTypeMap()).reduce<ParsedGraphQLSchemaMeta>(
    (res, [schemaType, namedType]) => {
      if (isNativeNamedType(namedType)) {
        if (isSpecifiedScalarType(namedType)) {
          handleNativeScalarType({ schemaType, result: res, scalarsOverrides });
        }
        return res;
      }

      const parsedSource = parseLocationForWhitelistedModule({
        location: namedType.astNode?.loc,
        sourceMap,
        whitelistedModules,
        blacklistedModules,
      });
      if (!parsedSource) {
        return res;
      }

      if (isScalarType(namedType)) {
        res.userDefinedSchemaTypeMap.scalar[schemaType] = true;
        handleScalarType({
          scalarResolverMap,
          schemaType,
          scalarsModule,
          scalarsOverrides,
          result: res,
        });
        return res;
      }

      // Root object types e.g. Query, Mutation, Subscription
      if (isRootObjectType(schemaType) && isObjectType(namedType)) {
        Object.entries(namedType.getFields()).forEach(
          ([fieldName, fieldNode]) => {
            handleRootResolver({
              mode,
              sourceMap,
              resolverTypesPath,
              resolverRelativeTargetDir,
              baseOutputDir,
              blacklistedModules,
              whitelistedModules,
              schemaType,
              fieldName,
              fieldNode,
              result: res,
            });
          }
        );
        return res;
      }

      // Other output object types
      if (!isRootObjectType(schemaType) && isObjectType(namedType)) {
        handleObjectType({
          mode,
          sourceMap,
          resolverTypesPath,
          resolverRelativeTargetDir,
          baseOutputDir,
          blacklistedModules,
          whitelistedModules,
          typeMappersMap,
          namedType,
          schemaType,
          result: res,
        });
        return res;
      }

      return res;
    },
    {
      userDefinedSchemaTypeMap: {
        query: {},
        mutation: {},
        subscription: {},
        object: {},
        scalar: {},
      },
      pluginsConfig: {
        defaultScalarTypesMap: {},
        defaultScalarExternalResolvers: {},
        defaultTypeMappers: {},
      },
    }
  );
};

const handleScalarType = ({
  scalarResolverMap,
  schemaType,
  result,
  scalarsModule,
  scalarsOverrides,
}: {
  scalarResolverMap: Record<string, GraphQLScalarType<unknown, unknown>>;
  schemaType: string;
  result: ParsedGraphQLSchemaMeta;
  scalarsModule: string | false;
  scalarsOverrides: ParsedPresetConfig['scalarsOverrides'];
}): void => {
  const scalarResolver = scalarResolverMap[schemaType];
  // Use found the scalar from scalar module
  if (scalarResolver) {
    if (
      scalarResolver.extensions.codegenScalarType &&
      typeof scalarResolver.extensions.codegenScalarType === 'string'
    ) {
      result.pluginsConfig.defaultScalarTypesMap[schemaType] =
        scalarResolver.extensions.codegenScalarType;
    }
    result.pluginsConfig.defaultScalarExternalResolvers[
      schemaType
    ] = `~${scalarsModule}#${scalarResolver.name}Resolver`;
  }

  // If found scalar overrides, use them
  const override = scalarsOverrides[schemaType];
  if (override) {
    if (override.type) {
      result.pluginsConfig.defaultScalarTypesMap[schemaType] = override.type;
    }
    if (override.resolver) {
      result.pluginsConfig.defaultScalarExternalResolvers[schemaType] =
        override.resolver;
    }
  }
};

const getScalarResolverMapFromModule = async (
  scalarsModule: string
): Promise<Record<string, GraphQLScalarType<unknown, unknown>>> => {
  let module:
    | { resolvers: Record<string, GraphQLScalarType<unknown, unknown>> }
    | undefined;
  try {
    module = await import(scalarsModule);
  } catch (err) {
    if (
      err instanceof Error &&
      'code' in err &&
      err.code === 'MODULE_NOT_FOUND'
    ) {
      logger.warn(
        `Unable to import \`${scalarsModule}\`. Install \`${scalarsModule}\` or you have to implement Scalar resolvers by yourself.`
      );
    }
  }

  if (!module || !module.resolvers) {
    return {};
  }

  return module.resolvers;
};

const handleNativeScalarType = ({
  schemaType,
  result,
  scalarsOverrides,
}: {
  schemaType: string;
  result: ParsedGraphQLSchemaMeta;
  scalarsOverrides: ParsedPresetConfig['scalarsOverrides'];
}): void => {
  const override = scalarsOverrides[schemaType];
  // Note: only override the type i.e. same functionality as `typescript` plugin's scalars
  // I've never seen someone overriding native scalar's implementation so it's probably not a thing.
  if (override && override.type) {
    result.pluginsConfig.defaultScalarTypesMap[schemaType] = override.type;
  }
};

const handleRootResolver = ({
  mode,
  sourceMap,
  resolverTypesPath,
  resolverRelativeTargetDir,
  baseOutputDir,
  blacklistedModules,
  whitelistedModules,
  schemaType,
  fieldName,
  fieldNode,
  result,
}: {
  mode: ParseGraphQLSchemaParams['mode'];
  sourceMap: ParseGraphQLSchemaParams['sourceMap'];
  resolverTypesPath: ParseGraphQLSchemaParams['resolverTypesPath'];
  resolverRelativeTargetDir: ParseGraphQLSchemaParams['resolverRelativeTargetDir'];
  baseOutputDir: ParseGraphQLSchemaParams['baseOutputDir'];
  blacklistedModules: ParseGraphQLSchemaParams['blacklistedModules'];
  whitelistedModules: ParseGraphQLSchemaParams['whitelistedModules'];
  schemaType: RootObjectType;
  fieldName: string;
  fieldNode: GraphQLField<unknown, unknown>;
  result: ParsedGraphQLSchemaMeta;
}): void => {
  const parsedDetails = parseLocationForOutputDir({
    nestedDirs: [schemaType],
    location: fieldNode.astNode?.loc,
    mode,
    sourceMap,
    resolverRelativeTargetDir,
    baseOutputDir,
    blacklistedModules,
    whitelistedModules,
  });
  if (!parsedDetails) {
    return;
  }

  const { moduleName, resolversOutputDir, relativePathFromBaseToModule } =
    parsedDetails;

  const normalizedResolverName = normalizeResolverName(
    moduleName,
    fieldName,
    schemaType
  );

  result.userDefinedSchemaTypeMap[
    schemaType.toLowerCase() as 'query' | 'mutation' | 'subscription'
  ][normalizedResolverName.withModule] = {
    schemaType,
    normalizedResolverName,
    moduleName,
    relativePathFromBaseToModule,
    resolversOutputDir,
    resolverFilename: path.posix.join(resolversOutputDir, `${fieldName}.ts`),
    typeNamedImport: `${schemaType}Resolvers`,
    typeString: `${schemaType}Resolvers['${fieldName}']`,
    relativePathToResolverTypesFile: relativeModulePath(
      resolversOutputDir,
      resolverTypesPath
    ),
    moduleType: 'file',
  };
};

const handleObjectType = ({
  mode,
  sourceMap,
  resolverTypesPath,
  resolverRelativeTargetDir,
  baseOutputDir,
  blacklistedModules,
  whitelistedModules,
  typeMappersMap,
  namedType,
  schemaType,
  result,
}: {
  mode: ParseGraphQLSchemaParams['mode'];
  sourceMap: ParseGraphQLSchemaParams['sourceMap'];
  resolverTypesPath: ParseGraphQLSchemaParams['resolverTypesPath'];
  resolverRelativeTargetDir: ParseGraphQLSchemaParams['resolverRelativeTargetDir'];
  baseOutputDir: ParseGraphQLSchemaParams['baseOutputDir'];
  blacklistedModules: ParseGraphQLSchemaParams['blacklistedModules'];
  whitelistedModules: ParseGraphQLSchemaParams['whitelistedModules'];
  typeMappersMap: ParseGraphQLSchemaParams['typeMappersMap'];
  namedType: GraphQLObjectType;
  schemaType: string;
  result: ParsedGraphQLSchemaMeta;
}): void => {
  const fieldsByGraphQLModule = Object.entries(namedType.getFields()).reduce<
    Record<
      string,
      {
        fieldNodes: GraphQLField<unknown, unknown>[];
        firstFieldLocation: Location | undefined;
      }
    >
  >((res, [_, fieldNode]) => {
    const fieldLocation = fieldNode.astNode?.loc;
    const modulePath = path.dirname(fieldLocation?.source.name || '');

    if (!res[modulePath]) {
      res[modulePath] = {
        fieldNodes: [],
        // Note: fieldLocation here is the location of the first field found in a GraphQL Module.
        // The reason we use field's location instead of the object type's location is because when `extend type ObjectType` is used, the location of object type is the last found location.
        // i.e. we cannot rely on object's location if `extend type` is used.
        firstFieldLocation: fieldLocation,
      };
    }

    res[modulePath].fieldNodes.push(fieldNode);

    return res;
  }, {});

  result.userDefinedSchemaTypeMap.object[schemaType] =
    result.userDefinedSchemaTypeMap.object[schemaType] || {};

  Object.entries(fieldsByGraphQLModule).forEach(
    (
      [_modulePath, { firstFieldLocation, fieldNodes }],
      _index,
      graphQLModules
    ) => {
      const outputDir = parseLocationForOutputDir({
        nestedDirs: [],
        location: firstFieldLocation,
        mode,
        sourceMap,
        resolverRelativeTargetDir,
        baseOutputDir,
        blacklistedModules,
        whitelistedModules,
      });

      if (!outputDir) {
        return;
      }

      const { moduleName, resolversOutputDir, relativePathFromBaseToModule } =
        outputDir;

      const normalizedResolverName = normalizeResolverName(
        moduleName,
        namedType.name,
        null
      );

      // If there are multiple object type files to generate
      // e.g. `extend type ObjectType` is used across multiple modules
      // We create an array of fields to pick for each module
      //
      // If there's only one module, we return an empty array i.e. pick all fields
      const fieldsToPick =
        graphQLModules.length > 1 ? fieldNodes.map((field) => field.name) : [];

      result.userDefinedSchemaTypeMap.object[schemaType][
        normalizedResolverName.withModule
      ] = {
        schemaType,
        moduleName,
        resolversOutputDir,
        resolverFilename: path.posix.join(
          resolversOutputDir,
          `${namedType.name}.ts`
        ),
        fieldsToPick,
        relativePathFromBaseToModule,
        normalizedResolverName,
        typeNamedImport: `${schemaType}Resolvers`, // TODO: use from `typescript-resolvers`'s `meta`
        typeString: `${schemaType}Resolvers`, // TODO: use from `typescript-resolvers`'s `meta`
        relativePathToResolverTypesFile: relativeModulePath(
          resolversOutputDir,
          resolverTypesPath
        ),
        moduleType: 'file',
      };
    }
  );

  // Wire up `mappers` config
  const typeMapperDetails = typeMappersMap[schemaType];
  if (typeMapperDetails) {
    result.pluginsConfig.defaultTypeMappers[typeMapperDetails.schemaType] =
      typeMapperDetails.configImportPath;
  }
};
