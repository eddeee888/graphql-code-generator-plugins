import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-near-operation-file-to-colocation/**/*.graphqls`,
  documents: `${projectRoot}/src/test-near-operation-file-to-colocation/**/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-near-operation-file-to-colocation`]: defineConfig(
      {
        tsConfigFilePath: `${projectRoot}/src/test-near-operation-file-to-colocation/tsconfig.json`,
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
