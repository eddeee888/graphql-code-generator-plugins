import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: [
    'packages/typescript-resolver-files-e2e/src/test-mappers/**/*.graphqls',
    'packages/typescript-resolver-files-e2e/src/test-mappers/**/*.graphqls.ts',
  ],
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-mappers/modules':
      defineConfig({
        resolverGeneration: {
          query: '*',
          mutation: '*',
          subscription: '*',
          scalar: '*',
          object: '*',
          union: '',
          interface: '*',
          enum: '',
        },
        mappersRelativeTargetDir: 'mappers',
        mappersFileExtension: '.type-mappers.ts',
        mappersSuffix: '_Mapper',
      }),
  },
};

export default config;
