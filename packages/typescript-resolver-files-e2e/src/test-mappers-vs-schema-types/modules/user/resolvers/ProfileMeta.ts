import type { ProfileMetaResolvers } from './../../types.generated';
export const ProfileMeta: ProfileMetaResolvers = {
  /* Implement ProfileMeta resolver logic here */
  id: () => {
    /* ProfileMeta.id resolver is required because ProfileMeta.id's type is "string:string" but ProfileMetaMapper.id's type is "number:number" */
  },
  isCompleted: () => {
    /* ProfileMeta.isCompleted resolver is required because ProfileMeta.isCompleted exists but ProfileMetaMapper.isCompleted does not */
  },
  score: () => {
    /* ProfileMeta.score resolver is required because ProfileMeta.score's type is "string:string" but ProfileMetaMapper.score's type is "number:number" */
  },
};
