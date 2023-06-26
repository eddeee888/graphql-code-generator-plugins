/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Error } from './base/resolvers/Error';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult } from './base/resolvers/PaginationResult';
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
import { UserResult } from './user/resolvers/UserResult';
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
  Error: { ...Error },
  PaginationResult: { ...PaginationResult },
  StandardError: { ...StandardError },
  Topic: { ...Topic },
  TopicByIdPayload: { ...TopicByIdPayload },
  TopicByIdResult: { ...TopicByIdResult },
  TopicCreatePayload: { ...TopicCreatePayload },
  TopicCreateResult: { ...TopicCreateResult },
  TopicEditPayload: { ...TopicEditPayload },
  TopicEditResult: { ...TopicEditResult },
  TopicsCreatedByUserPayload: { ...TopicsCreatedByUserPayload },
  TopicsCreatedByUserResult: { ...TopicsCreatedByUserResult },
  UserResult: { ...UserResult },
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
