import type { UserResolvers } from './../../types.generated';
/*
 * Note: This object type is generated because "UserMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const User: Pick<
  UserResolvers,
  | 'accountGitHub'
  | 'accountLinkedIn'
  | 'accountName'
  | 'accountTwitter'
  | 'accountWebsite'
  | 'avatar'
  | 'id'
  | 'name'
  | '__isTypeOf'
> = {
  /* Implement User resolver logic here */
  accountGitHub: async (_parent, _arg, _ctx) => {
    /* User.accountGitHub resolver is required because User.accountGitHub exists but UserMapper.accountGitHub does not */
  },
  accountLinkedIn: async (_parent, _arg, _ctx) => {
    /* User.accountLinkedIn resolver is required because User.accountLinkedIn exists but UserMapper.accountLinkedIn does not */
  },
  accountName: async (_parent, _arg, _ctx) => {
    /* User.accountName resolver is required because User.accountName exists but UserMapper.accountName does not */
  },
  accountTwitter: async (_parent, _arg, _ctx) => {
    /* User.accountTwitter resolver is required because User.accountTwitter exists but UserMapper.accountTwitter does not */
  },
  accountWebsite: async (_parent, _arg, _ctx) => {
    /* User.accountWebsite resolver is required because User.accountWebsite exists but UserMapper.accountWebsite does not */
  },
  avatar: async (_parent, _arg, _ctx) => {
    /* User.avatar resolver is required because User.avatar exists but UserMapper.avatar does not */
  },
  name: async (_parent, _arg, _ctx) => {
    /* User.name resolver is required because User.name exists but UserMapper.name does not */
  },
};
