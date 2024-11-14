import type { UserMapper } from '../user/user.graphqls.mappers';

export type TopicMapper = {
  id: string;
  creator: string;
  mostRelatedTopic?: TopicMapper;
  relatedTopics: TopicMapper[];
  likedBy: UserMapper[];
  likedByNullable: null;
};
