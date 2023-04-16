import { GraphQLSchema, isObjectType, isScalarType } from 'graphql';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import type { ParseSourcesResult } from '../parseSources';
import type { TypeMappersMap } from '../parseTypeMappers';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import {
  isNativeNamedType,
  isRootObjectType,
  parseLocationForWhitelistedModule,
} from '../utils';

interface ParseGraphQLSchemaParams {
  schemaAst: GraphQLSchema;
  sourceMap: ParseSourcesResult['sourceMap'];
  typeMappersMap: TypeMappersMap;
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

export const parseGraphQLSchema = ({
  schemaAst,
  sourceMap,
  typeMappersMap,
  whitelistedModules,
  blacklistedModules,
}: ParseGraphQLSchemaParams): ParsedGraphQLSchemaMeta => {
  return Object.entries(schemaAst.getTypeMap()).reduce<ParsedGraphQLSchemaMeta>(
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
        res.userDefinedSchemaTypeMap.scalar[schemaType] = true;
        handleScalarType(schemaType, res);
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

const handleScalarType = (
  schemaType: string,
  result: ParsedGraphQLSchemaMeta
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
