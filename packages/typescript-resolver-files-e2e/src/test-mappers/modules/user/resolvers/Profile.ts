import type { ProfileResolvers } from './../../types.generated';
export const Profile: ProfileResolvers = {
  /* Implement Profile resolver logic here */
  user: async (_parent, _arg, _ctx) => {
    /* Profile.user resolver is required because Profile.user exists but Profile_Mapper.user does not */
  },
};
