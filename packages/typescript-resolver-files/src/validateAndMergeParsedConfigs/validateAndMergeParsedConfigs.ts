import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import { fmt } from '../utils';

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
    scalarTypes: defaultScalarTypesMap,
    typeMappers: defaultTypeMappers,
  };
};
