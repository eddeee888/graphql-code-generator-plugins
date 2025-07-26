/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSuspenseQuery } from "@apollo/client";
import { graphql } from "../../gql";

const UserDoc = graphql(`
query User($id: ID!) {
  user(id: $id) {
    ...UserFragment
  }
}
`);

export const Me = () => {
  useSuspenseQuery(UserDoc);
};
