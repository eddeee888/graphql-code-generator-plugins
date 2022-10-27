import * as path from 'path';
import type { GraphQLObjectType } from 'graphql';
import type { HandleGraphQLType } from '../types';
import { printImportModule, relativeModulePath } from '../utils';

export const handleGraphQLObjectType: HandleGraphQLType<GraphQLObjectType> = (
  { type, outputDir },
  { resolverTypesPath },
  result
) => {
  const fieldFilePath = path.join(outputDir, `${type.name}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${type.name}, file: ${fieldFilePath}`
    );
  }

  result.dirs[outputDir] = true;

  const resolverTypeName = `${type.name}Resolvers`; // Generated type from typescript-resolvers plugin
  const relativePathToResolverTypes = relativeModulePath(
    outputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);
  const resolverVariableStatement = `export const ${type.name}: ${resolverTypeName} = { 
  /* Implement ${type.name} resolver logic here */ 
};`;
  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
    ${resolverVariableStatement}`,
    mainImportIdentifier: type.name,
    meta: {
      belongsToRootObject: null,
      resolverVariableStatement,
    },
  };
};
