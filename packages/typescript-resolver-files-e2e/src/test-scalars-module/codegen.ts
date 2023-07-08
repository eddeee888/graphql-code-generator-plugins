import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-scalars-module/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-scalars-module/**/*.graphqls.ts',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-scalars-module/schema':
      defineConfig({ scalarsModule: false }),
    'packages/typescript-resolver-files-e2e/src/test-scalars-module/schema-overrides':
      defineConfig({
        scalarsModule: false,
        scalarsOverrides: {
          DateTime: {
            resolver: 'base/scalars/CustomDateTime#DateTime',
          },
          ID: {
            type: 'number',
          },
          Boolean: {
            type: 'true | false',
          },
          SomeRandomScalar: {
            type: 'bigint',
          },
        },
      }),
  },
};

export default config;
