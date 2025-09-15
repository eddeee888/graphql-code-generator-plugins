import type { TopicResolvers } from './../../types.generated';
import { name } from '../Topic.name';
export const Topic: TopicResolvers = {
  id: ({ id }) => id,
  createdAt: async (_parent, _arg, _ctx) => {
    /* existing implementation, must keep */
    return '2024-01-01T00:00:00.000Z';
  },
  name,
  creator: ({ creator }, _arg, _ctx) => {
    /* Topic.creator resolver is required because Topic.creator and TopicMapper.creator are not compatible */
    return creator;
  },
  url: async (_parent, _arg, _ctx) => {
    /* Topic.url resolver is required because Topic.url exists but TopicMapper.url does not */
  },
};
