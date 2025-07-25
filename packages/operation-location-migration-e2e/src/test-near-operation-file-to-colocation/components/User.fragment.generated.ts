import * as Types from './types.generated';

import { gql } from '@apollo/client';
export type UserFragmentFragment = {
  __typename?: 'User';
  id: string;
  name: string;
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    name
  }
`;
