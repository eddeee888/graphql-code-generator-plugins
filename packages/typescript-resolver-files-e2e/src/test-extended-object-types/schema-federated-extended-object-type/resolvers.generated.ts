/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { ForeignType as topic_ForeignType } from './schema/topic/resolvers/ForeignType';
import { ForeignType as user_ForeignType } from './schema/user/resolvers/ForeignType';
import { topicCreate as Mutation_topicCreate } from './schema/topic/resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './schema/topic/resolvers/Mutation/topicEdit';
import { PaginationResult } from './schema/base/resolvers/PaginationResult';
import { PayloadError } from './schema/base/resolvers/PayloadError';
import { Profile } from './schema/user/resolvers/Profile';
import { me as Query_me } from './schema/user/resolvers/Query/me';
import { topicById as Query_topicById } from './schema/topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './schema/topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './schema/user/resolvers/Query/userByAccountName';
import { SomeRandomScalar } from './schema/base/resolvers/SomeRandomScalar';
import { profileChanges as Subscription_profileChanges } from './schema/user/resolvers/Subscription/profileChanges';
import { Topic } from './schema/topic/resolvers/Topic';
import { TopicByIdResult } from './schema/topic/resolvers/TopicByIdResult';
import { TopicCreateResult } from './schema/topic/resolvers/TopicCreateResult';
import { TopicEditResult } from './schema/topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserResult } from './schema/topic/resolvers/TopicsCreatedByUserResult';
import { User } from './schema/user/resolvers/User';
import { UserResult } from './schema/user/resolvers/UserResult';
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
  ForeignType: { ...topic_ForeignType, ...user_ForeignType },
  PaginationResult: PaginationResult,
  PayloadError: PayloadError,
  Profile: Profile,
  SomeRandomScalar: SomeRandomScalar,
  Topic: Topic,
  TopicByIdResult: TopicByIdResult,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
  User: User,
  UserResult: UserResult,
  DateTime: DateTimeResolver,
};
