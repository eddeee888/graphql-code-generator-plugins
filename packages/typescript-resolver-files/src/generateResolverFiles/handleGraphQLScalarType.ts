import { printImportLine, isMatchResolverNamePattern, logger } from '../utils';
import type { GraphQLTypeHandler } from './types';

const graphQLScalarType = 'GraphQLScalarType';

export const handleGraphQLScalarType: GraphQLTypeHandler = (
  {
    fieldFilePath,
    isFileAlreadyOnFilesystem,
    resolverName,
    normalizedResolverName,
    moduleName,
    relativePathFromBaseToModule,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (
    !isMatchResolverNamePattern({
      pattern: resolverGeneration.scalar,
      value: normalizedResolverName.withModule,
    }) &&
    !isFileAlreadyOnFilesystem
  ) {
    logger.debug(
      `Skipped Scalar resolver generation: "${normalizedResolverName.withModule}". Pattern: "${resolverGeneration.scalar}".`
    );
    return;
  }

  const resolverTypeImportDeclaration = printImportLine({
    isTypeImport: false,
    module: 'graphql',
    moduleType: 'module',
    namedImports: [graphQLScalarType],
    emitLegacyCommonJSImports,
  });
  const variableStatement = `export const ${resolverName} = new GraphQLScalarType({
    name: '${resolverName}',
    description: '${resolverName} description',
    serialize: (value) => {
      /* Implement logic to turn the returned value from resolvers to a value that can be sent to clients */
    },
    parseValue: (value) => {
      /* Implement logic to parse input that was sent to the server as variables */
    },
    parseLiteral: (ast) => {
      /* Implement logic to parse input that was sent to the server as literal values (string, number, or boolean) */
    },
  });`;

  result.files[fieldFilePath] = {
    __filetype: 'generalResolver',
    content: `
    ${resolverTypeImportDeclaration}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      relativePathFromBaseToModule,
      normalizedResolverName,
      resolverTypeImportDeclaration,
      variableStatement,
      resolverType: null,
    },
  };
};
