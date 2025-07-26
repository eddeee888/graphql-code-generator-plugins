/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSuspenseQuery } from "@apollo/client";
import { UserDoc } from "./User.graphql";

export const Me = () => {
  useSuspenseQuery(UserDoc);
};
