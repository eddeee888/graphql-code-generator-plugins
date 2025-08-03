import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-index-to-colocation/**/*.graphqls`,
  documents: `${projectRoot}/src/test-index-to-colocation/operations/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-index-to-colocation`]: defineConfig({
      tsConfigFilePath: `${projectRoot}/src/test-index-to-colocation/tsconfig.json`,
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
