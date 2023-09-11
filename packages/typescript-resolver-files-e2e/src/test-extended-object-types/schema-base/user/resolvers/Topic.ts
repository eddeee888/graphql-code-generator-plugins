import type { TopicResolvers } from './../../types.generated';
export const Topic: Pick<
  TopicResolvers,
  | 'creator'
  | 'extendedTopicFieldInDifferentFileAndDifferentModule1'
  | 'extendedTopicFieldInDifferentFileAndDifferentModule2'
  | 'extendedTopicFieldInDifferentFileAndDifferentModule3'
> = {
  /* Implement Topic resolver logic here */
  creator: ({ creator }) => {
    /* Topic.creator resolver is required because Topic.creator and TopicMapper.creator are not compatible */
    return creator;
  },
  extendedTopicFieldInDifferentFileAndDifferentModule1: () => {
    /* Topic.extendedTopicFieldInDifferentFileAndDifferentModule1 resolver is required because Topic.extendedTopicFieldInDifferentFileAndDifferentModule1 exists but TopicMapper.extendedTopicFieldInDifferentFileAndDifferentModule1 does not */
  },
  extendedTopicFieldInDifferentFileAndDifferentModule2: () => {
    /* Topic.extendedTopicFieldInDifferentFileAndDifferentModule2 resolver is required because Topic.extendedTopicFieldInDifferentFileAndDifferentModule2 exists but TopicMapper.extendedTopicFieldInDifferentFileAndDifferentModule2 does not */
  },
  extendedTopicFieldInDifferentFileAndDifferentModule3: () => {
    /* Topic.extendedTopicFieldInDifferentFileAndDifferentModule3 resolver is required because Topic.extendedTopicFieldInDifferentFileAndDifferentModule3 exists but TopicMapper.extendedTopicFieldInDifferentFileAndDifferentModule3 does not */
  },
};
