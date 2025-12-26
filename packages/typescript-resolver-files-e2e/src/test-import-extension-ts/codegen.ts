import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-import-extension-ts/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-import-extension-ts/**/*.graphqls.ts',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-import-extension-ts/schema':
      defineConfig({ importExtension: '.ts' }),
  },
};

export default config;