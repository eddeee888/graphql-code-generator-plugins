import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const config: CodegenConfig = {
  schema: [
    'packages/operation-location-migration-e2e/src/test-arbitrary-to-colocation/**/*.graphqls',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/operation-location-migration-e2e/src/test-arbitrary-to-colocation':
      defineConfig(
        {
          artifactDirectory: './gql',
          gqlTagName: 'graphql',
        },
        {
          documents:
            'packages/operation-location-migration-e2e/src/test-arbitrary-to-colocation/operations/*.graphql',
        }
      ),
  },
};

export default config;
