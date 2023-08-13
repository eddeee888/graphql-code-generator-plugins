import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';

export type ServerConfig = typeScriptPlugin.TypeScriptPluginConfig &
  typeScriptResolversPlugin.TypeScriptResolversPluginConfig;

const nativeScalarTypes = {
  ID: { input: 'string', output: 'string | number' },
};

export const defineConfig = (config: ServerConfig = {}): ServerConfig => {
  const configScalars = config.scalars || {};

  return {
    enumsAsTypes: true,
    optionalResolveType: true,
    resolversNonOptionalTypename: {
      unionMember: true,
      interfaceImplementingType: true,
    },
    ...config,
    scalars:
      typeof configScalars === 'string'
        ? configScalars
        : {
            ...nativeScalarTypes,
            ...configScalars,
          },
  };
};
