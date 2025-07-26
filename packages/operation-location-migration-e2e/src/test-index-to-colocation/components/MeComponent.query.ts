/* This file has been created on filesystem by @workspace/testing-utils#createTestSetup */
import { useQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const MeDoc = graphql(`
query Me {
  me {
    __typename
  }
}
`)

export const MeComponent = () => {
  useQuery(MeDoc, { skip: true });
  return 'Me';
};
