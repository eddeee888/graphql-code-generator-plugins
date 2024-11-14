import type { TopicResolvers } from './../../types.generated';
export const Topic: TopicResolvers = {
  /* Implement Topic resolver logic here */
  creator: async (_parent, _arg, _ctx) => {
    /* Topic.creator resolver is required because Topic.creator exists but TopicMapper.creator does not */
  },
  id: ({ id }, _arg, _ctx) => {
    /* Topic.id resolver is required because Topic.id and TopicMapper.id are not compatible */
    return id;
  },
};
