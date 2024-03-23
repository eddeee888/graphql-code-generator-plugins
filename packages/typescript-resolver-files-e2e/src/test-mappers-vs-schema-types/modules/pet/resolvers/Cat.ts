import type { CatResolvers } from './../../types.generated';
export const Cat: CatResolvers = {
  /* Implement Cat resolver logic here */
  name: async (_parent, _arg, _ctx) => {
    /* Cat.name resolver is required because Cat.name exists but CatMapper.name does not */
  },
  likesToScratch: async (_parent, _arg, _ctx) => {
    /* Cat.likesToScratch resolver is required because Cat.likesToScratch exists but CatMapper.likesToScratch does not */
  },
};
