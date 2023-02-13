import { printImportLine, type RootObjectType } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLRootObjectTypeField: GraphQLTypeHandler<
  RootObjectType
> = (
  {
    fieldFilePath,
    resolverName,
    belongsToRootObject,
    normalizedResolverName,
    resolversTypeMeta,
  },
  { result }
) => {
  const variableStatement = `export const ${resolverName}: NonNullable<${resolversTypeMeta.typeString}> = async (_parent, _arg, _ctx) => { /* Implement ${normalizedResolverName} resolver logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'rootObjectTypeFieldResolver',
    content: `
        ${printImportLine({
          isTypeImport: true,
          module: resolversTypeMeta.module,
          namedImports: [resolversTypeMeta.typeNamedImport],
        })}
        ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      belongsToRootObject,
      variableStatement,
      normalizedResolverName,
    },
  };
};
