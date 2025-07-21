import { graphql } from '../gql';
export const SOMETHINGDoc = graphql(`
  query Me {
    me {
      __typename
    }
  }
`);
