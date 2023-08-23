/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js';
import { topicCreate as topic_Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate.js';
import { topicEdit as topic_Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit.js';
import { PaginationResult as base_PaginationResult } from './base/resolvers/PaginationResult.js';
import { PayloadError as base_PayloadError } from './base/resolvers/PayloadError.js';
import { Profile as user_Profile } from './user/resolvers/Profile.js';
import { me as user_Query_me } from './user/resolvers/Query/me.js';
import { topicById as topic_Query_topicById } from './topic/resolvers/Query/topicById.js';
import { topicsCreatedByUser as topic_Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser.js';
import { userByAccountName as user_Query_userByAccountName } from './user/resolvers/Query/userByAccountName.js';
import { SomeRandomScalar as base_SomeRandomScalar } from './base/resolvers/SomeRandomScalar.js';
import { profileChanges as user_Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges.js';
import { Topic as topic_Topic } from './topic/resolvers/Topic.js';
import { TopicByIdResult as topic_TopicByIdResult } from './topic/resolvers/TopicByIdResult.js';
import { TopicCreateResult as topic_TopicCreateResult } from './topic/resolvers/TopicCreateResult.js';
import { TopicEditResult as topic_TopicEditResult } from './topic/resolvers/TopicEditResult.js';
import { TopicsCreatedByUserResult as topic_TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult.js';
import { User as user_User } from './user/resolvers/User.js';
import { UserResult as user_UserResult } from './user/resolvers/UserResult.js';
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
  PayloadError: base_PayloadError,
  Profile: user_Profile,
  SomeRandomScalar: base_SomeRandomScalar,
  Topic: topic_Topic,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  User: user_User,
  UserResult: user_UserResult,
  DateTime: DateTimeResolver,
};
