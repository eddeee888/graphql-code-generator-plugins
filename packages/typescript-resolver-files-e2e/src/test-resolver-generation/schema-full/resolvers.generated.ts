/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Error as base_Error } from './base/resolvers/Error';
import { topicCreate as topic_Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as topic_Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult as base_PaginationResult } from './base/resolvers/PaginationResult';
import { PayloadError as base_PayloadError } from './base/resolvers/PayloadError';
import { Profile as user_Profile } from './user/resolvers/Profile';
import { me as user_Query_me } from './user/resolvers/Query/me';
import { topicById as topic_Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as topic_Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as user_Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { SomeRandomScalar as base_SomeRandomScalar } from './base/resolvers/SomeRandomScalar';
import { profileChanges as user_Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { Topic as topic_Topic } from './topic/resolvers/Topic';
import { TopicByIdPayload as topic_TopicByIdPayload } from './topic/resolvers/TopicByIdPayload';
import { TopicByIdResult as topic_TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreatePayload as topic_TopicCreatePayload } from './topic/resolvers/TopicCreatePayload';
import { TopicCreateResult as topic_TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditPayload as topic_TopicEditPayload } from './topic/resolvers/TopicEditPayload';
import { TopicEditResult as topic_TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserPayload as topic_TopicsCreatedByUserPayload } from './topic/resolvers/TopicsCreatedByUserPayload';
import { TopicsCreatedByUserResult as topic_TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { User as user_User } from './user/resolvers/User';
import { UserPayload as user_UserPayload } from './user/resolvers/UserPayload';
import { UserResult as user_UserResult } from './user/resolvers/UserResult';
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
  Error: base_Error,
  PaginationResult: base_PaginationResult,
  PayloadError: base_PayloadError,
  Profile: user_Profile,
  SomeRandomScalar: base_SomeRandomScalar,
  Topic: topic_Topic,
  TopicByIdPayload: topic_TopicByIdPayload,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreatePayload: topic_TopicCreatePayload,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditPayload: topic_TopicEditPayload,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserPayload: topic_TopicsCreatedByUserPayload,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  User: user_User,
  UserPayload: user_UserPayload,
  UserResult: user_UserResult,
  DateTime: DateTimeResolver,
};
