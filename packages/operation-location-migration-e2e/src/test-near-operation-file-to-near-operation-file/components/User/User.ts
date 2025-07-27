/* This file has been created on filesystem by @workspace/testing#createTestSetup */

import { useUserLazyQuery } from './User.generated';
import { useSuspenseQuery, useQuery, useMutation } from "@apollo/client";
import { UserDoc, UpdateUserDoc } from "./User.graphql";

export const User = () => {
  useSuspenseQuery(UserDoc);
  useQuery(UserDoc, { skip: true })
  useMutation(UpdateUserDoc, { onCompleted: () => {} })
};
