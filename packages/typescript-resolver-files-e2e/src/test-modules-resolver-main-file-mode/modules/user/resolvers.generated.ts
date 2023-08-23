/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { Profile as user_Profile } from './resolvers/Profile';
import { me as user_Query_me } from './resolvers/Query/me';
import { userByAccountName as user_Query_userByAccountName } from './resolvers/Query/userByAccountName';
import { profileChanges as user_Subscription_profileChanges } from './resolvers/Subscription/profileChanges';
import { User as user_User } from './resolvers/User';
import { UserResult as user_UserResult } from './resolvers/UserResult';
export const resolvers: Resolvers = {
  Query: { me: user_Query_me, userByAccountName: user_Query_userByAccountName },

  Subscription: { profileChanges: user_Subscription_profileChanges },
  Profile: user_Profile,
  User: user_User,
  UserResult: user_UserResult,
};
