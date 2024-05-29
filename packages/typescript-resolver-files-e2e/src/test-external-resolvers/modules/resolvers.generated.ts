/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { PaginationResult } from './base/resolvers/PaginationResult';
import { StandardError } from './base/resolvers/StandardError';
import { Topic } from './topic/resolvers/Topic';
import { TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { UserResult } from './user/resolvers/UserResult';
import meResolver from '@org/meResolver';
import { Profile as ProfileResolver } from 'modules/otherResolvers.js';
import { User as UserResolver } from './otherResolvers';
import AbsoluteDefaultResolver, {
  BigIntResolver as BigIntNamedWithAliasResolver,
  BigIntResolver as BigIntSameNamedWithAliasResolver,
  DateTimeResolver,
  DateTimeNamedResolver,
  DateTimeSameNamedImportResolver,
} from 'graphql-scalars';
import RelativeDefaultResolver from './scalars/DefaultScalar';
import {
  NamedImportResolver,
  NamedImportResolver as NamedImportWithAliasResolver,
} from './scalars/Scalars';
import { UserPayload as UserPayloadResolver } from './otherResolvers.js';
import { ErrorType } from './base/CustomErrorType';
export const resolvers: Resolvers = {
  Query: {
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
    userByAccountName: Query_userByAccountName,
    me: meResolver,
  },
  Mutation: {
    topicCreate: Mutation_topicCreate,
    topicEdit: Mutation_topicEdit,
  },
  Subscription: { profileChanges: Subscription_profileChanges },
  PaginationResult: PaginationResult,
  StandardError: StandardError,
  Topic: Topic,
  TopicByIdResult: TopicByIdResult,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
  UserResult: UserResult,
  Profile: ProfileResolver,
  User: UserResolver,
  AbsoluteDefault: AbsoluteDefaultResolver,
  BigIntNamedWithAlias: BigIntNamedWithAliasResolver,
  BigIntSameNamedWithAlias: BigIntSameNamedWithAliasResolver,
  DateTime: DateTimeResolver,
  DateTimeNamedImport: DateTimeNamedResolver,
  DateTimeSameNamedImport: DateTimeSameNamedImportResolver,
  RelativeDefault: RelativeDefaultResolver,
  RelativeNamedImport: NamedImportResolver,
  RelativeNamedImportWithAlias: NamedImportWithAliasResolver,
  UserPayload: UserPayloadResolver,
  ErrorType: ErrorType,
};
