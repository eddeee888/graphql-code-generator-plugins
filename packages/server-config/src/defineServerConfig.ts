import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';

export type ServerConfig = typeScriptPlugin.TypeScriptPluginConfig &
  typeScriptResolversPlugin.TypeScriptResolversPluginConfig;

const nativeScalarTypes = {
  ID: { input: 'string', output: 'string | number' },
};

export const defineServerConfig = (config: ServerConfig = {}): ServerConfig => {
  const scalars = config.scalars || {};
  if (typeof scalars === 'string') {
    // TODO: maybe share a `fmt` between two libs?
    throw new Error(
      '[@eddeee888/gcg-server-config] ERROR: defineServerConfig does not support config.scalars string'
    );
  }

  return {
    enumsAsTypes: true,
    optionalResolveType: true,
    resolversNonOptionalTypename: {
      unionMember: true,
      interfaceImplementingType: true,
    },
    ...config,
    scalars: {
      ...nativeScalarTypes,
      ...scalars,
    },
  };
};
