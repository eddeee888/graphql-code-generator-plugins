import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-resolver-multi-module-object/modules':
      defineConfig(
        {
          mergeSchema: false,
          resolverGeneration: 'all',
          resolverMainFile: '../generated/resolvers.ts',
          resolverMainFileMode: 'modules',
          resolverRelativeTargetDir: '../resolvers',
          resolverTypesPath: 'generated/allTypes.ts',
          typeDefsFileMode: 'modules',
          typeDefsFilePath: '../generated/typeDefs.ts',
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolver-multi-module-object/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolver-multi-module-object/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
