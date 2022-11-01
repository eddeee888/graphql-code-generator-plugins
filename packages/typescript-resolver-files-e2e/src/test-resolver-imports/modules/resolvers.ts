/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult } from './base/resolvers/PaginationResult';
import { Profile } from './user/resolvers/Profile';
import { me } from './user/resolvers/Query/me';
import { topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName } from './user/resolvers/Query/userByAccountName';
import { StandardError } from './base/resolvers/StandardError';
import { profileChanges } from './user/resolvers/Subscription/profileChanges';
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
import AbsoluteDefaultResolver, {
  BigIntResolver as BigIntNamedWithAliasResolver,
  BigIntResolver as BigIntSameNamedWithAliasResolver,
  DateTimeNamedResolver,
  DateTimeSameNamedImportResolver,
} from 'graphql-scalars';
import RelativeDefaultResolver from './scalars/DefaultScalar';
import {
  NamedImportResolver,
  NamedImportResolver as NamedImportWithAliasResolver,
} from './scalars/Scalars';
export const resolvers: Resolvers = {
  Query: { me, topicById, topicsCreatedByUser, userByAccountName },
  Mutation: { topicCreate, topicEdit },
  Subscription: { profileChanges },
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
  AbsoluteDefault: AbsoluteDefaultResolver,
  BigIntNamedWithAlias: BigIntNamedWithAliasResolver,
  BigIntSameNamedWithAlias: BigIntSameNamedWithAliasResolver,
  DateTimeNamedImport: DateTimeNamedResolver,
  DateTimeSameNamedImport: DateTimeSameNamedImportResolver,
  RelativeDefault: RelativeDefaultResolver,
  RelativeNamedImport: NamedImportResolver,
  RelativeNamedImportWithAlias: NamedImportWithAliasResolver,
};