import * as path from 'path';
import type { GraphQLUnionType } from 'graphql';
import type { HandleGraphQLType } from '../types';
import { printImportModule, relativeModulePath } from '../utils';

export const handleGraphQLUninionType: HandleGraphQLType<GraphQLUnionType> = (
  type,
  { baseOutputDir, resolverTypesPath },
  result
) => {
  const typeName = type.name;
  const fieldFilePath = path.join(baseOutputDir, `${typeName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
  const relativePathToResolverTypes = relativeModulePath(
    baseOutputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);
  const resolverVariableStatement = `export const ${typeName}: ${resolverTypeName} = { __resolveType: (parent) => parent.__typename };`;
  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
    ${resolverVariableStatement}`,
    mainImportIdentifier: typeName,
    meta: {
      belongsToRootObject: null,
      resolverVariableStatement,
    },
  };
};
