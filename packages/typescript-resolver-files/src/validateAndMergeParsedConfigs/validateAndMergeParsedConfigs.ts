import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import { fmt } from '../utils';

// TODO: This is a long-standing issue in GraphQL Codegen: https://github.com/dotansimha/graphql-code-generator/issues/2588
// We cannot simply set scalar types for ID like this...
// Summary:
//   - client inputs ID: string, in resolvers' arg: string
//   - client inputs ID: number, in resolvers' arg: string
//
//   - resolvers returns ID: string | number
//     - Note: unless using mappers, then must follow mappers' type
//
//   - GraphQL engine handles ID: string | number
//   - client receives ID: string
// const nativeScalarTypes = {
//   ID: 'string | number',
// };

interface MergedConfig {
  userDefinedSchemaTypeMap: ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap'];
  externalResolvers: ParsedPresetConfig['externalResolvers'];
  scalarTypes: Record<string, string>;
  typeMappers: Record<string, string>;
}

/**
 * validateAndMergeParsedConfigs is used to make sure all parsed configs do not incorrectly override each other.
 * Use this to ensure there's only one way of doing something. e.g.
 *   - scalarsOverrides must be used over externalResolvers to override scalars
 */
export const validateAndMergeParsedConfigs = ({
  externalResolvers,
  parsedGraphQLSchemaMeta: {
    userDefinedSchemaTypeMap,
    pluginsConfig: {
      defaultScalarExternalResolvers,
      defaultScalarTypesMap,
      defaultTypeMappers,
    },
  },
}: {
  externalResolvers: ParsedPresetConfig['externalResolvers'];
  parsedGraphQLSchemaMeta: ParsedGraphQLSchemaMeta;
}): MergedConfig => {
  Object.keys(externalResolvers).forEach((schemaType) => {
    if (userDefinedSchemaTypeMap.scalar[schemaType]) {
      throw new Error(
        fmt.error(
          `Scalar "${schemaType}" found in presetConfig.externalResolvers. Use presetConfig.scalarsOverrides to override scalar implementation and type. Remove "${schemaType}" from presetConfig.externalResolvers.`,
          'Validation'
        )
      );
    }
  });

  return {
    userDefinedSchemaTypeMap,
    externalResolvers: {
      ...defaultScalarExternalResolvers,
      ...externalResolvers,
    },
    scalarTypes: {
      // ...nativeScalarTypes,
      ...defaultScalarTypesMap,
    },
    typeMappers: defaultTypeMappers,
  };
};
