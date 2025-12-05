import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-ts-to-near-operation-file/schema.graphqls`,
  documents: `${projectRoot}/src/test-ts-to-near-operation-file/operations/*.gql.ts`,
  generates: {
    [`${projectRoot}/src/test-ts-to-near-operation-file`]: defineConfig({
      tsConfigFilePath: `${projectRoot}/src/test-ts-to-near-operation-file/tsconfig.json`,
      gqlTag: {
        name: 'gql',
        importFrom: './gql',
        importType: 'relative',
      },
      targetStyle: 'near-operation-file',
      hooksImportFrom: '@apollo/client/react',
    }),
  },
};

export default config;
