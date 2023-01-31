import { GraphQLSchema, isObjectType, isScalarType } from 'graphql';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import type { ParseSourcesResult } from '../parseSources';
import type { TypeMappersMap } from '../parseTypeMappers';
import {
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

/**
 * TODO: rename to parseGraphQLSchema
 */
export const getPluginsConfig = ({
  schemaAst,
  sourceMap,
  typeMappersMap,
  whitelistedModules,
  blacklistedModules,
}: GetPluginsConfigParams): GetPluginsConfigResult => {
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
        handleScalarType(schemaType, res);
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

const handleScalarType = (
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
  ] = `~graphql-scalars#${scalarResolver.name}Resolver`;
};
