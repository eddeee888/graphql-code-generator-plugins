import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-modules/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-modules/**/*.graphqls.ts',
  ],
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-modules/modules':
      defineConfig({
        tsConfigFilePath:
          'packages/typescript-resolver-files-e2e/tsconfig.json',
      }),
  },
};

export default config;
