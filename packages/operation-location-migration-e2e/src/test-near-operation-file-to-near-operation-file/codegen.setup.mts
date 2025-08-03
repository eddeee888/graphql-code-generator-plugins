import type { CodegenConfig } from '@graphql-codegen/cli';

const projectRoot = 'packages/operation-location-migration-e2e';

const config: CodegenConfig = {
  schema: `${projectRoot}/src/test-near-operation-file-to-near-operation-file/**/*.graphqls`,
  documents: `${projectRoot}/src/test-near-operation-file-to-near-operation-file/**/*.graphql`,
  generates: {
    [`${projectRoot}/src/test-near-operation-file-to-near-operation-file/components/`]:
      {
        preset: 'near-operation-file',
        presetConfig: {
          baseTypesPath: './types.generated.ts',
          extension: '.generated.ts',
        },
        plugins: ['typescript-operations', 'typescript-react-apollo'],
      },
    [`${projectRoot}/src/test-near-operation-file-to-near-operation-file/components/types.generated.ts`]:
      {
        plugins: ['typescript'],
      },
  },
};

export default config;
