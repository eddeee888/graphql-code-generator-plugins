import type { ProductResolvers } from './../../types.generated';
export const Product: Pick<
  ProductResolvers,
  'maker' | 'upc' | '__resolveReference'
> = {
  /* Implement Product resolver logic here */
  maker: async (_parent, _arg, _ctx) => {
    /* Product.maker resolver is required because Product.maker exists but ProductMapper.maker does not */
  },
  upc: async (_parent, _arg, _ctx) => {
    /* Product.upc resolver is required because Product.upc exists but ProductMapper.upc does not */
  },
};
