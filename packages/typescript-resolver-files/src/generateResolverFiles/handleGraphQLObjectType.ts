import type { GraphQLTypeHandler } from './types';
import { printImportLine } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler = (
  {
    fieldFilePath,
    resolverName,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
  },
  {
    result,
    config: {
      resolverGeneration,
      graphQLObjectTypeResolversToGenerate,
      emitLegacyCommonJSImports,
    },
  }
) => {
  if (!resolverGeneration.object) {
    return;
  }

  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { 
    /* Implement ${resolverName} resolver logic here */ 
  };`;

  result.files[fieldFilePath] = {
    __filetype: 'objectType',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: resolversTypeMeta.module,
      moduleType: resolversTypeMeta.moduleType,
      namedImports: [resolversTypeMeta.typeNamedImport],
      emitLegacyCommonJSImports,
    })}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      normalizedResolverName,
      variableStatement,
      resolversToGenerate: graphQLObjectTypeResolversToGenerate[resolverName], // Array of all resolvers that may need type checking
    },
  };
};
