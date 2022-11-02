import type { GraphQLTypeHandler } from '../types';
import { printImportLine } from '../utils';

export const handleGraphQLRootObjectTypeField: GraphQLTypeHandler = (
  {
    fieldFilePath,
    resolverName,
    belongsToRootObject,
    normalizedResolverName,
    resolversTypeMeta,
  },
  { result }
) => {
  const resolverVariableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = async (_parent, _arg, _ctx) => { /* Implement ${normalizedResolverName} resolver logic here */ };`;

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
      belongsToRootObject,
      resolverVariableStatement,
      normalizedResolverName,
    },
  };
};
