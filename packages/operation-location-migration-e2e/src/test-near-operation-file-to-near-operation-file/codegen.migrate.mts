import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-near-operation-file-to-colocation/**/*.graphqls`,
  documents: `${projectRoot}/src/test-near-operation-file-to-colocation/**/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-near-operation-file-to-colocation/components/`]: {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: './types.generated.ts',
        extension: '.generated.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
    [`${projectRoot}/src/test-near-operation-file-to-colocation/components/types.generated.ts`]:
      {
        plugins: ['typescript'],
      },
    [`${projectRoot}/src/test-near-operation-file-to-colocation`]: defineConfig(
      {
        tsConfigFilePath: `${projectRoot}/src/test-near-operation-file-to-colocation/tsconfig.json`,
        targetStyle: 'near-operation-file',
        gqlTag: {
          name: 'graphql',
          importFrom: './gql',
          importType: 'relative',
        },
        hooksImportFrom: '@apollo/client',
      }
    ),
  },
};

export default config;
