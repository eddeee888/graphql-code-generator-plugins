import { validateAndMergeParsedConfigs } from './validateAndMergeParsedConfigs';

describe('validateAndMergeParsedConfigs', () => {
  it('merges configs correctly', () => {
    const result = validateAndMergeParsedConfigs({
      externalResolvers: {
        User: 'userResolvers#User as UserResolver',
      },
      parsedGraphQLSchemaMeta: {
        userDefinedSchemaTypeMap: {
          object: {
            User: true,
          },
          scalar: {
            DateTime: true,
          },
        },
        pluginsConfig: {
          defaultTypeMappers: {
            User: './user/schema.mappers#UserMapper',
          },
          defaultScalarTypesMap: {
            DateTime: 'string',
          },
          defaultScalarExternalResolvers: {
            DateTime: '~graphql-scalars#DateTimeResolver',
          },
        },
      },
    });

    expect(result).toEqual({
      externalResolvers: {
        User: 'userResolvers#User as UserResolver',
        DateTime: '~graphql-scalars#DateTimeResolver',
      },
      scalarTypes: {
        DateTime: 'string',
        ID: 'string | number',
      },
      typeMappers: {
        User: './user/schema.mappers#UserMapper',
      },
      userDefinedSchemaTypeMap: {
        object: {
          User: true,
        },
        scalar: {
          DateTime: true,
        },
      },
    });
  });

  it('throws error if input externalResolvers is used for scalars', () => {
    expect(() =>
      validateAndMergeParsedConfigs({
        externalResolvers: {
          DateTime: '~graphql-scalars#DateTimeResolver',
        },
        parsedGraphQLSchemaMeta: {
          userDefinedSchemaTypeMap: {
            object: {
              User: true,
            },
            scalar: {
              DateTime: true,
            },
          },
          pluginsConfig: {
            defaultTypeMappers: {
              User: './user/schema.mappers#UserMapper',
            },
            defaultScalarTypesMap: {
              DateTime: 'string',
            },
            defaultScalarExternalResolvers: {
              DateTime: '~graphql-scalars#DateTimeResolver',
            },
          },
        },
      })
    ).toThrow(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - Scalar "DateTime" found in presetConfig.externalResolvers. Use presetConfig.scalarsOverrides to override scalar implementation and type. Remove "DateTime" from presetConfig.externalResolvers.'
    );
  });
});
