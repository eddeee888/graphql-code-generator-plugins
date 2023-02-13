import { printImportLine } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLUninionType: GraphQLTypeHandler = (
  { fieldFilePath, resolverName, normalizedResolverName, resolversTypeMeta },
  { result }
) => {
  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { __resolveType: (parent) => parent.__typename };`;

  result.files[fieldFilePath] = {
    __filetype: 'generalResolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: resolversTypeMeta.module,
      namedImports: [resolversTypeMeta.typeNamedImport],
    })}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      normalizedResolverName,
      variableStatement,
    },
  };
};
