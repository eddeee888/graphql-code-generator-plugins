/* This file has been created on filesystem by @workspace/testing#createTestSetup */

import { useMeLazyQuery } from '../generated/hooks.generated';
import { useQuery, useSuspenseQuery, useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";

const UpdateUserDoc = gql(`
mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
  }
}
`);

const MeDoc = gql(`
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
