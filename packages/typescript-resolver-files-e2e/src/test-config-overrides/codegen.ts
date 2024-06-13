import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-config-overrides/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-config-overrides/**/*.graphqls.ts',
  ],
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-config-overrides/modules':
      defineConfig({
        resolverTypesPath: './types.gen.ts',
        resolverRelativeTargetDir: 'rslvrs',
        resolverMainFile: 'resolvers.gen.ts',
        typeDefsFilePath: false,
        resolverGeneration: 'all',
        scalarsOverrides: {
          BigInt: {
            resolver:
              'base/CustomBigIntResolver#default as CustomBigIntResolver', // graphql-scalars' default is `~graphql-scalars#BigIntResolver`
            type: 'number', // graphql-scalars' default is `bigint`
          },
          WithInputOutput: {
            type: {
              input: 'Date',
              output: 'string',
            },
          },
        },
        typesPluginsConfig: {
          namingConvention: {
            typeNames: 'change-case#upperCase',
            enumValues: 'change-case#lowerCase',
            transformUnderscore: true,
          },
          enumsAsTypes: false,
          contextType: './customTypes#ResolverContext',
        },
      }),
  },
};

export default config;
