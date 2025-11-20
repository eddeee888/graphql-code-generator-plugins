import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-module-naming-mode-all':
      defineConfig(
        {
          moduleNamingMode: 'all',
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-module-naming-mode-all/**/*.graphql',
          ],
        }
      ),
  },
};

export default config;
