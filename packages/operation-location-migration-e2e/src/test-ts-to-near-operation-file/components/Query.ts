/* This file has been created on filesystem by @workspace/testing#createTestSetup */

import { MeDoc } from '../gql';
import { useQuery } from '@apollo/client/react';

export const Me = () => {
  useQuery(MeDoc);
};
