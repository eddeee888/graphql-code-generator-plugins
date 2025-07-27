import type { CodegenConfig } from '@graphql-codegen/cli';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-index-to-colocation/**/*.graphqls`,
  documents: `${projectRoot}/src/test-index-to-colocation/operations/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-index-to-colocation/generated/hooks.generated.ts`]:
      {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo',
        ],
      },
  },
};

export default config;
