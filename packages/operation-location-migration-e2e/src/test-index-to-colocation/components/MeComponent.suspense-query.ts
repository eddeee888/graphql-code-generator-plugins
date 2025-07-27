/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSuspenseQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const MeDoc = graphql(`
query Me {
  me {
    ...UserFragment
  }
}
`);

export const MeComponent = () => {
  useSuspenseQuery(MeDoc);
  return 'Me';
};
