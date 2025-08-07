import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-resolver-filename-case/graphql/schemas':
      defineConfig(
        {
          fileOutputCasing: 'kebab-case',
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolver-filename-case/graphql/schemas/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolver-filename-case/graphql/schemas/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
