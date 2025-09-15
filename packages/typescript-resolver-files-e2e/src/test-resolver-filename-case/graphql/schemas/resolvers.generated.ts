/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { APIQuery as Query_APIQuery } from './resolvers/Query/api-query';
import { query as Query_query } from './resolvers/Query/query';
import { user as Query_user } from './resolvers/Query/user';
import { userProfile as Query_userProfile } from './resolvers/Query/user-profile';
import { prefixedAPIMutation as Mutation_prefixedAPIMutation } from './resolvers/Mutation/prefixed-api-mutation';
import { RandomResult } from './resolvers/random-result';
import { User } from './resolvers/user';
import { UserProfile } from './resolvers/user-profile';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    APIQuery: Query_APIQuery,
    query: Query_query,
    user: Query_user,
    userProfile: Query_userProfile,
  },
  Mutation: { prefixedAPIMutation: Mutation_prefixedAPIMutation },

  RandomResult: RandomResult,
  User: User,
  UserProfile: UserProfile,
  DateTime: DateTimeResolver,
};
