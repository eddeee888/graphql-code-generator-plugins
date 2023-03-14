import type { TopicByIdPayloadResolvers } from './../../types.generated';
export const TopicByIdPayload: TopicByIdPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
