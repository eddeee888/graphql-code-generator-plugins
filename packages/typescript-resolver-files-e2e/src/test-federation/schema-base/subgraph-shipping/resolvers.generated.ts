/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { cheapestProduct as Query_cheapestProduct } from './part-1/resolvers/Query/cheapestProduct';
import    { Product as part_2_Product } from './part-2/resolvers/Product';
import    { Product as part_1_Product } from './part-1/resolvers/Product';
    export const resolvers: Resolvers = {
      Query: { cheapestProduct: Query_cheapestProduct },
      
      
      Product: { ...part_2_Product,...part_1_Product }
    }