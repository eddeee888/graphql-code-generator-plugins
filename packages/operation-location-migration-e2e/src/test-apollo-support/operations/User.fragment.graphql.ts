import { gql } from "@apollo/client";

export const UserFragmentDoc = gql(`
fragment UserFragment on User {
  name
}
`);
