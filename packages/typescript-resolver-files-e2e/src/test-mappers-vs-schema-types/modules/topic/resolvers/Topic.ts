import type { TopicResolvers } from './../../types.generated';
export const Topic: TopicResolvers = {
  id: ({ id }) => id,
  createdAt: async (_parent, _arg, _ctx) => {
    /* existing implementation */
  },
  creator: ({ creator }, _arg, _ctx) => {
    /* Topic.creator resolver is required because Topic.creator and TopicMapper.creator are not compatible */
    return creator;
  },
  name: async (_parent, _arg, _ctx) => {
    /* Topic.name resolver is required because Topic.name exists but TopicMapper.name does not */
  },
  url: async (_parent, _arg, _ctx) => {
    /* Topic.url resolver is required because Topic.url exists but TopicMapper.url does not */
  },
};
