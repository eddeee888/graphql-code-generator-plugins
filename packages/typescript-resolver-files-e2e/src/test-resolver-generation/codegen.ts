import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  generates: {
    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-custom-object':
      defineConfig(
        {
          resolverGeneration: {
            query: '*.Query.*',
            mutation: [
              'topic.*',
              '!topic.Mutation.topicCreate',
              '!user.Mutation.*',
            ],
            subscription: '*',
            scalar: '!*.File',
            object: ['!*Result', '!*Error'],
            union: '',
            interface: '*',
          },
        },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-custom-object/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-custom-object/**/*.graphqls.ts',
          ],
        }
      ),
    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled':
      defineConfig(
        { resolverGeneration: 'disabled' },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-disabled/**/*.graphqls.ts',
          ],
        }
      ),

    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended':
      defineConfig(
        { resolverGeneration: 'recommended' },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-recommended/**/*.graphqls.ts',
          ],
        }
      ),

    'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full':
      defineConfig(
        { resolverGeneration: 'all' },
        {
          schema: [
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full/**/*.graphqls',
            'packages/typescript-resolver-files-e2e/src/test-resolver-generation/schema-full/**/*.graphqls.ts',
          ],
        }
      ),
  },
};

export default config;
