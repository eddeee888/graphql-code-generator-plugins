import type { CodegenConfig } from '@graphql-codegen/cli';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-apollo-support/**/*.graphqls`,
  documents: `${projectRoot}/src/test-apollo-support/operations/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-apollo-support/generated/hooks.generated.ts`]: {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
