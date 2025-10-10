import type { UserResolvers } from './../../types.generated';
/*
 * Note: This object type is generated because "UserMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  mmBook1: ({ mmBook1 }, _arg, _ctx) => {
    /* User.mmBook1 resolver is required because User.mmBook1 and UserMapper.mmBook1 are not compatible */
    return mmBook1;
  },
  mmBook2: ({ mmBook2 }, _arg, _ctx) => {
    /* User.mmBook2 resolver is required because User.mmBook2 and UserMapper.mmBook2 are not compatible */
    return mmBook2;
  },
  mmBooks1: ({ mmBooks1 }, _arg, _ctx) => {
    /* User.mmBooks1 resolver is required because User.mmBooks1 and UserMapper.mmBooks1 are not compatible */
    return mmBooks1;
  },
  mmBooks2: ({ mmBooks2 }, _arg, _ctx) => {
    /* User.mmBooks2 resolver is required because User.mmBooks2 and UserMapper.mmBooks2 are not compatible */
    return mmBooks2;
  },
  mmBooks3: ({ mmBooks3 }, _arg, _ctx) => {
    /* User.mmBooks3 resolver is required because User.mmBooks3 and UserMapper.mmBooks3 are not compatible */
    return mmBooks3;
  },
  mmBooks4: ({ mmBooks4 }, _arg, _ctx) => {
    /* User.mmBooks4 resolver is required because User.mmBooks4 and UserMapper.mmBooks4 are not compatible */
    return mmBooks4;
  },
};
