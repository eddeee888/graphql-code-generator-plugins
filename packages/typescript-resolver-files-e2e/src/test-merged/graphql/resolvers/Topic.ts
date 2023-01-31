import type { TopicResolvers } from './types.generated';
export const Topic: TopicResolvers = {
  /* Implement Topic resolver logic here */
  createdAt: () => {
    /* Topic.createdAt resolver is required because Topic.createdAt's type is "union:string | Date" but TopicMapper.createdAt's type is "classOrInterface:Date" */
  },
  creator: () => {
    /* Topic.creator resolver is required because Topic.creator exists but TopicMapper.creator does not */
  },
};
