import type { TopicByIdPayloadResolvers } from './../../types.gen';
export const TopicByIdPayload: TopicByIdPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
