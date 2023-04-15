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
  scalarsModule: string | false;
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

export const parseGraphQLSchema = async ({
  schemaAst,
  sourceMap,
  typeMappersMap,
  scalarsModule,
  whitelistedModules,
  blacklistedModules,
}: GetPluginsConfigParams): Promise<GetPluginsConfigResult> => {
  const scalarResolverMap = scalarsModule
    ? await getScalarResolverMapFromModule(scalarsModule)
    : {};

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

      if (isScalarType(namedType) && scalarsModule) {
        handleScalarType({
          scalarResolverMap,
          schemaType,
          scalarsModule,
          result: res,
        });
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

const handleScalarType = ({
  scalarResolverMap,
  schemaType,
  result,
  scalarsModule,
}: {
  scalarResolverMap: Record<string, GraphQLScalarType<unknown, unknown>>;
  schemaType: string;
  result: GetPluginsConfigResult;
  scalarsModule: string;
}): void => {
  const scalarResolver = scalarResolverMap[schemaType];
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
  ] = `~${scalarsModule}#${scalarResolver.name}Resolver`;
};
