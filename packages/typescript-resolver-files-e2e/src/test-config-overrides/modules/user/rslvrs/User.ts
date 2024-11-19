import type { I_USERRESOLVERS } from './../../types.gen';
export const User: I_USERRESOLVERS = {
  /* Implement User resolver logic here */
  accountGitHub: async (_parent, _arg, _ctx) => {
    /* User.accountGitHub resolver is required because User.accountGitHub exists but UserMapper.accountGitHub does not */
  },
  accountLinkedIn: async (_parent, _arg, _ctx) => {
    /* User.accountLinkedIn resolver is required because User.accountLinkedIn exists but UserMapper.accountLinkedIn does not */
  },
  accountName: ({ accountName }, _arg, _ctx) => {
    /* User.accountName resolver is required because User.accountName and UserMapper.accountName are not compatible */
    return accountName;
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
  id: async (_parent, _arg, _ctx) => {
    /* User.id resolver is required because User.id exists but UserMapper.id does not */
  },
  name: async (_parent, _arg, _ctx) => {
    /* User.name resolver is required because User.name exists but UserMapper.name does not */
  },
  __isTypeOf: async (_parent, _arg, _ctx) => {
    /* User.__isTypeOf resolver is required because User.__isTypeOf exists but UserMapper.__isTypeOf does not */
  },
};
