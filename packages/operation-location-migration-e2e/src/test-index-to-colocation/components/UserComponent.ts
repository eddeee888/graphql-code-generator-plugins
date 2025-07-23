import {
  useMeQuery,
  useMeLazyQuery,
  useMeSuspenseQuery,
  useUpdateUserMutation,
} from '../generated/hooks.generated';

export const UserComponent = () => {
  useMeQuery({ onCompleted: () => {} });
  const res = useMeSuspenseQuery();
  useUpdateUserMutation();
  return 'User';
};
