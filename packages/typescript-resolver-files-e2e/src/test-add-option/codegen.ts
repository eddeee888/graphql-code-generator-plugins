import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-add-option/schema-prepend':
      defineConfig(
        {
          add: { './types.generated.ts': { content: '/* PREPENDED */' } },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-add-option/schema-prepend/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-add-option/schema-prepend/**/*.graphqls.ts',
          ],
        }
      ),
    'packages/typescript-resolver-files-e2e/src/test-add-option/schema-append':
      defineConfig(
        {
          add: {
            './types.generated.ts': {
              content: '/* APPENDED */',
              placement: 'append',
            },
          },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-add-option/schema-append/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-add-option/schema-append/**/*.graphqls.ts',
          ],
        }
      ),
    'packages/typescript-resolver-files-e2e/src/test-add-option/schema-content':
      defineConfig(
        {
          add: {
            './types.generated.ts': {
              content: '/* CONTENT */',
              placement: 'content',
            },
          },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-add-option/schema-append/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-add-option/schema-append/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
