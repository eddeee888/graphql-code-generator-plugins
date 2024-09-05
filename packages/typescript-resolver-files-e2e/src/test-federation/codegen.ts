import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const baseDir =
  'packages/typescript-resolver-files-e2e/src/test-federation/schema-base';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    [`${baseDir}/subgraph-products`]: defineConfig(
      {
        typeDefsFilePath: false,
        mergeSchema: false,
        typesPluginsConfig: { federation: true },
      },
      { schema: `${baseDir}/subgraph-products/**/schema.graphqls` }
    ),

    [`${baseDir}/subgraph-reviews`]: defineConfig(
      {
        typeDefsFilePath: false,
        mergeSchema: false,
        typesPluginsConfig: { federation: true },
      },
      { schema: `${baseDir}/subgraph-reviews/**/schema.graphqls` }
    ),

    [`${baseDir}/subgraph-users`]: defineConfig(
      {
        typeDefsFilePath: false,
        mergeSchema: false,
        typesPluginsConfig: {
          federation: true,
          generateInternalResolversIfNeeded: { __resolveReference: false },
        },
      },
      { schema: `${baseDir}/subgraph-users/**/schema.graphqls` }
    ),
  },
};

export default config;
