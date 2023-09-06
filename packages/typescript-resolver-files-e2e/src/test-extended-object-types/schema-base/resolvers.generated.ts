/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { BookStore_New as book_store_new_BookStore_New } from './book-store_new/resolvers/BookStore_New';
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
import { Topic as book_store_new_Topic } from './book-store_new/resolvers/Topic';
import { Topic as topic_Topic } from './topic/resolvers/Topic';
import { Topic as user_Topic } from './user/resolvers/Topic';
import { TopicByIdResult as topic_TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreateResult as topic_TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditResult as topic_TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserResult as topic_TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { User as user_User } from './user/resolvers/User';
import { User as book_store_new_User } from './book-store_new/resolvers/User';
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
  BookStore_New: book_store_new_BookStore_New,
  PaginationResult: base_PaginationResult,
  PayloadError: base_PayloadError,
  Profile: user_Profile,
  SomeRandomScalar: base_SomeRandomScalar,
  Topic: { ...book_store_new_Topic, ...topic_Topic, ...user_Topic },
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
  User: { ...user_User, ...book_store_new_User },
  UserResult: user_UserResult,
  DateTime: DateTimeResolver,
};
