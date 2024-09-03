/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { me as Query_me } from './part-1/resolvers/Query/me';
import { Profile as part_1_Profile } from './part-1/resolvers/Profile';
import { Profile as part_2_Profile } from './part-2/resolvers/Profile';
import { User as part_1_User } from './part-1/resolvers/User';
import { User as part_2_User } from './part-2/resolvers/User';
export const resolvers: Resolvers = {
  Query: { me: Query_me },

  Profile: { ...part_1_Profile, ...part_2_Profile },
  User: { ...part_1_User, ...part_2_User },
};
