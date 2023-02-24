import type { UserResolvers } from './../../types.generated';
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  accountGitHub: () => {
    /* User.accountGitHub resolver is required because User.accountGitHub exists but UserMapper.accountGitHub does not */
  },
  accountGoogle: () => {
    /* User.accountGoogle resolver is required because User.accountGoogle exists but UserMapper.accountGoogle does not */
  },
  fullName: () => {
    /* User.fullName resolver is required because User.fullName exists but UserMapper.fullName does not */
  },
  id: ({ id }) => {
    /* User.id resolver is required because User.id and UserMapper.id are not compatible */
    return id;
  },
};
