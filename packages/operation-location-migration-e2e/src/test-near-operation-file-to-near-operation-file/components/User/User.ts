/* This file has been created on filesystem by @workspace/testing#createTestSetup */

import { useUserLazyQuery } from './User.generated';
import { useQuery, useSuspenseQuery, useMutation } from "@apollo/client";
import { UserDoc, UpdateUserDoc } from "./User.graphql";
import { RootUserDoc } from "./../RootUser.graphql";

export const User = () => {
  useQuery(RootUserDoc)
  useSuspenseQuery(UserDoc);
  useQuery(UserDoc, { skip: true })
  useMutation(UpdateUserDoc, { onCompleted: () => {} })
};
