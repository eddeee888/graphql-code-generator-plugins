import { printImportLine } from '../utils';
import type { GraphQLTypeHandler } from './types';

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
  const resolverVariableStatement = `export const ${resolverName}: NonNullable<${resolversTypeMeta.typeString}> = async (_parent, _arg, _ctx) => { /* Implement ${normalizedResolverName} resolver logic here */ };`;

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
