import { createTestSetup } from '@workspace/testing';

createTestSetup({
  baseDir:
    'packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types/',
  files: [
    {
      file: 'modules/topic/resolvers/Topic.ts',
      content: `import type { TopicResolvers } from './../../types.generated';
      import {name} from '../Topic.name';
      import {Topic_url} from '../Topic.url';
      export const Topic: TopicResolvers = {
        id: ({ id }) => id,
        createdAt: async (_parent, _arg, _ctx) => {
          /* existing implementation, must keep */
          return '2024-01-01T00:00:00.000Z';
        },
        name,
        url: Topic_url,
      };`,
    },
  ],
});
