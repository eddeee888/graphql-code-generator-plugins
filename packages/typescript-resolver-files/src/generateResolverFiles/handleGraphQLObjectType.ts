import type { GraphQLTypeHandler } from './types';
import { printImportLine } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler = (
  { fieldFilePath, resolverName, normalizedResolverName, resolversTypeMeta },
  { result }
) => {
  const resolverVariableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { /* Implement ${resolverName} resolver logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: resolversTypeMeta.module,
      namedImports: [resolversTypeMeta.typeNamedImport],
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
