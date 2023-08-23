/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.gen';
import { topicCreate as topic_Mutation_topicCreate } from './topic/rslvrs/Mutation/topicCreate';
import { topicEdit as topic_Mutation_topicEdit } from './topic/rslvrs/Mutation/topicEdit';
import { PaginationResult as base_PaginationResult } from './base/rslvrs/PaginationResult';
import { Profile as user_Profile } from './user/rslvrs/Profile';
import { me as user_Query_me } from './user/rslvrs/Query/me';
import { topicById as topic_Query_topicById } from './topic/rslvrs/Query/topicById';
import { topicsCreatedByUser as topic_Query_topicsCreatedByUser } from './topic/rslvrs/Query/topicsCreatedByUser';
import { userByAccountName as user_Query_userByAccountName } from './user/rslvrs/Query/userByAccountName';
import { SomeOtherScalars as base_SomeOtherScalars } from './base/rslvrs/SomeOtherScalars';
import { StandardError as base_StandardError } from './base/rslvrs/StandardError';
import { profileChanges as user_Subscription_profileChanges } from './user/rslvrs/Subscription/profileChanges';
import { Topic as topic_Topic } from './topic/rslvrs/Topic';
import { TopicByIdResult as topic_TopicByIdResult } from './topic/rslvrs/TopicByIdResult';
import { TopicCreateResult as topic_TopicCreateResult } from './topic/rslvrs/TopicCreateResult';
import { TopicEditResult as topic_TopicEditResult } from './topic/rslvrs/TopicEditResult';
import { TopicsCreatedByUserResult as topic_TopicsCreatedByUserResult } from './topic/rslvrs/TopicsCreatedByUserResult';
import { User as user_User } from './user/rslvrs/User';
import { UserResult as user_UserResult } from './user/rslvrs/UserResult';
import { WithInputOutput as base_WithInputOutput } from './base/rslvrs/WithInputOutput';
import CustomBigIntResolver from './base/CustomBigIntResolver';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    me: user_Query_me,
    topicById: topic_Query_topicById,
    topicsCreatedByUser: topic_Query_topicsCreatedByUser,
    userByAccountName: user_Query_userByAccountName,
  },
  Mutation: {
    topicCreate: topic_Mutation_topicCreate,
    topicEdit: topic_Mutation_topicEdit,
  },
  Subscription: { profileChanges: user_Subscription_profileChanges },
  PaginationResult: base_PaginationResult,
  Profile: user_Profile,
  SomeOtherScalars: base_SomeOtherScalars,
  StandardError: base_StandardError,
  Topic: topic_Topic,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  User: user_User,
  UserResult: user_UserResult,
  WithInputOutput: base_WithInputOutput,
  BigInt: CustomBigIntResolver,
  DateTime: DateTimeResolver,
};
