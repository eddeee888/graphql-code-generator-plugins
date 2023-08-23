/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate as _Mutation_topicCreate } from './Mutation/topicCreate';
import { topicEdit as _Mutation_topicEdit } from './Mutation/topicEdit';
import { PaginationResult as _PaginationResult } from './PaginationResult';
import { me as _Query_me } from './Query/me';
import { topicById as _Query_topicById } from './Query/topicById';
import { topicsCreatedByUser as _Query_topicsCreatedByUser } from './Query/topicsCreatedByUser';
import { userByAccountName as _Query_userByAccountName } from './Query/userByAccountName';
import { StandardError as _StandardError } from './StandardError';
import { Topic as _Topic } from './Topic';
import { TopicByIdResult as _TopicByIdResult } from './TopicByIdResult';
import { TopicCreateResult as _TopicCreateResult } from './TopicCreateResult';
import { TopicEditResult as _TopicEditResult } from './TopicEditResult';
import { TopicsCreatedByUserResult as _TopicsCreatedByUserResult } from './TopicsCreatedByUserResult';
import { User as _User } from './User';
import { UserResult as _UserResult } from './UserResult';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    me: _Query_me,
    topicById: _Query_topicById,
    topicsCreatedByUser: _Query_topicsCreatedByUser,
    userByAccountName: _Query_userByAccountName,
  },
  Mutation: {
    topicCreate: _Mutation_topicCreate,
    topicEdit: _Mutation_topicEdit,
  },

  PaginationResult: _PaginationResult,
  StandardError: _StandardError,
  Topic: _Topic,
  TopicByIdResult: _TopicByIdResult,
  TopicCreateResult: _TopicCreateResult,
  TopicEditResult: _TopicEditResult,
  TopicsCreatedByUserResult: _TopicsCreatedByUserResult,
  User: _User,
  UserResult: _UserResult,
  DateTime: DateTimeResolver,
};
