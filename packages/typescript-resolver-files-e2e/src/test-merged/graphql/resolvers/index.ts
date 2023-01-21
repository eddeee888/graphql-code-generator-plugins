/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate as Mutation_topicCreate } from './Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './Mutation/topicEdit';
import { PaginationResult } from './PaginationResult';
import { me as Query_me } from './Query/me';
import { topicById as Query_topicById } from './Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './Query/userByAccountName';
import { StandardError } from './StandardError';
import { Topic } from './Topic';
import { TopicByIdPayload } from './TopicByIdPayload';
import { TopicByIdResult } from './TopicByIdResult';
import { TopicCreatePayload } from './TopicCreatePayload';
import { TopicCreateResult } from './TopicCreateResult';
import { TopicEditPayload } from './TopicEditPayload';
import { TopicEditResult } from './TopicEditResult';
import { TopicsCreatedByUserPayload } from './TopicsCreatedByUserPayload';
import { TopicsCreatedByUserResult } from './TopicsCreatedByUserResult';
import { User } from './User';
import { UserPayload } from './UserPayload';
import { UserResult } from './UserResult';
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

  PaginationResult: PaginationResult,
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
  DateTime: DateTimeResolver,
};
