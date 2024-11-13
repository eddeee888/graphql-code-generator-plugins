const { createTestSetup } = require('../utils/createTestSetup');

createTestSetup({
  baseDir:
    'packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types/',
  files: [
    {
      file: 'modules/topic/resolvers/Topic.ts',
      content: `import type { TopicResolvers } from './../../types.generated';
      export const Topic: TopicResolvers = {
        id: ({ id }) => id,
        createdAt: async (_parent, _arg, _ctx) => {
          /* existing implementation */
        },
      };`,
    },
  ],
});
