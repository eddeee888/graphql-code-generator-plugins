/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { topicCreate as topic_Mutation_topicCreate } from './resolvers/Mutation/topicCreate';
import { topicEdit as topic_Mutation_topicEdit } from './resolvers/Mutation/topicEdit';
import { topicById as topic_Query_topicById } from './resolvers/Query/topicById';
import { topicsCreatedByUser as topic_Query_topicsCreatedByUser } from './resolvers/Query/topicsCreatedByUser';
import { Topic as topic_Topic } from './resolvers/Topic';
import { TopicByIdResult as topic_TopicByIdResult } from './resolvers/TopicByIdResult';
import { TopicCreateResult as topic_TopicCreateResult } from './resolvers/TopicCreateResult';
import { TopicEditResult as topic_TopicEditResult } from './resolvers/TopicEditResult';
import { TopicsCreatedByUserResult as topic_TopicsCreatedByUserResult } from './resolvers/TopicsCreatedByUserResult';
export const resolvers: Resolvers = {
  Query: {
    topicById: topic_Query_topicById,
    topicsCreatedByUser: topic_Query_topicsCreatedByUser,
  },
  Mutation: {
    topicCreate: topic_Mutation_topicCreate,
    topicEdit: topic_Mutation_topicEdit,
  },

  Topic: topic_Topic,
  TopicByIdResult: topic_TopicByIdResult,
  TopicCreateResult: topic_TopicCreateResult,
  TopicEditResult: topic_TopicEditResult,
  TopicsCreatedByUserResult: topic_TopicsCreatedByUserResult,
};
