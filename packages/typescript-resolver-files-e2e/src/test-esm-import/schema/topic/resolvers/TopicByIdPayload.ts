import type { TopicByIdPayloadResolvers } from './../../types.generated.js';
export const TopicByIdPayload: TopicByIdPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
