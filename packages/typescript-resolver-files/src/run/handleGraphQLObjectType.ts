import type { GraphQLObjectType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';
import { validateAndPrepareForGraphQLType } from './validateAndPrepareForGraphQLType';

export const handleGraphQLObjectType: GraphQLTypeHandler<GraphQLObjectType> = (
  params,
  runConfig,
  runResult
) => {
  const { typeName, resolverTypeName, fieldFilePath, relativeModulePath } =
    validateAndPrepareForGraphQLType(params, runConfig, runResult);

  const resolverVariableStatement = `export const ${typeName}: ${resolverTypeName} = { /* Implement ${typeName} resolver logic here */ };`;

  runResult.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: relativeModulePath,
      namedImports: [resolverTypeName],
    })}
    ${resolverVariableStatement}`,
    mainImportIdentifier: typeName,
    meta: {
      belongsToRootObject: null,
      resolverVariableStatement,
    },
  };
};
