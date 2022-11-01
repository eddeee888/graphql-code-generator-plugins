/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate } from './Mutation/topicCreate';
import { topicEdit } from './Mutation/topicEdit';
import { PaginationResult } from './PaginationResult';
import { me } from './Query/me';
import { topicById } from './Query/topicById';
import { topicsCreatedByUser } from './Query/topicsCreatedByUser';
import { userByAccountName } from './Query/userByAccountName';
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
export const resolvers: Resolvers = {
  Query: { me, topicById, topicsCreatedByUser, userByAccountName },
  Mutation: { topicCreate, topicEdit },

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
};
