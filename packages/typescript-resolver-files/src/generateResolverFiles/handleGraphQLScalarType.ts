import { printImportLine } from '../utils';
import type { GraphQLTypeHandler } from './types';

const graphQLScalarType = 'GraphQLScalarType';

export const handleGraphQLScalarType: GraphQLTypeHandler = (
  { fieldFilePath, resolverName, normalizedResolverName, moduleName },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (!resolverGeneration.scalar) {
    return;
  }

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
    ${printImportLine({
      isTypeImport: false,
      module: 'graphql',
      moduleType: 'module',
      namedImports: [graphQLScalarType],
      emitLegacyCommonJSImports,
    })}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      normalizedResolverName,
      variableStatement,
      resolverTypeString: null,
    },
  };
};
