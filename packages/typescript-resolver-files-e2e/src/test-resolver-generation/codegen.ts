import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '../../../../dist/packages/typescript-resolver-files/src/index';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/**/*.graphqls.ts',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled':
      defineConfig({ resolverGeneration: 'disabled' }),

    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended':
      defineConfig({ resolverGeneration: 'recommended' }),

    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full':
      defineConfig({ resolverGeneration: 'full' }),
  },
};

export default config;
