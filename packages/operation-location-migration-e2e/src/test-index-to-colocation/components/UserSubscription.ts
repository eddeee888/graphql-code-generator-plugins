/* This file has been created on filesystem by @workspace/testing#createTestSetup */
import { useSubscription } from "@apollo/client/react";
import { graphql } from "../gql";

const UserChangesDoc = graphql(`
subscription UserChanges {
  userChanges(id: "10") {
    id
    name
  }
}
`)

export const UserSubscription = () => {
  useSubscription(UserChangesDoc, {});
};
