import type { BookResolvers } from './../../types.generated';
/*
 * Note: This object type is generated because "BookMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const Book: BookResolvers = {
  /* Implement Book resolver logic here */
  nextBookInSeries: async (_parent, _arg, _ctx) => {
    /* Book.nextBookInSeries resolver is required because Book.nextBookInSeries exists but BookMapper.nextBookInSeries does not */
  },
  previousBookInSeries: async (_parent, _arg, _ctx) => {
    /* Book.previousBookInSeries resolver is required because Book.previousBookInSeries exists but BookMapper.previousBookInSeries does not */
  },
};
