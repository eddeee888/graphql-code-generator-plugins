import type { CodegenConfig } from '@graphql-codegen/cli';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-ts-to-near-operation-file/schema.graphqls`,
  documents: `${projectRoot}/src/test-ts-to-near-operation-file/operations/*.gql.ts`,
  generates: {
    [`${projectRoot}/src/test-ts-to-near-operation-file/operations/types.generated.ts`]:
      { plugins: ['typescript'] },
    [`${projectRoot}/src/test-ts-to-near-operation-file/operations`]: {
      plugins: ['typescript-operations'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.generated.ts',
      },
    },
  },
};

export default config;
