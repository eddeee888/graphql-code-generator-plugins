import type { GraphQLTypeHandler } from './types';
import { printImportLine } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler = (
  { fieldFilePath, resolverName, normalizedResolverName, resolversTypeMeta },
  { result, config: { graphQLObjectTypeResolversToGenerate } }
) => {
  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { 
    /* Implement ${resolverName} resolver logic here */ 
  };`;

  result.files[fieldFilePath] = {
    __filetype: 'objectType',
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
      resolversToGenerate: graphQLObjectTypeResolversToGenerate[resolverName], // Array of all resolvers that may need type checking
    },
  };
};
