export type TopicMapper = {
  id: string;
  name: string;
  url: string | null;
  creatorUserId: string;
  createdAt: Date;
};

export interface UserMapper {
  id: string;
}
