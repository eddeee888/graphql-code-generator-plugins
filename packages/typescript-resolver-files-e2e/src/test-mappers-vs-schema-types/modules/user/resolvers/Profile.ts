import type { ProfileResolvers } from './../../types.generated';
export const Profile: ProfileResolvers = {
  /* Implement Profile resolver logic here */
  id: () => {
    /* Profile.id resolver is required because Profile.id's type is "string:string" but ProfileMapper.id's type is "number:number" */
  },
  user: () => {
    /* Profile.user resolver is required because Profile.user exists but ProfileMapper.user does not */
  },
};
