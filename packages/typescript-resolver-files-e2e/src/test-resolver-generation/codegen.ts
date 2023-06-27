import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '../../../../dist/packages/typescript-resolver-files/src/index';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled':
      {
        schema: [
          'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled/**/*.graphqls',
          'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled/**/*.graphqls.ts',
        ],
        ...defineConfig({ resolverGeneration: 'disabled' }),
      },

    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended':
      {
        schema: [
          'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended/**/*.graphqls',
          'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended/**/*.graphqls.ts',
        ],
        ...defineConfig({ resolverGeneration: 'recommended' }),
      },

    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full':
      {
        schema: [
          'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full/**/*.graphqls',
          'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full/**/*.graphqls.ts',
        ],
        ...defineConfig({ resolverGeneration: 'all' }),
      },
  },
};

export default config;
