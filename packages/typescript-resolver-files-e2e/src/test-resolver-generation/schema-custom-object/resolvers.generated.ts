/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { featuredUserNames as Query_featuredUserNames } from './user/resolvers/Query/featuredUserNames';
import { me as Query_me } from './user/resolvers/Query/me';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { FeaturedUsersResult } from './user/resolvers/FeaturedUsersResult';
import { Profile } from './user/resolvers/Profile';
import { Topic } from './topic/resolvers/Topic';
import { User } from './user/resolvers/User';
import { SomeRandomScalar } from './base/resolvers/SomeRandomScalar';
import { Error } from './base/resolvers/Error';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    featuredUserNames: Query_featuredUserNames,
    me: Query_me,
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
    userByAccountName: Query_userByAccountName,
  },
  Mutation: { topicEdit: Mutation_topicEdit },
  Subscription: { profileChanges: Subscription_profileChanges },
  FeaturedUsersResult: FeaturedUsersResult,
  Profile: Profile,
  Topic: Topic,
  User: User,
  SomeRandomScalar: SomeRandomScalar,
  Error: Error,
  DateTime: DateTimeResolver,
};
