import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types/**/*.graphqls.ts',
  ],
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types/modules':
      defineConfig({
        tsConfigFilePath:
          'packages/typescript-resolver-files-e2e/tsconfig.lib.json',
      }),
  },
};

export default config;
