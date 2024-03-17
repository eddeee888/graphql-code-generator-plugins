import type { TopicResolvers } from './types.generated';
export const Topic: TopicResolvers = {
  /* Implement Topic resolver logic here */
  creator: async (_parent, _arg, _ctx) => {
    /* Topic.creator resolver is required because Topic.creator exists but TopicMapper.creator does not */
  },
};
