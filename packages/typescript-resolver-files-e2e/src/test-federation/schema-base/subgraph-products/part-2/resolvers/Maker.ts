import type { MakerResolvers } from './../../types.generated';
export const Maker: Pick<MakerResolvers, 'id' | 'name'> = {
  /* Implement Maker resolver logic here */
  name: async (_parent, _arg, _ctx) => {
    /* Maker.name resolver is required because Maker.name exists but MakerMapper.name does not */
  },
};
