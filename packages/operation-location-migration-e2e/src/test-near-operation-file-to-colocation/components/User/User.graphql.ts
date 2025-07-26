import { graphql } from "../../gql";

export const UserDoc = graphql(`
query User($id: ID!) {
  user(id: $id) {
    ...UserFragment
  }
}
`)