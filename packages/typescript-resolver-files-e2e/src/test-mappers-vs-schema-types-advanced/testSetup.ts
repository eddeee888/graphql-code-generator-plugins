import { createTestSetup } from '@workspace/testing';

const projectRoot = 'packages/typescript-resolver-files-e2e';

createTestSetup({
  baseDir: `${projectRoot}/src/test-mappers-vs-schema-types-advanced/`,
  files: [
    {
      file: 'modules/test/resolvers/Book.ts',
      content: `
      import type { BookResolvers } from './../../types.generated';
      export const Book: BookResolvers = {
        relatedBooks: ({ relatedBooks }) => {
          /* This existing content is not overwritten*/
        },
      };`,
    },
  ],
});
