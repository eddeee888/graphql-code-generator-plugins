import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';

const graphQLScalarType = 'GraphQLScalarType';

export const handleGraphQLScalarType: GraphQLTypeHandler = (
  { resolverName, fieldFilePath },
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
    mainImportIdentifier: typeName,
    meta: {
      belongsToRootObject: null,
      resolverVariableStatement,
    },
  };
};
