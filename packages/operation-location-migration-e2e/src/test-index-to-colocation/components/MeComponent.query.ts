import { useMeQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeQuery();
  return 'Me';
};
