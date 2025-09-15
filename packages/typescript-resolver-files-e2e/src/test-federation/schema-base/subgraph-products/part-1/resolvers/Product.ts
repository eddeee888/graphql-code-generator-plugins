import type { ProductResolvers } from './../../types.generated';
export const Product: Pick<
  ProductResolvers,
  'id' | 'name' | 'price' | '__resolveReference'
> = {
  /* Implement Product resolver logic here */
  name: async (_parent, _arg, _ctx) => {
    /* Product.name resolver is required because Product.name exists but ProductMapper.name does not */
  },
  price: async (_parent, _arg, _ctx) => {
    /* Product.price resolver is required because Product.price exists but ProductMapper.price does not */
  },
};
