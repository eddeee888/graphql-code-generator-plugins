import { useMeQuery, useMeLazyQuery } from '../generated/hooks.generated';

export const UserComponent = () => {
  useMeQuery();
  return 'User';
};
