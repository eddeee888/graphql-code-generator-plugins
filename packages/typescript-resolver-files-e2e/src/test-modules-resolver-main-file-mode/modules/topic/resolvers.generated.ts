/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { topicCreate as Mutation_topicCreate } from './resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './resolvers/Mutation/topicEdit';
import { topicById as Query_topicById } from './resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './resolvers/Query/topicsCreatedByUser';
import { Topic } from './resolvers/Topic';
import { TopicByIdPayload } from './resolvers/TopicByIdPayload';
import { TopicByIdResult } from './resolvers/TopicByIdResult';
import { TopicCreatePayload } from './resolvers/TopicCreatePayload';
import { TopicCreateResult } from './resolvers/TopicCreateResult';
import { TopicEditPayload } from './resolvers/TopicEditPayload';
import { TopicEditResult } from './resolvers/TopicEditResult';
import { TopicsCreatedByUserPayload } from './resolvers/TopicsCreatedByUserPayload';
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

  Topic: { ...Topic },
  TopicByIdPayload: { ...TopicByIdPayload },
  TopicByIdResult: { ...TopicByIdResult },
  TopicCreatePayload: { ...TopicCreatePayload },
  TopicCreateResult: { ...TopicCreateResult },
  TopicEditPayload: { ...TopicEditPayload },
  TopicEditResult: { ...TopicEditResult },
  TopicsCreatedByUserPayload: { ...TopicsCreatedByUserPayload },
  TopicsCreatedByUserResult: { ...TopicsCreatedByUserResult },
};
