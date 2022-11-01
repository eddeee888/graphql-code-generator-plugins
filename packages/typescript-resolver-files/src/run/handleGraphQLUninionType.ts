import type { GraphQLUnionType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';
import { validateAndPrepareForGraphQLType } from './validateAndPrepareForGraphQLType';

export const handleGraphQLUninionType: GraphQLTypeHandler<GraphQLUnionType> = (
  params,
  runConfig,
  runResult
) => {
  const { typeName, resolverTypeName, fieldFilePath, relativeModulePath } =
    validateAndPrepareForGraphQLType(params, runConfig, runResult);

  const resolverVariableStatement = `export const ${typeName}: ${resolverTypeName} = { __resolveType: (parent) => parent.__typename };`;

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
