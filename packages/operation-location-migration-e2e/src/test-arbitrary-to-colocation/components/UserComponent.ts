import { useMeQuery } from '../generated/hooks.generated';

export const UserComponent = () => {
  useMeQuery();
  return 'User';
};
