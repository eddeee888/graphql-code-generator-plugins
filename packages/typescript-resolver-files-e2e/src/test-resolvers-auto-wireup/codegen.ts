import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema':
      defineConfig(
        { resolverGeneration: 'minimal' },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
