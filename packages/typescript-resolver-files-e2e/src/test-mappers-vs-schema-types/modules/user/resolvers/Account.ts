import type { AccountResolvers } from './../../types.generated';
export const Account: AccountResolvers = {
  /* Implement Account resolver logic here */
  id: () => {
    /* Account.id resolver is required because Account.id's type is "string:string" but AccountMapper.id's type is "number:number" */
  },
};
