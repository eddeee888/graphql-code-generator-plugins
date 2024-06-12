export type TopicMapper = {
  id: string;
  name: string;
  url: string | null;
  creatorUserId: string;
  createdAt: Date;
};

export type TopicEditResultMapper = {
  result: { id: string }[];
};
