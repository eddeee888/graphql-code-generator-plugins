/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Error } from './base/resolvers/Error';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { Profile } from './user/resolvers/Profile';
import { me as Query_me } from './user/resolvers/Query/me';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { SomeRandomScalar } from './base/resolvers/SomeRandomScalar';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { Topic } from './topic/resolvers/Topic';
import { User } from './user/resolvers/User';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    me: Query_me,
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
    userByAccountName: Query_userByAccountName,
  },
  Mutation: { topicEdit: Mutation_topicEdit },
  Subscription: { profileChanges: Subscription_profileChanges },
  Error: Error,
  Profile: Profile,
  SomeRandomScalar: SomeRandomScalar,
  Topic: Topic,
  User: User,
  DateTime: DateTimeResolver,
};
