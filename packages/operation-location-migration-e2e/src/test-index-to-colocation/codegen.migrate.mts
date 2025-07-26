import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const config: CodegenConfig = {
  schema:
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/**/*.graphqls',
  documents:
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/operations/*.graphql',
  generates: {
    'packages/operation-location-migration-e2e/src/test-index-to-colocation':
      defineConfig({
        tsConfigFilePath:
          'packages/operation-location-migration-e2e/src/test-index-to-colocation/tsconfig.json',
        gqlTag: {
          name: 'graphql',
          importFrom: './gql',
          importType: 'relative',
        },
        hooksImportFrom: '@apollo/client/react',
      }),
  },
};

export default config;
