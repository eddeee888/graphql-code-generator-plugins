import { validateAndMergeParsedConfigs } from './validateAndMergeParsedConfigs';

describe('validateAndMergeParsedConfigs', () => {
  it('merges configs correctly', () => {
    const result = validateAndMergeParsedConfigs({
      externalResolvers: {
        User: 'userResolvers#User as UserResolver',
      },
      parsedGraphQLSchemaMeta: {
        userDefinedSchemaTypeMap: {
          query: {},
          mutation: {},
          subscription: {},
          interface: {},
          union: {},
          object: {
            User: {
              'src/schema/user': {
                moduleName: 'user',
                schemaType: 'User',
                normalizedResolverName: {
                  base: 'User',
                  withModule: 'user.User',
                },
                pickReferenceResolver: false,
                fieldsToPick: [],
                relativePathFromBaseToModule: ['user'],
                relativePathToResolverTypesFile: '../types.generated.ts',
                resolverFile: { name: 'User', path: 'user/User.ts' },
                typeNamedImport: 'User',
                typeString: 'UserResolver',
              },
            },
          },
          scalar: {
            DateTime: {
              moduleName: 'base',
              schemaType: 'DateTime',
              typeString: 'DateTimeResolver',
              typeNamedImport: 'DateTimeResolver',
              resolverFile: { name: 'DateTime', path: 'base/DateTime.ts' },
              relativePathToResolverTypesFile: '../types.generated.ts',
              relativePathFromBaseToModule: ['./DateTime'],
              normalizedResolverName: {
                base: 'DateTime',
                withModule: 'base.DateTime',
              },
            },
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
      },
      typeMappers: {
        User: './user/schema.mappers#UserMapper',
      },
      userDefinedSchemaTypeMap: {
        query: {},
        mutation: {},
        subscription: {},
        interface: {},
        union: {},
        object: {
          User: {
            'src/schema/user': {
              moduleName: 'user',
              schemaType: 'User',
              normalizedResolverName: {
                base: 'User',
                withModule: 'user.User',
              },
              pickReferenceResolver: false,
              fieldsToPick: [],
              relativePathFromBaseToModule: ['user'],
              relativePathToResolverTypesFile: '../types.generated.ts',
              resolverFile: { name: 'User', path: 'user/User.ts' },
              typeNamedImport: 'User',
              typeString: 'UserResolver',
            },
          },
        },
        scalar: {
          DateTime: {
            moduleName: 'base',
            schemaType: 'DateTime',
            typeString: 'DateTimeResolver',
            typeNamedImport: 'DateTimeResolver',
            resolverFile: { name: 'DateTime', path: 'base/DateTime.ts' },
            relativePathToResolverTypesFile: '../types.generated.ts',
            relativePathFromBaseToModule: ['./DateTime'],
            normalizedResolverName: {
              base: 'DateTime',
              withModule: 'base.DateTime',
            },
          },
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
            query: {},
            mutation: {},
            subscription: {},
            interface: {},
            union: {},
            object: {
              User: {
                'src/schema/user': {
                  moduleName: 'user',
                  schemaType: 'User',
                  normalizedResolverName: {
                    base: 'User',
                    withModule: 'user.User',
                  },
                  pickReferenceResolver: false,
                  fieldsToPick: [],
                  relativePathFromBaseToModule: ['user'],
                  relativePathToResolverTypesFile: '../types.generated.ts',
                  resolverFile: { name: 'User', path: 'user/User.ts' },
                  typeNamedImport: 'User',
                  typeString: 'UserResolver',
                },
              },
            },
            scalar: {
              DateTime: {
                moduleName: 'base',
                schemaType: 'DateTime',
                typeString: 'DateTimeResolver',
                typeNamedImport: 'DateTimeResolver',
                resolverFile: { name: 'DateTime', path: 'base/DateTime.ts' },
                relativePathToResolverTypesFile: '../types.generated.ts',
                relativePathFromBaseToModule: ['./DateTime'],
                normalizedResolverName: {
                  base: 'DateTime',
                  withModule: 'base.DateTime',
                },
              },
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
      'Validation - Scalar "DateTime" found in presetConfig.externalResolvers. Use presetConfig.scalarsOverrides to override scalar implementation and type. Remove "DateTime" from presetConfig.externalResolvers.'
    );
  });
});
