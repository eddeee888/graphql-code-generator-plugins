import { useMeQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeQuery({ skip: true });
  return 'Me';
};
