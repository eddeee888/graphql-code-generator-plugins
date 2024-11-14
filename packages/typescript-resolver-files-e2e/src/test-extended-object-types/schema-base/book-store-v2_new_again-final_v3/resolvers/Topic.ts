import type { TopicResolvers } from './../../types.generated';
export const Topic: Pick<TopicResolvers, 'bookStore_for_topic' | '__isTypeOf'> =
  {
    /* Implement Topic resolver logic here */
    bookStore_for_topic: async (_parent, _arg, _ctx) => {
      /* Topic.bookStore_for_topic resolver is required because Topic.bookStore_for_topic exists but TopicMapper.bookStore_for_topic does not */
    },
  };
