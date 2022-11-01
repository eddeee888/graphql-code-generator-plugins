/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { PaginationResult } from './base/resolvers/PaginationResult';
import { me } from './user/resolvers/Query/me';
import { userByAccountName } from './user/resolvers/Query/userByAccountName';
import { StandardError } from './base/resolvers/StandardError';
import { User } from './user/resolvers/User';
import { UserPayload } from './user/resolvers/UserPayload';
import { UserResult } from './user/resolvers/UserResult';
export const resolvers: Resolvers = {
  Query: { me, userByAccountName },

  PaginationResult: PaginationResult,
  StandardError: StandardError,
  User: User,
  UserPayload: UserPayload,
  UserResult: UserResult,
};
