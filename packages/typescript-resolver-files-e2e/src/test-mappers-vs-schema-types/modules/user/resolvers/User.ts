import type { UserResolvers } from './../../types.generated';
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  createdAt: () => {
    /* User.createdAt resolver is required because User.createdAt's type is "union:string | Date" but UserMapper.createdAt's type is "classOrInterface:Date" */
  },
  fullName: () => {
    /* User.fullName resolver is required because User.fullName exists but UserMapper.fullName does not */
  },
  id: () => {
    /* User.id resolver is required because User.id's type is "string:string" but UserMapper.id's type is "number:number" */
  },
  accountGitHub: function () {
    /* User.accountGitHub resolver is required because User.accountGitHub exists but UserMapper.accountGitHub does not */
  },
  accountGoogle() {
    /* User.accountGoogle resolver is required because User.accountGoogle exists but UserMapper.accountGoogle does not */
  },
  role: () => {
    /* User.role resolver is required because User.role's type is "union:import("/Users/eddeee888/Projects/eddeee888/graphql-code-generator-plugins/virtual_types.generated").UserRole" but UserMapper.role's type is "union:"ADMIN" | "USER"" */
  },
};
