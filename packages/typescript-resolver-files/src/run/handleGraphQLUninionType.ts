import * as path from 'path';
import type { GraphQLUnionType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import { printImportModule, relativeModulePath } from '../utils';

export const handleGraphQLUninionType: GraphQLTypeHandler<GraphQLUnionType> = (
  { type, outputDir },
  { resolverTypesPath },
  result
) => {
  const typeName = type.name;
  const fieldFilePath = path.join(outputDir, `${typeName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  result.dirs[outputDir] = true;

  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
  const relativePathToResolverTypes = relativeModulePath(
    outputDir,
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
