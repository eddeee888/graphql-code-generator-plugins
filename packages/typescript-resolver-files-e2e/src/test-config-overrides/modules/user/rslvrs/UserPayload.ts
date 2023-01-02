import type { UserPayloadResolvers } from './../../types.gen';
export const UserPayload: UserPayloadResolvers = {
  __resolveType: (parent) => parent.__typename,
};
