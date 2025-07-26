/* This file has been created on filesystem by @workspace/testing#createTestSetup */

import { useMeLazyQuery } from '../generated/hooks.generated';
import { useQuery, useSuspenseQuery, useMutation } from "@apollo/client/react";
import { graphql } from "../gql";

const UpdateUserDoc = graphql(`
mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
  }
}
`);

const MeDoc = graphql(`
query Me {
  me {
    __typename
  }
}
`);

export const UserComponent = () => {
  useQuery(MeDoc, { onCompleted: () => {} });
  const res = useSuspenseQuery(MeDoc);
  useMutation(UpdateUserDoc);
  return 'User';
};
