/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate as Mutation_topicCreate } from './resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './resolvers/Mutation/topicEdit';
import { PaginationResult } from './resolvers/PaginationResult';
import { me as Query_me } from './resolvers/Query/me';
import { topicById as Query_topicById } from './resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './resolvers/Query/topicsCreatedByUser';
import { userByAccountName as Query_userByAccountName } from './resolvers/Query/userByAccountName';
import { StandardError } from './resolvers/StandardError';
import { Topic } from './resolvers/Topic';
import { TopicByIdPayload } from './resolvers/TopicByIdPayload';
import { TopicByIdResult } from './resolvers/TopicByIdResult';
import { TopicCreatePayload } from './resolvers/TopicCreatePayload';
import { TopicCreateResult } from './resolvers/TopicCreateResult';
import { TopicEditPayload } from './resolvers/TopicEditPayload';
import { TopicEditResult } from './resolvers/TopicEditResult';
import { TopicsCreatedByUserPayload } from './resolvers/TopicsCreatedByUserPayload';
import { TopicsCreatedByUserResult } from './resolvers/TopicsCreatedByUserResult';
import { User } from './resolvers/User';
import { UserPayload } from './resolvers/UserPayload';
import { UserResult } from './resolvers/UserResult';
import { DateTimeResolver } from 'graphql-tags';
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
