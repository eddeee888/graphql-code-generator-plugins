import * as path from 'path';
import type { RootObjectType, RunResult } from '../types';
import { printImportModule, relativeModulePath } from '../utils';

interface AddResolversMainFileParams {
  baseOutputDir: string;
  resolverTypesPath: string;
  mainFile: string;
}
export const addResolversMainFile = (
  { baseOutputDir, resolverTypesPath, mainFile }: AddResolversMainFileParams,
  result: RunResult
): void => {
  const filename = path.join(baseOutputDir, mainFile.split('/').join(path.sep));
  const outputDir = path.dirname(filename);

  // Make sure to create target dir to main file, in case mainFile is a path!
  result.dirs[outputDir] = true;

  const relativePathToResolverTypes = relativeModulePath(
    outputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);

  const resolversDetails = Object.entries(result.files).reduce<{
    importLines: string[];
    queryFields: string[];
    mutationFields: string[];
    subscriptionFields: string[];
    objectTypes: string[];
  }>(
    (res, [filepath, file]) => {
      if (file.__filetype === 'file') {
        return res;
      }

      const pathToModule = printImportModule(
        relativeModulePath(outputDir, filepath)
      );
      res.importLines.push(
        `import { ${file.mainImportIdentifier} } from '${pathToModule}'`
      );

      if (!file.meta.belongsToRootObject) {
        res.objectTypes.push(file.mainImportIdentifier);
        return res;
      }
      const rootObjectMap: Record<RootObjectType, () => void> = {
        Query: () => res.queryFields.push(file.mainImportIdentifier),
        Mutation: () => res.mutationFields.push(file.mainImportIdentifier),
        Subscription: () =>
          res.subscriptionFields.push(file.mainImportIdentifier),
      };
      rootObjectMap[file.meta.belongsToRootObject]();

      return res;
    },
    {
      importLines: [],
      queryFields: [],
      mutationFields: [],
      subscriptionFields: [],
      objectTypes: [],
    }
  );

  const resolversIdentifier = 'resolvers';
  const resolversTypeName = 'Resolvers'; // Generated type from typescript-resolvers plugin

  const queries =
    resolversDetails.queryFields.length > 0
      ? `Query: { ${resolversDetails.queryFields
          .map((field) => field)
          .join(',\n')} },`
      : '';
  const mutations =
    resolversDetails.mutationFields.length > 0
      ? `Mutation: { ${resolversDetails.mutationFields
          .map((field) => field)
          .join(',\n')} },`
      : '';
  const suscriptions =
    resolversDetails.subscriptionFields.length > 0
      ? `Subscription: { ${resolversDetails.subscriptionFields
          .map((field) => field)
          .join(',\n')} },`
      : '';

  result.files[filename] = {
    __filetype: 'file',
    content: `/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type { ${resolversTypeName} } from '${pathToResolverModule}';
    ${resolversDetails.importLines.map((line) => line).join(';\n')}
    export const ${resolversIdentifier}: ${resolversTypeName} = {
      ${queries}
      ${mutations}
      ${suscriptions}
      ${resolversDetails.objectTypes.map((type) => type).join(',\n')}
    }`,
    mainImportIdentifier: 'resolvers',
  };
};
