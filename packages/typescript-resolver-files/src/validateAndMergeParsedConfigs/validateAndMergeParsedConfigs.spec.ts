import { validateAndMergeParsedConfigs } from './validateAndMergeParsedConfigs';

describe('validateAndMergeParsedConfigs', () => {
  it('merges configs correctly', () => {
    const result = validateAndMergeParsedConfigs({
      unmanagedNonScalarResolvers: {
        User: 'userResolvers#User as UserResolver',
      },
      parsedGraphQLSchemaMeta: {
        userDefinedSchemaTypeMap: {
          query: {},
          mutation: {},
          subscription: {},
          interface: {},
          union: {},
          enum: {},
          object: {
            User: {
              'src/schema/user': {
                moduleName: 'user',
                schemaType: 'User',
                normalizedResolverName: {
                  base: 'User',
                  withModule: 'user.User',
                },
                fieldsToPick: [],
                relativePathFromBaseToModule: ['user'],
                relativePathToResolverTypesFile: '../types.generated.ts',
                resolverFile: {
                  name: 'User',
                  path: 'user/User.ts',
                  isOnFilesystem: false,
                },
                typeNamedImport: () => 'User',
                typeString: () => 'UserResolver',
              },
            },
          },
          scalar: {
            DateTime: {
              moduleName: 'base',
              schemaType: 'DateTime',
              typeString: () => 'DateTimeResolver',
              typeNamedImport: () => 'DateTimeResolver',
              resolverFile: {
                name: 'DateTime',
                path: 'base/DateTime.ts',
                isOnFilesystem: false,
              },
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
          scalarsModuleResolvers: {
            DateTime: '~graphql-scalars#DateTimeResolver',
          },
          unmanagedScalarResolvers: {},
        },
      },
    });

    expect(result).toEqual({
      unmanagedResolvers: {
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
        enum: {},
        object: {
          User: {
            'src/schema/user': {
              moduleName: 'user',
              schemaType: 'User',
              normalizedResolverName: {
                base: 'User',
                withModule: 'user.User',
              },
              fieldsToPick: [],
              relativePathFromBaseToModule: ['user'],
              relativePathToResolverTypesFile: '../types.generated.ts',
              resolverFile: {
                name: 'User',
                path: 'user/User.ts',
                isOnFilesystem: false,
              },
              typeNamedImport: expect.any(Function),
              typeString: expect.any(Function),
            },
          },
        },
        scalar: {
          DateTime: {
            moduleName: 'base',
            schemaType: 'DateTime',
            typeString: expect.any(Function),
            typeNamedImport: expect.any(Function),
            resolverFile: {
              name: 'DateTime',
              path: 'base/DateTime.ts',
              isOnFilesystem: false,
            },
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
        unmanagedNonScalarResolvers: {
          DateTime: '~graphql-scalars#DateTimeResolver',
        },
        parsedGraphQLSchemaMeta: {
          userDefinedSchemaTypeMap: {
            query: {},
            mutation: {},
            subscription: {},
            interface: {},
            union: {},
            enum: {},
            object: {
              User: {
                'src/schema/user': {
                  moduleName: 'user',
                  schemaType: 'User',
                  normalizedResolverName: {
                    base: 'User',
                    withModule: 'user.User',
                  },
                  fieldsToPick: [],
                  relativePathFromBaseToModule: ['user'],
                  relativePathToResolverTypesFile: '../types.generated.ts',
                  resolverFile: {
                    name: 'User',
                    path: 'user/User.ts',
                    isOnFilesystem: false,
                  },
                  typeNamedImport: () => 'User',
                  typeString: () => 'UserResolver',
                },
              },
            },
            scalar: {
              DateTime: {
                moduleName: 'base',
                schemaType: 'DateTime',
                typeString: () => 'DateTimeResolver',
                typeNamedImport: () => 'DateTimeResolver',
                resolverFile: {
                  name: 'DateTime',
                  path: 'base/DateTime.ts',
                  isOnFilesystem: false,
                },
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
            scalarsModuleResolvers: {
              DateTime: '~graphql-scalars#DateTimeResolver',
            },
            unmanagedScalarResolvers: {},
          },
        },
      })
    ).toThrow(
      'Validation - Scalar "DateTime" found in presetConfig.externalResolvers. Use presetConfig.scalarsOverrides to override scalar implementation and type. Remove "DateTime" from presetConfig.externalResolvers.'
    );
  });
});
