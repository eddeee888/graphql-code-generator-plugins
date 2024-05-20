/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.gen';
import { me as Query_me } from './user/rslvrs/Query/me';
import { topicById as Query_topicById } from './topic/rslvrs/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/rslvrs/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/rslvrs/Query/userByAccountName';
import { topicCreate as Mutation_topicCreate } from './topic/rslvrs/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/rslvrs/Mutation/topicEdit';
import { profileChanges as Subscription_profileChanges } from './user/rslvrs/Subscription/profileChanges';
import { PaginationResult } from './base/rslvrs/PaginationResult';
import { Profile } from './user/rslvrs/Profile';
import { StandardError } from './base/rslvrs/StandardError';
import { Topic } from './topic/rslvrs/Topic';
import { TopicByIdResult } from './topic/rslvrs/TopicByIdResult';
import { TopicCreateResult } from './topic/rslvrs/TopicCreateResult';
import { TopicEditResult } from './topic/rslvrs/TopicEditResult';
import { TopicsCreatedByUserResult } from './topic/rslvrs/TopicsCreatedByUserResult';
import { User } from './user/rslvrs/User';
import { UserResult } from './user/rslvrs/UserResult';
import { SomeOtherScalars } from './base/rslvrs/SomeOtherScalars';
import { WithInputOutput } from './base/rslvrs/WithInputOutput';
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
  StandardError: StandardError,
  Topic: Topic,
  TopicByIdResult: TopicByIdResult,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
  User: User,
  UserResult: UserResult,
  SomeOtherScalars: SomeOtherScalars,
  WithInputOutput: WithInputOutput,
  BigInt: CustomBigIntResolver,
  DateTime: DateTimeResolver,
};
