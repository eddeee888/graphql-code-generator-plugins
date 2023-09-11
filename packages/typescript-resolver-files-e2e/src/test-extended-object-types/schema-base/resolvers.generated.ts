/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { BookStore_New } from './book-store_new/resolvers/BookStore_New';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult } from './base/resolvers/PaginationResult';
import { PayloadError } from './base/resolvers/PayloadError';
import { Profile } from './user/resolvers/Profile';
import { me as Query_me } from './user/resolvers/Query/me';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import { SomeRandomScalar } from './base/resolvers/SomeRandomScalar';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import { Topic as book_store_new_Topic } from './book-store_new/resolvers/Topic';
import { Topic as topic_Topic } from './topic/resolvers/Topic';
import { Topic as user_Topic } from './user/resolvers/Topic';
import { TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { User as user_User } from './user/resolvers/User';
import { User as book_store_new_User } from './book-store_new/resolvers/User';
import { UserResult } from './user/resolvers/UserResult';
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
  BookStore_New: BookStore_New,
  PaginationResult: PaginationResult,
  PayloadError: PayloadError,
  Profile: Profile,
  SomeRandomScalar: SomeRandomScalar,
  Topic: { ...book_store_new_Topic, ...topic_Topic, ...user_Topic },
  TopicByIdResult: TopicByIdResult,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
  User: { ...user_User, ...book_store_new_User },
  UserResult: UserResult,
  DateTime: DateTimeResolver,
};
