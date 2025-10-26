import { gql } from "../gql";

export const MeDoc = gql(`
query Me {
  user {
    id
  }
}
`);
