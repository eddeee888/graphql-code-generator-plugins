import { graphql } from "../../gql";

export const MeDoc = graphql(`
query Me {
  me {
    ...UserFragment
  }
}
`);
