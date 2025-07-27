/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSuspenseQuery, gql } from "@apollo/client";

const MeDoc = gql(`
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
