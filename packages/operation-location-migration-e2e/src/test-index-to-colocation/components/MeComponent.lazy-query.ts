/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useLazyQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const MeDoc = graphql(`
query Me {
  me {
    ...UserFragment
  }
}
`);

export const MeComponent = () => {
  useLazyQuery(MeDoc);
  return 'Me';
};
