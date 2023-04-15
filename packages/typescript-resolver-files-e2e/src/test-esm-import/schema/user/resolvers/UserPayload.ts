import type { UserPayloadResolvers } from './../../types.generated.js';
export const UserPayload: UserPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
