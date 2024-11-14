/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './allTypes';
import { me as Query_me } from './../resolvers/Query/me';
import { Profile } from './../resolvers/Profile';
import { User } from './../resolvers/User';
export const resolvers: Resolvers = {
  Query: { me: Query_me },

  Profile: Profile,
  User: User,
};
