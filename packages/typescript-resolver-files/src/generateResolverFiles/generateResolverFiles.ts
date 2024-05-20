import { addResolverMainFiles } from './addResolverMainFiles';
import { postProcessFiles } from './postProcessFiles';
import { handleGraphQLRootObjectTypeField } from './handleGraphQLRootObjectTypeField';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUnionType } from './handleGraphQLUnionType';
import { handleGraphQLScalarType } from './handleGraphQLScalarType';
import { handleGraphQLInterfaceType } from './handleGraphQLInterfaceType';
import { visitNamedType } from './visitNamedType';
import type { GenerateResolverFilesContext } from './types';

export const generateResolverFiles = (
  ctx: GenerateResolverFilesContext
): void => {
  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.query
  ).forEach((details) => {
    visitNamedType(
      {
        ...details,
        belongsToRootObject: 'Query',
        visitor: handleGraphQLRootObjectTypeField,
      },
      ctx
    );
  });

  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.mutation
  ).forEach((details) => {
    visitNamedType(
      {
        ...details,
        belongsToRootObject: 'Mutation',
        visitor: handleGraphQLRootObjectTypeField,
      },
      ctx
    );
  });

  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.subscription
  ).forEach((details) => {
    visitNamedType(
      {
        ...details,
        belongsToRootObject: 'Subscription',
        visitor: handleGraphQLRootObjectTypeField,
      },
      ctx
    );
  });

  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.object
  ).forEach((objectsByModules) => {
    Object.values(objectsByModules).forEach((details) => {
      visitNamedType(
        {
          ...details,
          belongsToRootObject: null,
          visitor: (baseParams, prev_ctx) =>
            handleGraphQLObjectType(
              {
                ...baseParams,
                fieldsToPick: details.fieldsToPick,
                pickReferenceResolver: details.pickReferenceResolver,
              },
              prev_ctx
            ),
        },
        ctx
      );
    });
  });

  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.scalar
  ).forEach((details) => {
    visitNamedType(
      {
        ...details,
        belongsToRootObject: null,
        visitor: handleGraphQLScalarType,
      },
      ctx
    );
  });

  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.interface
  ).forEach((details) => {
    visitNamedType(
      {
        ...details,
        belongsToRootObject: null,
        visitor: handleGraphQLInterfaceType,
      },
      ctx
    );
  });

  Object.values(
    ctx.config.parsedGraphQLSchemaMeta.userDefinedSchemaTypeMap.union
  ).forEach((details) => {
    visitNamedType(
      {
        ...details,
        belongsToRootObject: null,
        visitor: handleGraphQLUnionType,
      },
      ctx
    );
  });

  // Post process generated files (could be existing files or files to be generated)
  postProcessFiles(ctx);

  // Put all resolvers into barrel file/s (or main file/s)
  addResolverMainFiles(ctx);
};
