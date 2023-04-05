import {
  GraphQLSchema,
  isObjectType,
  isScalarType,
  GraphQLScalarType,
} from 'graphql';
import type { ParseSourcesResult } from '../parseSources';
import type { TypeMappersMap } from '../parseTypeMappers';
import {
  fmt,
  isNativeNamedType,
  isRootObjectType,
  parseLocationForWhitelistedModule,
} from '../utils';

interface GetPluginsConfigParams {
  schemaAst: GraphQLSchema;
  sourceMap: ParseSourcesResult['sourceMap'];
  typeMappersMap: TypeMappersMap;
  whitelistedModules: string[];
  blacklistedModules: string[];
}

type GetPluginsConfigResult = {
  userDefinedSchemaTypeMap: Record<string, true>;
  pluginsConfig: Record<
    | 'defaultScalarTypesMap'
    | 'defaultScalarExternalResolvers'
    | 'defaultTypeMappers',
    Record<string, string>
  >;
};

const scalarsModuleName = 'graphql-scalars';

export const parseGraphQLSchema = async ({
  schemaAst,
  sourceMap,
  typeMappersMap,
  whitelistedModules,
  blacklistedModules,
}: GetPluginsConfigParams): Promise<GetPluginsConfigResult> => {
  const scalarResolvers = await getScalarResolverMap(schemaAst);

  return Object.entries(schemaAst.getTypeMap()).reduce<GetPluginsConfigResult>(
    (res, [schemaType, namedType]) => {
      if (isNativeNamedType(namedType)) {
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
        handleScalarType(scalarResolvers, schemaType, res);
      }

      if (!isRootObjectType(schemaType) && isObjectType(namedType)) {
        res.userDefinedSchemaTypeMap[schemaType] = true;

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
      userDefinedSchemaTypeMap: {},
      pluginsConfig: {
        defaultScalarTypesMap: {},
        defaultScalarExternalResolvers: {},
        defaultTypeMappers: {},
      },
    }
  );
};

const getScalarResolverMap = async (
  schemaAst: GraphQLSchema
): Promise<Record<string, GraphQLScalarType<unknown, unknown>>> => {
  const firstScalarFound = Object.entries(schemaAst.getTypeMap()).find(
    ([_, namedType]) => !isNativeNamedType(namedType) && isScalarType(namedType)
  );

  if (!firstScalarFound) {
    return {};
  }

  let module:
    | { resolvers: Record<string, GraphQLScalarType<unknown, unknown>> }
    | undefined;
  try {
    module = await import(scalarsModuleName);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.warn(
        fmt.warn(
          `Unable to import \`${scalarsModuleName}\`. Install \`${scalarsModuleName}\` or you have to implement Scalar resolvers by yourself.`
        )
      );
    }
  }

  if (!module || !module.resolvers) {
    return {};
  }

  return module.resolvers;
};

const handleScalarType = (
  scalarResolvers: Record<string, GraphQLScalarType<unknown, unknown>>,
  schemaType: string,
  result: GetPluginsConfigResult
): void => {
  const scalarResolver = scalarResolvers[schemaType];
  if (!scalarResolver) {
    return;
  }

  if (
    scalarResolver.extensions.codegenScalarType &&
    typeof scalarResolver.extensions.codegenScalarType === 'string'
  ) {
    result.pluginsConfig.defaultScalarTypesMap[schemaType] =
      scalarResolver.extensions.codegenScalarType;
  }

  result.pluginsConfig.defaultScalarExternalResolvers[
    schemaType
  ] = `~${scalarsModuleName}#${scalarResolver.name}Resolver`;
};
