import * as path from 'path';
import type { RootObjectType, RunResult } from '../types';
import { printImportLine, relativeModulePath } from '../utils';

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

  const resolversDetails = Object.entries(result.files).reduce<{
    importLines: string[];
    queryFields: string[];
    mutationFields: string[];
    subscriptionFields: string[];
    objectTypes: { propertyName: string; identifierName: string }[];
  }>(
    (res, [filepath, file]) => {
      if (file.__filetype === 'file') {
        return res;
      }

      res.importLines.push(
        printImportLine({
          isTypeImport: false,
          module: relativeModulePath(outputDir, filepath),
          namedImports: [file.mainImportIdentifier],
        })
      );

      if (!file.meta.belongsToRootObject) {
        res.objectTypes.push({
          propertyName: file.mainImportIdentifier,
          identifierName: file.mainImportIdentifier,
        });
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

  Object.entries(result.externalImports).reduce((res, [module, meta]) => {
    res.importLines.push(
      printImportLine({
        isTypeImport: false,
        module,
        namedImports: meta.importLineMeta.namedImports,
        defaultImport: meta.importLineMeta.defaultImport,
      })
    );

    meta.identifierUsages.forEach((usage) => {
      res.objectTypes.push({
        propertyName: usage.resolverName,
        identifierName: usage.identifierName,
      });
    });

    return res;
  }, resolversDetails);

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
    ${printImportLine({
      isTypeImport: true,
      module: relativePathToResolverTypes,
      namedImports: [resolversTypeName],
    })}
    ${resolversDetails.importLines.map((line) => line).join('\n')}
    export const ${resolversIdentifier}: ${resolversTypeName} = {
      ${queries}
      ${mutations}
      ${suscriptions}
      ${resolversDetails.objectTypes
        .map(
          ({ propertyName, identifierName }) =>
            `${propertyName}: ${identifierName}`
        )
        .join(',\n')}
    }`,
    mainImportIdentifier: resolversIdentifier,
  };
};
