import {
  useMeQuery,
  useMeLazyQuery,
  useMeSuspenseQuery,
} from '../generated/hooks.generated';

export const UserComponent = () => {
  useMeQuery({ onCompleted: () => {} });
  const res = useMeSuspenseQuery();
  return 'User';
};
