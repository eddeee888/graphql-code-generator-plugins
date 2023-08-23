/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate as topic_Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as topic_Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult as base_PaginationResult } from './base/resolvers/PaginationResult';
import { Profile as user_Profile } from './user/resolvers/Profile';
import { me as user_Query_me } from './user/resolvers/Query/me';
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
import { User as user_User } from './user/resolvers/User';
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
  PaginationResult: base_PaginationResult,
  Profile: user_Profile,
  StandardError: base_StandardError,
  Topic: topic_Topic,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  User: user_User,
  UserResult: user_UserResult,
  DateTime: DateTimeResolver,
};
