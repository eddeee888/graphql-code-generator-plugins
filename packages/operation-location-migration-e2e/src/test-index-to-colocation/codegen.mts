import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const config: CodegenConfig = {
  schema: [
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/**/*.graphqls',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/operation-location-migration-e2e/src/test-index-to-colocation/generated/hooks.generated.ts':
      {
        documents: [
          'packages/operation-location-migration-e2e/src/test-index-to-colocation/operations/*.graphql',
        ],
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo',
        ],
      },
    'packages/operation-location-migration-e2e/src/test-index-to-colocation':
      defineConfig(
        {
          tsConfigFilePath:
            'packages/operation-location-migration-e2e/src/test-index-to-colocation/tsconfig.json',
          gqlTag: {
            name: 'graphql',
            importFrom: './gql',
            importType: 'relative',
          },
          hooksImportFrom: '@apollo/client/react',
        },
        {
          documents:
            'packages/operation-location-migration-e2e/src/test-index-to-colocation/operations/*.graphql',
        }
      ),
  },
};

export default config;
