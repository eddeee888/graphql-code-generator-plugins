import { graphql } from "../gql";

export const UserFragmentDoc = graphql(`
fragment UserFragment on User {
  id
  name
}
`);
