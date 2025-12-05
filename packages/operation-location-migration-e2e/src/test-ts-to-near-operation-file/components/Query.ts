/* This file has been created on filesystem by @workspace/testing#createTestSetup */

import { type MeQueryVariables, MeQuery } from '../operations/query.generated';
import { ME_DOC } from '../operations/query.gql';
import { useQuery } from '@apollo/client/react';
import { MeDoc } from "./../operations/query.gql";

export const Me = () => {
  const thing = useQuery(MeDoc);
};
