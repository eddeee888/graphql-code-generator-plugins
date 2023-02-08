import type { ProfileResolvers } from './../../types.generated';
export const Profile: ProfileResolvers = {
  /* Implement Profile resolver logic here */
  id: ({ id }) => id,
  user: () => {
    /* Profile.user resolver is required because Profile.user exists but ProfileMapper.user does not */
  },
};
