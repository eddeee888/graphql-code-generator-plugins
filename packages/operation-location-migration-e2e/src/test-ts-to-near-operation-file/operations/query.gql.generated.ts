import * as Types from './types.generated';

export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string } | null };
