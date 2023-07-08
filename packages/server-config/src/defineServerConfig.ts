import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';

export type ServerConfig = typeScriptPlugin.TypeScriptPluginConfig &
  typeScriptResolversPlugin.TypeScriptResolversPluginConfig;

export const defineServerConfig = (config: ServerConfig): ServerConfig => {
  return {
    enumsAsTypes: true,
    optionalResolveType: true,
    resolversNonOptionalTypename: {
      unionMember: true,
      interfaceImplementingType: true,
    },
    ...config,
  };
};
