/* This file has been created on filesystem by @workspace/testing-utils#createTestSetup */
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';

const MeDoc = graphql(`
  query Me {
    me {
      ...UserFragment
    }
  }
`);

export const Me = () => {
  useQuery(MeDoc);
};
