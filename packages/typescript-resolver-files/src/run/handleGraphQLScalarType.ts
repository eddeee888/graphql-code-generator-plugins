import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';

const graphQLScalarType = 'GraphQLScalarType';

export const handleGraphQLScalarType: GraphQLTypeHandler = (
  { resolverName, fieldFilePath, normalizedResolverName },
  { result }
) => {
  const resolverVariableStatement = `export const ${resolverName}: ${graphQLScalarType} = { /* Implement ${resolverName} scalar logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: 'graphql',
      namedImports: [graphQLScalarType],
    })}
    ${resolverVariableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      belongsToRootObject: null,
      normalizedResolverName,
      resolverVariableStatement,
    },
  };
};
