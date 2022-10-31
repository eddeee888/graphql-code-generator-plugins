import {
  isObjectType,
  isUnionType,
  isIntrospectionType,
  isSpecifiedScalarType,
  isScalarType,
} from 'graphql';
import type { RunConfig, RunResult } from '../types';
import { isRootObjectType } from '../utils';
import { parseLocation } from './parseLocation';
import { addExternalResolverImport } from './addExternalResolverImport';
import { addResolversMainFile } from './addResolversMainFile';
import { fixExistingResolvers } from './fixExistingResolvers';
import { handleGraphQLRootObjectType } from './handleGraphQLRootObjectType';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { handleGraphQLScalarType } from './handleGraphQLScalarType';

export const run = (config: RunConfig, result: RunResult): void => {
  Object.entries(config.schema.getTypeMap()).forEach(
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

      if (isObjectType(namedType) && isRootObjectType(schemaType)) {
        handleGraphQLRootObjectType(
          { type: namedType, outputDir: null },
          config,
          result
        );
        return;
      }

      const configImportSyntax = config.resolverImports[namedType.name];
      if (configImportSyntax) {
        addExternalResolverImport(
          { resolverName: namedType.name, configImportSyntax },
          result
        );
        return;
      }

      const locationInfo = parseLocation(config, namedType.astNode.loc);
      if (!locationInfo.isInWhitelistedModule) {
        return;
      }

      if (isObjectType(namedType) && !isRootObjectType(schemaType)) {
        handleGraphQLObjectType(
          { type: namedType, outputDir: locationInfo.pathToLocation },
          config,
          result
        );
      } else if (isUnionType(namedType)) {
        handleGraphQLUninionType(
          { type: namedType, outputDir: locationInfo.pathToLocation },
          config,
          result
        );
      } else if (isScalarType(namedType)) {
        handleGraphQLScalarType(
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
