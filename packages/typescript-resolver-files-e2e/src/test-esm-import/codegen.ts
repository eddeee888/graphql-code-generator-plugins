import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '../../../../dist/packages/typescript-resolver-files/src/index';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-esm-import/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-esm-import/**/*.graphqls.ts',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-esm-import/schema':
      defineConfig({ emitLegacyCommonJSImports: false }),
  },
};

export default config;
