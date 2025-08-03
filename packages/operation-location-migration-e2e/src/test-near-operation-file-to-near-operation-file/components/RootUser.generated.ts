import * as Types from './types.generated';

import { gql } from '@apollo/client';
import { UserFragmentFragmentDoc } from './User.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RootUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RootUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string } | null };


export const RootUserDocument = gql`
    query RootUser {
  user(id: "888") {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useRootUserQuery__
 *
 * To run a query within a React component, call `useRootUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useRootUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRootUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useRootUserQuery(baseOptions?: Apollo.QueryHookOptions<RootUserQuery, RootUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RootUserQuery, RootUserQueryVariables>(RootUserDocument, options);
      }
export function useRootUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RootUserQuery, RootUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RootUserQuery, RootUserQueryVariables>(RootUserDocument, options);
        }
export function useRootUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RootUserQuery, RootUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RootUserQuery, RootUserQueryVariables>(RootUserDocument, options);
        }
export type RootUserQueryHookResult = ReturnType<typeof useRootUserQuery>;
export type RootUserLazyQueryHookResult = ReturnType<typeof useRootUserLazyQuery>;
export type RootUserSuspenseQueryHookResult = ReturnType<typeof useRootUserSuspenseQuery>;
export type RootUserQueryResult = Apollo.QueryResult<RootUserQuery, RootUserQueryVariables>;