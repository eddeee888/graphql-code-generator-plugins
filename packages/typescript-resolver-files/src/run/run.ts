import { GraphQLSchema, isObjectType, isUnionType } from 'graphql';
import type { RunResult } from '../types';
import { handleGraphQLRootObjectType } from './handleGraphQLRootObjectType';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { addResolversIndexFile } from './addResolversIndexFile';
import { fixExistingResolvers } from './fixExistingResolvers';

interface RunParams {
  schema: GraphQLSchema;
  baseOutputDir: string;
  resolverTypesPath: string;
}
export const run = (
  { schema, baseOutputDir, resolverTypesPath }: RunParams,
  result: RunResult
): void => {
  Object.entries(schema.getTypeMap())
    .filter(([schemaType]) => !schemaType.startsWith('__')) // There are a few internal types with `__` prefixes. We don't want them.
    .forEach(([schemaType, namedType]) => {
      if (isObjectType(namedType)) {
        switch (schemaType) {
          case 'Query':
          case 'Mutation':
          case 'Subscription':
            handleGraphQLRootObjectType(
              {
                baseOutputDir,
                resolverTypesPath,
                type: namedType,
              },
              result
            );
            break;
          default:
            handleGraphQLObjectType(
              {
                baseOutputDir,
                resolverTypesPath,
                type: namedType,
              },
              result
            );
            break;
        }
      } else if (isUnionType(namedType)) {
        handleGraphQLUninionType(
          { baseOutputDir, resolverTypesPath, type: namedType },
          result
        );
      }
    });

  // Check to see which resolver file exists already
  fixExistingResolvers(result);

  // Put all resolvers into a barrel file
  addResolversIndexFile({ baseOutputDir, resolverTypesPath }, result);
};
