import type { TopicCreatePayloadResolvers } from './../../types.gen';
export const TopicCreatePayload: TopicCreatePayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
