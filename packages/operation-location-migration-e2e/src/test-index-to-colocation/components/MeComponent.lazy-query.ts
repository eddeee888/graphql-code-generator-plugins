/* This file has been created on filesystem by @workspace/testing-utils#createTestSetup */
import { useLazyQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const MeDoc = graphql(`
query Me {
  me {
    __typename
  }
}
`)

export const MeComponent = () => {
  useLazyQuery(MeDoc);
  return 'Me';
};
