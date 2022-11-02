import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';

export const handleGraphQLUninionType: GraphQLTypeHandler = (
  {
    resolverName,
    resolverType,
    fieldFilePath,
    relativeModulePath,
    normalizedResolverName,
  },
  { result }
) => {
  const resolverVariableStatement = `export const ${resolverName}: ${resolverType.type} = { __resolveType: (parent) => parent.__typename };`;

  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: relativeModulePath,
      namedImports: [resolverType.namedImport],
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
