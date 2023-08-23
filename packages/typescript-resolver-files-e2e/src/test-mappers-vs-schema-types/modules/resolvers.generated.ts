/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Account as user_Account } from './user/resolvers/Account';
import { Country as user_Country } from './user/resolvers/Country';
import { Error as base_Error } from './base/resolvers/Error';
import { topicCreate as topic_Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as topic_Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { Profile as user_Profile } from './user/resolvers/Profile';
import { ProfileMeta as user_ProfileMeta } from './user/resolvers/ProfileMeta';
import { account as user_Query_account } from './user/resolvers/Query/account';
import { me as user_Query_me } from './user/resolvers/Query/me';
import { topicById as topic_Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as topic_Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as user_Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
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
    account: user_Query_account,
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
  Account: user_Account,
  Country: user_Country,
  Error: base_Error,
  Profile: user_Profile,
  ProfileMeta: user_ProfileMeta,
  Topic: topic_Topic,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  User: user_User,
  UserResult: user_UserResult,
  DateTime: DateTimeResolver,
};
