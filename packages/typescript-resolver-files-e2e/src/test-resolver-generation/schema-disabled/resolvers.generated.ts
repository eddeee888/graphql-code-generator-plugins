/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Topic } from './topic/resolvers/Topic';
import { User as user_User } from './user/resolvers/User';
import { User as topic_User } from './topic/resolvers/User';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Topic: Topic,
  User: { ...user_User, ...topic_User },
  DateTime: DateTimeResolver,
};
