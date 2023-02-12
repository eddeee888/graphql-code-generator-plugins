import type { ProfileResolvers } from './../../types.generated';
export const Profile: ProfileResolvers = {
  /* Implement Profile resolver logic here */
  id: ({ id }) => {
    /* Profile.id resolver is required because Profile.id and ProfileMapper.id are not compatible */
    return id;
  },
  user: () => {
    /* Profile.user resolver is required because Profile.user exists but ProfileMapper.user does not */
  },
};
