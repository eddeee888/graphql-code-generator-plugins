import { isObjectType, isUnionType } from 'graphql';
import type { RunConfig, RunResult } from '../types';
import { isRootObjectType } from '../utils';
import { handleGraphQLRootObjectType } from './handleGraphQLRootObjectType';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { addResolversIndexFile } from './addResolversIndexFile';
import { fixExistingResolvers } from './fixExistingResolvers';
import { getPathToLocation } from './getPathToLocation';

export const run = (config: RunConfig, result: RunResult): void => {
  Object.entries(config.schema.getTypeMap()).forEach(
    ([schemaType, namedType]) => {
      // There are a few internal types with `__` prefixes. We don't want them.
      if (schemaType.startsWith('__')) {
        return;
      }
      // Types without astNode are natives such as Boolean, Int, etc.
      if (!namedType.astNode) {
        return;
      }

      if (isObjectType(namedType) && isRootObjectType(schemaType)) {
        handleGraphQLRootObjectType(
          { type: namedType, outputDir: undefined },
          config,
          result
        );
      } else if (isObjectType(namedType) && !isRootObjectType(schemaType)) {
        handleGraphQLObjectType(
          {
            type: namedType,
            outputDir: getPathToLocation(config, namedType.astNode.loc),
          },
          config,
          result
        );
      } else if (isUnionType(namedType)) {
        handleGraphQLUninionType(
          {
            type: namedType,
            outputDir: getPathToLocation(config, namedType.astNode.loc),
          },
          config,
          result
        );
      }
    }
  );

  // Check to see which resolver file exists already
  fixExistingResolvers(result);

  // Put all resolvers into a barrel file
  addResolversIndexFile(config, result);
};
