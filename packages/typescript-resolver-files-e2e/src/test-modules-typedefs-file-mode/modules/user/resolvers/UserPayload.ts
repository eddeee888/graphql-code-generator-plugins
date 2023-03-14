import type { UserPayloadResolvers } from './../../types.generated';
export const UserPayload: UserPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
