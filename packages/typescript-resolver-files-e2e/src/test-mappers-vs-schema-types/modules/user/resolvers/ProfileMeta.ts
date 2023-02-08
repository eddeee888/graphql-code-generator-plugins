import type { ProfileMetaResolvers } from './../../types.generated';
export const ProfileMeta: ProfileMetaResolvers = {
  /* Implement ProfileMeta resolver logic here */
  id: ({ id }) => id,
  isCompleted: () => {
    /* ProfileMeta.isCompleted resolver is required because ProfileMeta.isCompleted exists but ProfileMetaMapper.isCompleted does not */
  },
  score: ({ score }) => score,
};
