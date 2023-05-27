import { isObjectType } from 'graphql';
import { isNativeNamedType, isRootObjectType } from '../utils';
import { addResolverMainFiles } from './addResolverMainFiles';
import { postProcessFiles } from './postProcessFiles';
import { handleGraphQLRootObjectTypeField } from './handleGraphQLRootObjectTypeField';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUnionType } from './handleGraphQLUnionType';
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
        UnionType: handleGraphQLUnionType,
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

  // Post process generated files (could be existing files or files to be generated)
  postProcessFiles(ctx);

  // Put all resolvers into barrel file/s (or main file/s)
  addResolverMainFiles(ctx);
};
