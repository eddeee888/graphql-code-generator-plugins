import type * as typeScriptPlugin from '@graphql-codegen/typescript';
import type * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';

export type ServerConfig = typeScriptPlugin.TypeScriptPluginConfig &
  typeScriptResolversPlugin.TypeScriptResolversPluginConfig;

const nativeScalarTypes = {
  ID: { input: 'string', output: 'string | number' },
};

export const defineConfig = (config: ServerConfig = {}): ServerConfig => {
  const configScalars = config.scalars || {};

  return {
    enumsAsTypes: true,
    maybeValue: 'T | null | undefined',
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
