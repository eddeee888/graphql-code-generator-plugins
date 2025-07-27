/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSubscription } from "@apollo/client/react";
import { gql } from "@apollo/client";

const UserChangesDoc = gql(`
subscription UserChanges {
  userChanges(id: "10") {
    id
    name
  }
}
`);

export const UserSubscription = () => {
  useSubscription(UserChangesDoc, {});
};
