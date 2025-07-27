/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

const MeDoc = gql(`
query Me {
  me {
    __typename
  }
}
`);

export const MeComponent = () => {
  useQuery(MeDoc, { skip: true });
  return 'Me';
};
