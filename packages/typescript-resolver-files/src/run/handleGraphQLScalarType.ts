import type { GraphQLScalarType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';
import { validateAndPrepareForGraphQLType } from './validateAndPrepareForGraphQLType';

const graphQLScalarType = 'GraphQLScalarType';

export const handleGraphQLScalarType: GraphQLTypeHandler<GraphQLScalarType> = (
  params,
  runConfig,
  runResult
) => {
  const { typeName, fieldFilePath } = validateAndPrepareForGraphQLType(
    params,
    runConfig,
    runResult
  );

  const resolverVariableStatement = `export const ${typeName}: ${graphQLScalarType} = { /* Implement ${typeName} scalar logic here */ };`;

  runResult.files[fieldFilePath] = {
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
