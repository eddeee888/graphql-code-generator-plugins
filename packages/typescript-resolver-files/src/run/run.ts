import { isObjectType, isUnionType } from 'graphql';
import type { RunConfig, RunResult } from '../types';
import { isRootObjectType } from '../utils';
import { handleGraphQLRootObjectType } from './handleGraphQLRootObjectType';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { addResolversMainFile } from './addResolversMainFile';
import { fixExistingResolvers } from './fixExistingResolvers';
import { parseLocation } from './parseLocation';

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
          { type: namedType, outputDir: null },
          config,
          result
        );
      } else if (isObjectType(namedType) && !isRootObjectType(schemaType)) {
        const localtionInfo = parseLocation(config, namedType.astNode.loc);
        if (!localtionInfo.isInWhitelistedModule) {
          return;
        }
        handleGraphQLObjectType(
          { type: namedType, outputDir: localtionInfo.pathToLocation },
          config,
          result
        );
      } else if (isUnionType(namedType)) {
        const locationInfo = parseLocation(config, namedType.astNode.loc);
        if (!locationInfo.isInWhitelistedModule) {
          return;
        }
        handleGraphQLUninionType(
          { type: namedType, outputDir: locationInfo.pathToLocation },
          config,
          result
        );
      }
    }
  );

  // Check to see which resolver file exists already
  fixExistingResolvers(result);

  // Put all resolvers into a barrel file (or main file)
  addResolversMainFile(config, result);
};
