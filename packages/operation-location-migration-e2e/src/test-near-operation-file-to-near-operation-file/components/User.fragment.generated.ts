/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from './types.generated';

import { gql } from '@apollo/client';
export type UserFragmentFragment = { id: string, name: string };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
}
    `;