/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.gen';
import { topicCreate as Mutation_topicCreate } from './topic/rslvrs/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/rslvrs/Mutation/topicEdit';
import { PaginationResult } from './base/rslvrs/PaginationResult';
import { Profile } from './user/rslvrs/Profile';
import { me as Query_me } from './user/rslvrs/Query/me';
import { topicById as Query_topicById } from './topic/rslvrs/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/rslvrs/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/rslvrs/Query/userByAccountName';
import { SomeOtherScalars } from './base/rslvrs/SomeOtherScalars';
import { StandardError } from './base/rslvrs/StandardError';
import { profileChanges as Subscription_profileChanges } from './user/rslvrs/Subscription/profileChanges';
import { Topic } from './topic/rslvrs/Topic';
import { TopicByIdPayload } from './topic/rslvrs/TopicByIdPayload';
import { TopicByIdResult } from './topic/rslvrs/TopicByIdResult';
import { TopicCreatePayload } from './topic/rslvrs/TopicCreatePayload';
import { TopicCreateResult } from './topic/rslvrs/TopicCreateResult';
import { TopicEditPayload } from './topic/rslvrs/TopicEditPayload';
import { TopicEditResult } from './topic/rslvrs/TopicEditResult';
import { TopicsCreatedByUserPayload } from './topic/rslvrs/TopicsCreatedByUserPayload';
import { TopicsCreatedByUserResult } from './topic/rslvrs/TopicsCreatedByUserResult';
import { User } from './user/rslvrs/User';
import { UserPayload } from './user/rslvrs/UserPayload';
import { UserResult } from './user/rslvrs/UserResult';
import CustomBigIntResolver from './base/CustomBigIntResolver';
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
  SomeOtherScalars: SomeOtherScalars,
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
  BigInt: CustomBigIntResolver,
  DateTime: DateTimeResolver,
};
