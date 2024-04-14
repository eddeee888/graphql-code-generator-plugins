import {
  printImportLine,
  isMatchResolverNamePattern,
  logger,
  type RootObjectType,
} from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLRootObjectTypeField: GraphQLTypeHandler<
  RootObjectType
> = (
  {
    fieldFilePath,
    resolverName,
    belongsToRootObject,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    relativePathFromBaseToModule,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (
    (belongsToRootObject === 'Query' &&
      !isMatchResolverNamePattern({
        pattern: resolverGeneration.query,
        value: normalizedResolverName.withModule,
      })) ||
    (belongsToRootObject === 'Mutation' &&
      !isMatchResolverNamePattern({
        pattern: resolverGeneration.mutation,
        value: normalizedResolverName.withModule,
      })) ||
    (belongsToRootObject === 'Subscription' &&
      !isMatchResolverNamePattern({
        pattern: resolverGeneration.subscription,
        value: normalizedResolverName.withModule,
      }))
  ) {
    const resolverGenerationPattern =
      belongsToRootObject === 'Query'
        ? resolverGeneration.query
        : belongsToRootObject === 'Mutation'
        ? resolverGeneration.mutation
        : belongsToRootObject === 'Subscription'
        ? resolverGeneration.subscription
        : 'Unknown';
    logger.debug(
      `Skipped ${belongsToRootObject} resolver generation: "${normalizedResolverName.withModule}". Pattern: "${resolverGenerationPattern}".`
    );
    return;
  }

  const suggestion = `/* Implement ${normalizedResolverName.base} resolver logic here */`;

  const resolverTypeString = `NonNullable<${resolversTypeMeta.typeString}>`;

  let variableStatement = `export const ${resolverName}: ${resolverTypeString} = async (_parent, _arg, _ctx) => { ${suggestion} };`;
  if (belongsToRootObject === 'Subscription') {
    variableStatement = `export const ${resolverName}: ${resolverTypeString} = {
      subscribe: async (_parent, _arg, _ctx) => { ${suggestion} },
    }`;
  }

  result.files[fieldFilePath] = {
    __filetype: 'rootObjectTypeFieldResolver',
    content: `
        ${printImportLine({
          isTypeImport: true,
          module: resolversTypeMeta.module,
          moduleType: resolversTypeMeta.moduleType,
          namedImports: [resolversTypeMeta.typeNamedImport],
          emitLegacyCommonJSImports,
        })}
        ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      relativePathFromBaseToModule,
      belongsToRootObject,
      variableStatement,
      resolverTypeString,
      normalizedResolverName,
    },
  };
};
