import { isObjectType, isUnionType } from 'graphql';
import type { RunConfig, RunResult } from '../types';
import { isRootObjectType } from '../utils';
import { handleGraphQLRootObjectType } from './handleGraphQLRootObjectType';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { addResolversIndexFile } from './addResolversIndexFile';
import { fixExistingResolvers } from './fixExistingResolvers';

export const run = (config: RunConfig, result: RunResult): void => {
  Object.entries(config.schema.getTypeMap())
    .filter(([schemaType]) => !schemaType.startsWith('__')) // There are a few internal types with `__` prefixes. We don't want them.
    .forEach(([schemaType, namedType]) => {
      if (isObjectType(namedType) && isRootObjectType(schemaType)) {
        handleGraphQLRootObjectType(namedType, config, result);
      } else if (isObjectType(namedType) && !isRootObjectType(schemaType)) {
        handleGraphQLObjectType(namedType, config, result);
      } else if (isUnionType(namedType)) {
        handleGraphQLUninionType(namedType, config, result);
      }
    });

  // Check to see which resolver file exists already
  fixExistingResolvers(result);

  // Put all resolvers into a barrel file
  addResolversIndexFile(config, result);
};
