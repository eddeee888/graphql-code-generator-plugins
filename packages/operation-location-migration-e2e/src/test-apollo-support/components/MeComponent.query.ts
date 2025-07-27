/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useQuery, gql } from "@apollo/client";

const MeDoc = gql(`
query Me {
  me {
    ...UserFragment
  }
}
`);

export const MeComponent = () => {
  useQuery(MeDoc, { skip: true });
  return 'Me';
};
