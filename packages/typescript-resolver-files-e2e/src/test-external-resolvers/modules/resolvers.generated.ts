/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate as topic_Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as topic_Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult as base_PaginationResult } from './base/resolvers/PaginationResult';
import { topicById as topic_Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as topic_Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as user_Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { StandardError as base_StandardError } from './base/resolvers/StandardError';
import { profileChanges as user_Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { Topic as topic_Topic } from './topic/resolvers/Topic';
import { TopicByIdResult as topic_TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreateResult as topic_TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditResult as topic_TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserResult as topic_TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { UserResult as user_UserResult } from './user/resolvers/UserResult';
import AbsoluteDefaultResolver, {
  BigIntResolver as BigIntNamedWithAliasResolver,
  BigIntResolver as BigIntSameNamedWithAliasResolver,
  DateTimeResolver,
  DateTimeNamedResolver,
  DateTimeSameNamedImportResolver,
} from 'graphql-scalars';
import { Profile as ProfileResolver } from 'modules/otherResolvers.js';
import meResolver from '@org/meResolver';
import RelativeDefaultResolver from './scalars/DefaultScalar';
import {
  NamedImportResolver,
  NamedImportResolver as NamedImportWithAliasResolver,
} from './scalars/Scalars';
import { User as UserResolver } from './otherResolvers';
import { UserPayload as UserPayloadResolver } from './otherResolvers.js';
export const resolvers: Resolvers = {
  Query: {
    topicById: topic_Query_topicById,
    topicsCreatedByUser: topic_Query_topicsCreatedByUser,
    userByAccountName: user_Query_userByAccountName,
    me: meResolver,
  },
  Mutation: {
    topicCreate: topic_Mutation_topicCreate,
    topicEdit: topic_Mutation_topicEdit,
  },
  Subscription: { profileChanges: user_Subscription_profileChanges },
  PaginationResult: base_PaginationResult,
  StandardError: base_StandardError,
  Topic: topic_Topic,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  UserResult: user_UserResult,
  AbsoluteDefault: AbsoluteDefaultResolver,
  BigIntNamedWithAlias: BigIntNamedWithAliasResolver,
  BigIntSameNamedWithAlias: BigIntSameNamedWithAliasResolver,
  DateTime: DateTimeResolver,
  DateTimeNamedImport: DateTimeNamedResolver,
  DateTimeSameNamedImport: DateTimeSameNamedImportResolver,
  Profile: ProfileResolver,
  RelativeDefault: RelativeDefaultResolver,
  RelativeNamedImport: NamedImportResolver,
  RelativeNamedImportWithAlias: NamedImportWithAliasResolver,
  User: UserResolver,
  UserPayload: UserPayloadResolver,
};
