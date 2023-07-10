import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema:
    'packages/typescript-resolver-files-e2e/src/test-config-ts/**/*.graphqls',
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-config-ts/modules':
      defineConfig(),
  },
};

export default config;
