import type   { MappedResolveEmptyObjectResolvers } from './../../types.generated';
    /*
    * Note: This object type is generated because "MappedResolveEmptyObjectMapper" is declared. This is to ensure runtime safety.
    *
    * When a mapper is used, it is possible to hit runtime errors in some scenarios:
    * - given a field name, the schema type's field type does not match mapper's field type
    * - or a schema type's field does not exist in the mapper's fields
    *
    * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
    */
export const MappedResolveEmptyObject: MappedResolveEmptyObjectResolvers = {
    /* Implement MappedResolveEmptyObject resolver logic here */
    field: async (_parent, _arg, _ctx) => { /* MappedResolveEmptyObject.field resolver is required because MappedResolveEmptyObject.field exists but MappedResolveEmptyObjectMapper.field does not */ },
    id: async (_parent, _arg, _ctx) => { /* MappedResolveEmptyObject.id resolver is required because MappedResolveEmptyObject.id exists but MappedResolveEmptyObjectMapper.id does not */ }
};