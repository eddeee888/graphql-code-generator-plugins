import { printImportLine } from '../utils';
import type { GraphQLTypeHandler } from './types';

const graphQLScalarType = 'GraphQLScalarType';

export const handleGraphQLScalarType: GraphQLTypeHandler = (
  { fieldFilePath, resolverName, normalizedResolverName },
  { result }
) => {
  const variableStatement = `export const ${resolverName}: ${graphQLScalarType} = { /* Implement ${resolverName} scalar logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'generalResolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: 'graphql',
      namedImports: [graphQLScalarType],
    })}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      normalizedResolverName,
      variableStatement,
    },
  };
};
