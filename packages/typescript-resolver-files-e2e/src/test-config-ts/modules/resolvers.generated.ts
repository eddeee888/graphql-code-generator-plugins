/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { cat as Query_cat } from './cat/resolvers/Query/cat';
import { Cat } from './cat/resolvers/Cat';
export const resolvers: Resolvers = {
  Query: { cat: Query_cat },

  Cat: Cat,
};
