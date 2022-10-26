/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { PaginationResult } from './base/resolvers/PaginationResult';
import { me } from './user/resolvers/Query/me';
import { topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { userByAccountName } from './user/resolvers/Query/userByAccountName';
import { StandardError } from './base/resolvers/StandardError';
import { Topic } from './topic/resolvers/Topic';
import { TopicByIdPayload } from './topic/resolvers/TopicByIdPayload';
import { TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import { TopicCreatePayload } from './topic/resolvers/TopicCreatePayload';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditPayload } from './topic/resolvers/TopicEditPayload';
import { TopicEditResult } from './topic/resolvers/TopicEditResult';
import { TopicsCreatedByUserPayload } from './topic/resolvers/TopicsCreatedByUserPayload';
import { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import { User } from './user/resolvers/User';
import { UserPayload } from './user/resolvers/UserPayload';
import { UserResult } from './user/resolvers/UserResult';
export const resolvers: Resolvers = {
  Query: { me, topicById, topicsCreatedByUser, userByAccountName },
  Mutation: { topicCreate, topicEdit },

  PaginationResult,
  StandardError,
  Topic,
  TopicByIdPayload,
  TopicByIdResult,
  TopicCreatePayload,
  TopicCreateResult,
  TopicEditPayload,
  TopicEditResult,
  TopicsCreatedByUserPayload,
  TopicsCreatedByUserResult,
  User,
  UserPayload,
  UserResult,
};
