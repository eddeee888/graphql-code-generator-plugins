import { graphql } from "../../gql";

export const UserChangesDoc = graphql(`
subscription UserChanges {
  userChanges(id: "100") {
    ...UserFragment
  }
}
`);

export const UpdateUserDoc = graphql(`
mutation UpdateUser {
  updateUser(input: {id: "100", name: "Tom"}) {
    id
    name
  }
}
`);

export const UserDoc = graphql(`
query User($id: ID!) {
  user(id: $id) {
    ...UserFragment
  }
}
`);
