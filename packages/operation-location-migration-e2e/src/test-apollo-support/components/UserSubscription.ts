/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSubscription, gql } from "@apollo/client";

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
