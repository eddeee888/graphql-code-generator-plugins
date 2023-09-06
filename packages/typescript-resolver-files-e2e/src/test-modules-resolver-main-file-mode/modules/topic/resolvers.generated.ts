/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { topicCreate as Mutation_topicCreate } from './resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './resolvers/Mutation/topicEdit';
import { topicById as Query_topicById } from './resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './resolvers/Query/topicsCreatedByUser';
import { Topic } from './resolvers/Topic';
import { TopicByIdResult } from './resolvers/TopicByIdResult';
import { TopicCreateResult } from './resolvers/TopicCreateResult';
import { TopicEditResult } from './resolvers/TopicEditResult';
import { TopicsCreatedByUserResult } from './resolvers/TopicsCreatedByUserResult';
export const resolvers: Resolvers = {
  Query: {
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
  },
  Mutation: {
    topicCreate: Mutation_topicCreate,
    topicEdit: Mutation_topicEdit,
  },

  Topic: Topic,
  TopicByIdResult: TopicByIdResult,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
};
