/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { user as Query_user } from './test/resolvers/Query/user';
import    { Book } from './test/resolvers/Book';
import    { MappedResolveEmptyObject } from './test/resolvers/MappedResolveEmptyObject';
import    { MappedResolveError } from './test/resolvers/MappedResolveError';
import    { User } from './test/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { user: Query_user },
      
      
      Book: Book,
MappedResolveEmptyObject: MappedResolveEmptyObject,
MappedResolveError: MappedResolveError,
User: User
    }