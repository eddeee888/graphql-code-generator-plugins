import type { GraphQLTypeHandler } from './types';
import { printImportLine } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler = (
  { fieldFilePath, resolverName, normalizedResolverName, resolversTypeMeta },
  { result, config: { graphQLObjectTypeResolversToGenerate } }
) => {
  // Array of resolvers that need to be generated because of type mismatch between Schema type and Mapper type
  const resolversToGenerate =
    graphQLObjectTypeResolversToGenerate[resolverName];
  const resolversStatments = resolversToGenerate
    ? `${Object.values(resolversToGenerate)
        .map(({ resolverName, reason }) => {
          return `${resolverName}: () => { ${reason} },`;
        })
        .join('\n')}`
    : '';

  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { 
    /* Implement ${resolverName} resolver logic here */ 
    ${resolversStatments}
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
      resolversToGenerate,
    },
  };
};
