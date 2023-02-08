import type { AccountResolvers } from './../../types.generated';
export const Account: AccountResolvers = {
  /* Implement Account resolver logic here */
  id: ({ id }) => id,
  isSubscribed: ({ isSubscribed }) => isSubscribed,
};
