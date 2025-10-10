import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const projectRoot = 'packages/typescript-resolver-files-e2e';

const config: CodegenConfig = {
  schema: [
    `${projectRoot}/src/test-mappers-vs-schema-types-advanced/**/*.graphqls`,
  ],
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    [`${projectRoot}/src/test-mappers-vs-schema-types-advanced/modules`]:
      defineConfig({
        typeDefsFilePath: false,
        mergeSchema: false,
        resolverGeneration: 'minimal',
        fixObjectTypeResolvers: 'experimental',
        tsConfigFilePath: `${projectRoot}/tsconfig.lib.json`,
      }),
  },
};

export default config;
