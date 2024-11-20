import type { MakerResolvers } from './../../types.generated';
export const Maker: Pick<MakerResolvers, 'products' | '__isTypeOf'> = {
  /* Implement Maker resolver logic here */
  products: async (_parent, _arg, _ctx) => {
    /* Maker.products resolver is required because Maker.products exists but MakerMapper.products does not */
  },
};
