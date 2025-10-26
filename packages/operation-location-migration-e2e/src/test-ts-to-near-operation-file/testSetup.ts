import { createTestSetup } from '@workspace/testing';

createTestSetup({
  baseDir: __dirname,
  files: [
    {
      file: 'operations/query.gql.ts',
      content: `import gql from 'graphql-tag';

export const ME_DOC = gql\`query Me { user { id } }\``,
    },
    {
      file: 'components/Query.ts',
      content: `import { type MeQueryVariables, MeQuery } from '../operations/query.generated';
import { ME_DOC } from '../operations/query.gql';
import { useQuery } from '@apollo/client/react';

export const Me = () => {
  const thing = useQuery<MeQuery, MeQueryVariables>(ME_DOC);
};\n`,
    },
  ],
});
