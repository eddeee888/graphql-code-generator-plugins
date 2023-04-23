import {
  GraphQLSchema,
  isObjectType,
  isScalarType,
  GraphQLScalarType,
  isSpecifiedScalarType,
} from 'graphql';
import type { ParseSourcesResult } from '../parseSources';
import type { TypeMappersMap } from '../parseTypeMappers';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import {
  fmt,
  isNativeNamedType,
  isRootObjectType,
  parseLocationForWhitelistedModule,
} from '../utils';

interface ParseGraphQLSchemaParams {
  schemaAst: GraphQLSchema;
  sourceMap: ParseSourcesResult['sourceMap'];
  typeMappersMap: TypeMappersMap;
  scalarsModule: ParsedPresetConfig['scalarsModule'];
  scalarsOverrides: ParsedPresetConfig['scalarsOverrides'];
  whitelistedModules: ParsedPresetConfig['whitelistedModules'];
  blacklistedModules: ParsedPresetConfig['blacklistedModules'];
}

export interface ParsedGraphQLSchemaMeta {
  userDefinedSchemaTypeMap: {
    object: Record<string, true>;
    scalar: Record<string, true>;
  };
  pluginsConfig: Record<
    | 'defaultScalarTypesMap'
    | 'defaultScalarExternalResolvers'
    | 'defaultTypeMappers',
    Record<string, string>
  >;
}

export const parseGraphQLSchema = async ({
  schemaAst,
  sourceMap,
  typeMappersMap,
  scalarsModule,
  scalarsOverrides,
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
      }

      if (!isRootObjectType(schemaType) && isObjectType(namedType)) {
        res.userDefinedSchemaTypeMap.object[schemaType] = true;

        // Wire up `mappers` config
        const typeMapperDetails = typeMappersMap[schemaType];
        if (typeMapperDetails) {
          res.pluginsConfig.defaultTypeMappers[typeMapperDetails.schemaType] =
            typeMapperDetails.configImportPath;
        }
      }

      return res;
    },
    {
      userDefinedSchemaTypeMap: {
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
      console.warn(
        fmt.warn(
          `Unable to import \`${scalarsModule}\`. Install \`${scalarsModule}\` or you have to implement Scalar resolvers by yourself.`
        )
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
