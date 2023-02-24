import type { AccountResolvers } from './../../types.generated';
export const Account: AccountResolvers = {
  /* Implement Account resolver logic here */
  id: ({ id }) => {
    /* Account.id resolver is required because Account.id and AccountMapper.id are not compatible */
    return id;
  },
};
