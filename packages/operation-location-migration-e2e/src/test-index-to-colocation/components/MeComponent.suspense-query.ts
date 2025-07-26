/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSuspenseQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const MeDoc = graphql(`
query Me {
  me {
    __typename
  }
}
`)

export const MeComponent = () => {
  useSuspenseQuery(MeDoc);
  return 'Me';
};
