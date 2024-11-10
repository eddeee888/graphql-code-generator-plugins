/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Error } from './base/resolvers/Error';
import { User } from './user/resolvers/User';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Error: Error,
  User: User,
  DateTime: DateTimeResolver,
};
