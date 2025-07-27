import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-operation-location-migration';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-apollo-support/**/*.graphqls`,
  documents: `${projectRoot}/src/test-apollo-support/operations/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-apollo-support`]: defineConfig({
      tsConfigFilePath: `${projectRoot}/src/test-apollo-support/tsconfig.json`,
      gqlTag: {
        name: 'gql',
        importFrom: '@apollo/client',
        importType: 'absolute',
      },
      hooksImportFrom: '@apollo/client',
    }),
  },
};

export default config;
