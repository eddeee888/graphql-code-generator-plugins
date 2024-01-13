import * as path from 'path';
import { type GraphQLField, isObjectType, type Location } from 'graphql';
import { isNativeNamedType, isRootObjectType } from '../utils';
import { addResolverMainFiles } from './addResolverMainFiles';
import { postProcessFiles } from './postProcessFiles';
import { handleGraphQLRootObjectTypeField } from './handleGraphQLRootObjectTypeField';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUnionType } from './handleGraphQLUnionType';
import { handleGraphQLScalarType } from './handleGraphQLScalarType';
import { handleGraphQLInterfaceType } from './handleGraphQLInterfaceType';
import { visitNamedType, type VisitNamedTypeParams } from './visitNamedType';
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
        InterfaceType: handleGraphQLInterfaceType,
      };

      // Root object types e.g. Query, Mutation, Subscription
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

      // Other output object types
      if (isObjectType(namedType)) {
        const fieldsByGraphQLModule = Object.entries(
          namedType.getFields()
        ).reduce<
          Record<
            string,
            {
              fieldNodes: GraphQLField<unknown, unknown>[];
              firstFieldLocation: Location | undefined;
            }
          >
        >((res, [_, fieldNode]) => {
          const fieldLocation = fieldNode.astNode?.loc;
          const graphQLModule = path.dirname(fieldLocation?.source.name || '');

          if (!res[graphQLModule]) {
            res[graphQLModule] = {
              fieldNodes: [],
              // Note: fieldLocation here is the location of the first field found in a GraphQL Module.
              // The reason we use field's location instead of the object type's location is because when `extend type ObjectType` is used, the location of object type is the last found location.
              // i.e. we cannot rely on object's location if `extend type` is used.
              firstFieldLocation: fieldLocation,
            };
          }

          res[graphQLModule].fieldNodes.push(fieldNode);

          return res;
        }, {});

        // If there are multiple object type files to generate e.g. `extend type ObjectType` is used across multiple modules
        // Then, generate one file for each location
        const fieldsToGenerate = Object.entries(fieldsByGraphQLModule);
        if (fieldsToGenerate.length > 1) {
          fieldsToGenerate.forEach(
            ([_, { firstFieldLocation, fieldNodes }]) => {
              const fieldsToPick = fieldNodes.map((field) => field.name);
              visitNamedType<{ fieldsToPick: string[] }>(
                {
                  namedType,
                  resolverName: namedType.name,
                  belongsToRootObject: null,
                  location: firstFieldLocation,
                  visitor,
                  fieldsToPick,
                },
                ctx
              );
            }
          );
          return;
        }
      }

      // Other types e.g. Union, Scalar, Interface
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
