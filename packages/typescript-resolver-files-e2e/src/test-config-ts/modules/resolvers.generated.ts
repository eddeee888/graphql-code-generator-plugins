/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Cat as cat_Cat } from './cat/resolvers/Cat';
import { cat as cat_Query_cat } from './cat/resolvers/Query/cat';
export const resolvers: Resolvers = {
  Query: { cat: cat_Query_cat },

  Cat: cat_Cat,
};
