import { printImportLine, isMatchResolverNamePattern } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLInterfaceType: GraphQLTypeHandler = (
  {
    fieldFilePath,
    resolverName,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    relativePathFromBaseToModule,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (
    !isMatchResolverNamePattern({
      pattern: resolverGeneration.interface,
      value: normalizedResolverName.withModule,
    })
  ) {
    return;
  }

  const resolverTypeString = resolversTypeMeta.typeString;

  const variableStatement = `export const ${resolverName}: ${resolverTypeString} = { /* Implement ${resolverName} interface logic here */ };`;

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
      relativePathFromBaseToModule,
      normalizedResolverName,
      variableStatement,
      resolverTypeString,
    },
  };
};
