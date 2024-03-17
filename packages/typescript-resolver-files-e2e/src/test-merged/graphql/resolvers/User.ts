import type { UserResolvers } from './types.generated';
export const User: UserResolvers = {
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
