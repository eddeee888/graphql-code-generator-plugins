import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';

export const handleGraphQLRootObjectTypeField: GraphQLTypeHandler = (
  {
    resolverName,
    resolverType,
    relativeModulePath,
    normalizedResolverName,
    fieldFilePath,
    belongsToRootObject,
  },
  { result }
) => {
  const resolverVariableStatement = `export const ${resolverName}: ${resolverType.type} = async (_parent, _arg, _ctx) => { /* Implement ${normalizedResolverName} resolver logic here */ };`;

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
      belongsToRootObject,
      resolverVariableStatement,
      normalizedResolverName,
    },
  };
};
