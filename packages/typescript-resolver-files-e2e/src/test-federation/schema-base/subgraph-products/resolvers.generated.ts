/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topProducts as Query_topProducts } from './part-1/resolvers/Query/topProducts';
import { Maker as part_2_Maker } from './part-2/resolvers/Maker';
import { Maker as part_1_Maker } from './part-1/resolvers/Maker';
import { Product as part_1_Product } from './part-1/resolvers/Product';
import { Product as part_2_Product } from './part-2/resolvers/Product';
export const resolvers: Resolvers = {
  Query: { topProducts: Query_topProducts },

  Maker: { ...part_2_Maker, ...part_1_Maker },
  Product: { ...part_1_Product, ...part_2_Product },
};
