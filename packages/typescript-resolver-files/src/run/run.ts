import {
  isObjectType,
  isIntrospectionType,
  isSpecifiedScalarType,
} from 'graphql';
import type { GraphQLTypeHandler, RunContext } from '../types';
import {
  normalizeResolverName,
  isRootObjectType,
  printImportLine,
} from '../utils';
import { addResolversMainFile } from './addResolversMainFile';
import { fixExistingResolvers } from './fixExistingResolvers';
import { handleGraphQLObjectType } from './handleGraphQLObjectType';
import { handleGraphQLUninionType } from './handleGraphQLUninionType';
import { handleGraphQLScalarType } from './handleGraphQLScalarType';
import { processNormalizedResolverName } from './processNormalizedResolverName';

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

      if (isObjectType(namedType) && isRootObjectType(schemaType)) {
        handleGraphQLRootObjectType(
          { type: namedType, outputDir: null },
          config,
          result
        );
        return;
      }

      matchActionForNormalizedResolverName(
        {
          normalizedResolverName: normalizeResolverName(namedType.name),
          location: namedType.astNode.loc,
        },
        {
          addExternalImport: (actionData) => {
            addExternalResolverImport(actionData, result);
          },
          generateResolverFile: ({ outputDir }) => {
            if (isObjectType(namedType)) {
              handleGraphQLObjectType(
                { type: namedType, outputDir },
                config,
                result
              );
            } else if (isUnionType(namedType)) {
              handleGraphQLUninionType(
                { type: namedType, outputDir },
                config,
                result
              );
            } else if (isScalarType(namedType)) {
              handleGraphQLScalarType(
                { type: namedType, outputDir },
                config,
                result
              );
            }
          },
        },
        config
      );
    }
  );

  // Check to see which resolver file exists already
  fixExistingResolvers(result);

  // Put all resolvers into a barrel file (or main file)
  addResolversMainFile(config, result);
};
