import type { TopicResolvers } from './../../types.generated';
export const Topic: TopicResolvers = {
  id: ({ id }) => id,
  createdAt: async (_parent, _arg, _ctx) => {
    /* existing implementation, must keep */
    return '2024-01-01T00:00:00.000Z';
  },
  creator: ({ creator }, _arg, _ctx) => {
    /* Topic.creator resolver is required because Topic.creator and TopicMapper.creator are not compatible */
    return creator;
  },
  likedBy: ({ likedBy }, _arg, _ctx) => {
    /* Topic.likedBy resolver is required because Topic.likedBy and TopicMapper.likedBy are not compatible */
    return likedBy;
  },
  mostRelatedTopic: ({ mostRelatedTopic }, _arg, _ctx) => {
    /* Topic.mostRelatedTopic resolver is required because Topic.mostRelatedTopic and TopicMapper.mostRelatedTopic are not compatible */
    return mostRelatedTopic;
  },
  name: async (_parent, _arg, _ctx) => {
    /* Topic.name resolver is required because Topic.name exists but TopicMapper.name does not */
  },
  relatedTopics: ({ relatedTopics }, _arg, _ctx) => {
    /* Topic.relatedTopics resolver is required because Topic.relatedTopics and TopicMapper.relatedTopics are not compatible */
    return relatedTopics;
  },
  url: async (_parent, _arg, _ctx) => {
    /* Topic.url resolver is required because Topic.url exists but TopicMapper.url does not */
  },
};
