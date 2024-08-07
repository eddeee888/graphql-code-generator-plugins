import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';
import type {
  ParsedPresetConfig,
  ScalarsOverridesType,
} from '../validatePresetConfig';
import { fmt } from '../utils';

interface MergedConfig {
  userDefinedSchemaTypeMap: ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap'];
  scalarTypes: Record<string, ScalarsOverridesType>;
  typeMappers: Record<string, string>;
  /**
   * Resolvers users explicitly wants to control i.e. unmanaged by server preset so no static analysis is run on these resolvers
   * This is set by a few options:
   * - config.externalResolvers: for non-scalar types
   * - config.scalarsOverrides: for scalar types
   * - external resolvers e.g. from `graphql-scalars` module
   **/
  unmanagedResolvers: Record<string, string>;
}

/**
 * validateAndMergeParsedConfigs is used to make sure all parsed configs do not incorrectly override each other.
 * Use this to ensure there's only one way of doing something. e.g.
 *   - scalarsOverrides must be used over externalResolvers to override scalars
 */
export const validateAndMergeParsedConfigs = ({
  unmanagedNonScalarResolvers,
  parsedGraphQLSchemaMeta: {
    userDefinedSchemaTypeMap,
    pluginsConfig: {
      scalarsModuleResolvers,
      unmanagedScalarResolvers,
      defaultScalarTypesMap,
      defaultTypeMappers,
    },
  },
}: {
  unmanagedNonScalarResolvers: ParsedPresetConfig['externalResolvers'];
  parsedGraphQLSchemaMeta: ParsedGraphQLSchemaMeta;
}): MergedConfig => {
  Object.keys(scalarsModuleResolvers).forEach((schemaType) => {
    if (
      // If the scalar is defined on the filesystem, it means user wants to use their custom definition.
      // This means we should use it, instead of importing it from scalar module
      userDefinedSchemaTypeMap.scalar[schemaType]?.resolverFile.isOnFilesystem
    ) {
      delete scalarsModuleResolvers[schemaType];
    }
  });

  // By default, codegen doesn't generate types for enums
  // This is great for the default codegen setup but it's not great for server preset - where we need to be able to import
  // generated resolver types to fill in content for resolver files without needing to manually set up mappers/enumValues
  // `schemaEnumTypeMappers` is the schema mappers for enums, which can be overriden by user's provided mapper types
  const schemaEnumTypeMappers = Object.entries(
    userDefinedSchemaTypeMap.enum
  ).reduce<Record<string, string>>(
    (result, [enumTypename, { allowedValues }]) => {
      result[enumTypename] = allowedValues.map((v) => `'${v}'`).join(' | ');
      return result;
    },
    {}
  );

  Object.keys(unmanagedNonScalarResolvers).forEach((schemaType) => {
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
    scalarTypes: {
      ...defaultScalarTypesMap,
    },
    typeMappers: {
      ...schemaEnumTypeMappers,
      ...defaultTypeMappers,
    },
    unmanagedResolvers: {
      ...unmanagedNonScalarResolvers,
      ...scalarsModuleResolvers,
      ...unmanagedScalarResolvers,
    },
  };
};
