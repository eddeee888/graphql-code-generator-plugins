import {
  isObjectType,
  isIntrospectionType,
  isSpecifiedScalarType,
} from 'graphql';
import type { RunContext } from '../types';
import { isRootObjectType } from '../utils';
import { addResolversMainFile } from './addResolversMainFile';
import { fixExistingResolvers } from './fixExistingResolvers';
import { handleGraphQLRootObjectTypeField } from './handleGraphQLRootObjectTypeField';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { handleGraphQLScalarType } from './handleGraphQLScalarType';
import { visitNamedType, VisitNamedTypeParams } from './visitNamedType';

export const run = (ctx: RunContext): void => {
  Object.entries(ctx.config.schema.getTypeMap()).forEach(
    ([schemaType, namedType]) => {
      const isPredefinedScalar = isSpecifiedScalarType(namedType);
      const isIntrospection = isIntrospectionType(namedType);

      // Ignore certain types:
      // 1. introspection types i.e. with `__` prefixes
      // 2. base scalars e.g. Boolean, Int, etc.
      // 3. Other natives (mostly base scalars) which was not defined in the schema i.e. no `astNode`
      if (isPredefinedScalar || isIntrospection || !namedType.astNode) {
        return;
      }

      //
      // "Visitor" pattern
      //
      const visitor: VisitNamedTypeParams['visitor'] = {
        RootObjectTypeField: handleGraphQLRootObjectTypeField,
        ObjectType: handleGraphQLObjectType,
        UnionType: handleGraphQLUninionType,
        ScalarType: handleGraphQLScalarType,
      };

      if (isObjectType(namedType) && isRootObjectType(schemaType)) {
        Object.entries(namedType.getFields()).forEach(
          ([fieldName, fieldNode]) =>
            visitNamedType(
              {
                namedType,
                resolverName: fieldName,
                belongsToRootObject: schemaType,
                location: fieldNode.astNode?.loc,
                visitor,
              },
              ctx
            )
        );
        return;
      }

      visitNamedType(
        {
          namedType,
          resolverName: namedType.name,
          belongsToRootObject: null,
          location: namedType.astNode.loc,
          visitor,
        },
        ctx
      );
    }
  );

  // Check to see which resolver file exists already
  fixExistingResolvers(ctx);

  // Put all resolvers into a barrel file (or main file)
  addResolversMainFile(ctx);
};
