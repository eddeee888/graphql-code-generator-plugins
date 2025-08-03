import { graphql } from "../gql";

export const RootUserDoc = graphql(`
query RootUser {
  user(id: "888") {
    ...UserFragment
  }
}
`);
