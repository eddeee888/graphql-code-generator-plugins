import { printImportLine } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLUnionType: GraphQLTypeHandler = (
  {
    fieldFilePath,
    resolverName,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (!resolverGeneration.union) {
    return;
  }

  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { /* Implement ${resolverName} union logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'generalResolver',
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
      resolverTypeString: resolversTypeMeta.typeString,
      variableStatement,
    },
  };
};
