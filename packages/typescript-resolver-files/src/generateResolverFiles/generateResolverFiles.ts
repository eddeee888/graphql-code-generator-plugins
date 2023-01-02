import { isObjectType } from 'graphql';
import { isNativeNamedType, isRootObjectType } from '../utils';
import { addResolverMainFile } from './addResolverMainFile';
import { fixExistingResolvers } from './fixExistingResolvers';
import { handleGraphQLRootObjectTypeField } from './handleGraphQLRootObjectTypeField';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { handleGraphQLScalarType } from './handleGraphQLScalarType';
import { visitNamedType, VisitNamedTypeParams } from './visitNamedType';
import type { GenerateResolverFilesContext } from './types';

export const generateResolverFiles = (
  ctx: GenerateResolverFilesContext
): void => {
  Object.entries(ctx.config.schema.getTypeMap()).forEach(
    ([schemaType, namedType]) => {
      if (isNativeNamedType(namedType)) {
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

      if (isRootObjectType(schemaType) && isObjectType(namedType)) {
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
          location: namedType.astNode?.loc,
          visitor,
        },
        ctx
      );
    }
  );

  // Check to see which resolver file exists already
  fixExistingResolvers(ctx);

  // Put all resolvers into a barrel file (or main file)
  addResolverMainFile(ctx);
};
