import type { ProfileMetaResolvers } from './../../types.generated';
export const ProfileMeta: ProfileMetaResolvers = {
  /* Implement ProfileMeta resolver logic here */
  isCompleted: () => {
    /* ProfileMeta.isCompleted resolver is required because ProfileMeta.isCompleted exists but ProfileMetaMapper.isCompleted does not */
  },
  score: ({ score }) => {
    /* ProfileMeta.score resolver is required because ProfileMeta.score and ProfileMetaMapper.score are not compatible */
    return score;
  },
};
