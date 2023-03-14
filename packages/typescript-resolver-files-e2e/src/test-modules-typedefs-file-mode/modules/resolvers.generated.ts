/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult } from './base/resolvers/PaginationResult';
import { Profile } from './user/resolvers/Profile';
import { me as Query_me } from './user/resolvers/Query/me';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { StandardError } from './base/resolvers/StandardError';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { Topic } from './topic/resolvers/Topic';
import { TopicByIdPayload } from './topic/resolvers/TopicByIdPayload';
import { TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreatePayload } from './topic/resolvers/TopicCreatePayload';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditPayload } from './topic/resolvers/TopicEditPayload';
import { TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserPayload } from './topic/resolvers/TopicsCreatedByUserPayload';
import { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { User } from './user/resolvers/User';
import { UserPayload } from './user/resolvers/UserPayload';
import { UserResult } from './user/resolvers/UserResult';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    me: Query_me,
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
    userByAccountName: Query_userByAccountName,
  },
  Mutation: {
    topicCreate: Mutation_topicCreate,
    topicEdit: Mutation_topicEdit,
  },
  Subscription: { profileChanges: Subscription_profileChanges },
  PaginationResult: PaginationResult,
  Profile: Profile,
  StandardError: StandardError,
  Topic: Topic,
  TopicByIdPayload: TopicByIdPayload,
  TopicByIdResult: TopicByIdResult,
  TopicCreatePayload: TopicCreatePayload,
  TopicCreateResult: TopicCreateResult,
  TopicEditPayload: TopicEditPayload,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserPayload: TopicsCreatedByUserPayload,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
  User: User,
  UserPayload: UserPayload,
  UserResult: UserResult,
  DateTime: DateTimeResolver,
};
