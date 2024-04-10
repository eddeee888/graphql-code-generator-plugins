import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-nested-domain-modules':
      defineConfig(
        {
          add: { './types.generated.ts': { content: '/* PREPENDED */' } },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-nested-domain-modules/**/*.graphql',
          ],
        }
      ),
  },
};

export default config;
