/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { me as Query_me } from './user/resolvers/Query/me';
import { Profile } from './feature_1/profile/resolvers/Profile';
import { User as user_User } from './user/resolvers/User';
import { User as feature_1_user_User } from './feature_1/user/resolvers/User';
export const resolvers: Resolvers = {
  Query: { me: Query_me },

  Profile: Profile,
  User: { ...user_User, ...feature_1_user_User },
};
