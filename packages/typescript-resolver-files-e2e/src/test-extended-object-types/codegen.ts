import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-base':
      defineConfig(
        {},
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-base/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-base/**/*.graphqls.ts',
          ],
        }
      ),
    'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-external-resolver-override-extended-object-type':
      defineConfig(
        {
          externalResolvers: {
            Topic: '~@org/topic-module#Topic as TopicResolver',
          },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-external-resolver-override-extended-object-type/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-external-resolver-override-extended-object-type/**/*.graphqls.ts',
          ],
        }
      ),
    'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-federated-extended-object-type':
      defineConfig(
        {
          typesPluginsConfig: {
            federation: true,
          },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-federated-extended-object-type/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-extended-object-types/schema-federated-extended-object-type/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
