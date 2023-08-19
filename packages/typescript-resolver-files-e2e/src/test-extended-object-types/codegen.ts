import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-base':
      defineConfig(
        {},
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-base/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-base/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
