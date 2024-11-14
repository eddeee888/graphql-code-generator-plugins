import type { TopicEditResultResolvers } from './../../types.generated';
/* This file has been created on filesystem by src/test-resolvers/auto-wireup/test-setup.js */
/*
 * Note: This object type is generated because "TopicEditResultMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const TopicEditResult: TopicEditResultResolvers = {
  /* Implement TopicEditResult resolver logic here */
  result: ({ result }, _arg, _ctx) => {
    /* TopicEditResult.result resolver is required because TopicEditResult.result and TopicEditResultMapper.result are not compatible */
    return result;
  },
};
