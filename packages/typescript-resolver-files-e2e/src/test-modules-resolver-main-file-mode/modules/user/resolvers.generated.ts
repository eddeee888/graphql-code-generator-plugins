/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { me as Query_me } from './resolvers/Query/me';
import { userByAccountName as Query_userByAccountName } from './resolvers/Query/userByAccountName';
import { profileChanges as Subscription_profileChanges } from './resolvers/Subscription/profileChanges';
import { Profile } from './resolvers/Profile';
import { User } from './resolvers/User';
import { UserResult } from './resolvers/UserResult';
import { UserPayload } from './resolvers/UserPayload';
export const resolvers: Resolvers = {
  Query: { me: Query_me, userByAccountName: Query_userByAccountName },

  Subscription: { profileChanges: Subscription_profileChanges },
  Profile: Profile,
  User: User,
  UserResult: UserResult,
  UserPayload: UserPayload,
};
