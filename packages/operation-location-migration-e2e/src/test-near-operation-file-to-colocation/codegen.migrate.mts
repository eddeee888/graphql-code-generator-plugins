import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const config: CodegenConfig = {
  schema: [
    'packages/operation-location-migration-e2e/src/test-near-operation-file-to-colocation/**/*.graphqls',
  ],
  documents: [
    'packages/operation-location-migration-e2e/src/test-near-operation-file-to-colocation/**/*.graphql',
  ],
  generates: {
    'packages/operation-location-migration-e2e/src/test-near-operation-file-to-colocation/components/':
      {
        preset: 'near-operation-file',
        presetConfig: {
          baseTypesPath: './types.generated.ts',
          extension: '.generated.ts',
        },
        plugins: ['typescript-operations', 'typescript-react-apollo'],
      },
    'packages/operation-location-migration-e2e/src/test-near-operation-file-to-colocation/components/types.generated.ts':
      {
        plugins: ['typescript'],
      },
    'packages/operation-location-migration-e2e/src/test-near-operation-file-to-colocation':
      defineConfig({
        tsConfigFilePath:
          'packages/operation-location-migration-e2e/src/test-near-operation-file-to-colocation/tsconfig.json',
        gqlTag: {
          name: 'graphql',
          importFrom: './gql',
          importType: 'relative',
        },
        hooksImportFrom: '@apollo/client',
      }),
  },
};

export default config;
