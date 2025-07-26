import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/**/*.graphqls',
  documents:
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/operations/*.graphql',
  generates: {
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/generated/hooks.generated.ts':
      {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo',
        ],
      },
  },
};

export default config;
