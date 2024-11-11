import type { ProfileMetaResolvers } from './../../types.generated';
export const ProfileMeta: ProfileMetaResolvers = {
  /* Implement ProfileMeta resolver logic here */
  isCompleted: async (_parent, _arg, _ctx) => {
    /* ProfileMeta.isCompleted resolver is required because ProfileMeta.isCompleted exists but ProfileMetaMapper.isCompleted does not */
  },
  score: ({ score }, _arg, _ctx) => {
    /* ProfileMeta.score resolver is required because ProfileMeta.score and ProfileMetaMapper.score are not compatible */
    return score;
  },
};
