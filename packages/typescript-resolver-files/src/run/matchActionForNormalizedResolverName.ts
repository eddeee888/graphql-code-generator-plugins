import * as path from 'path';
import type { Location } from 'graphql';
import { RunConfig } from '../types';

interface Params {
  normalizedResolverName: string;
  location?: Location;
}
interface Matchers {
  addExternalImport: (params: {
    normalizedResolverName: string;
    configImportSyntax: string;
  }) => void;
  generateResolverFile: (params: {
    normalizedResolverName: string;
    outputDir: string;
  }) => void;
}

export const matchActionForNormalizedResolverName = (
  { normalizedResolverName, location }: Params,
  matchers: Matchers,
  runConfig: RunConfig
): void => {
  const configImportSyntax = runConfig.resolverImports[normalizedResolverName];
  if (configImportSyntax) {
    matchers['addExternalImport']({
      normalizedResolverName,
      configImportSyntax,
    });
    return;
  }

  const outputDir = parseLocation(runConfig, location);
  if (outputDir) {
    matchers['generateResolverFile']({ normalizedResolverName, outputDir });
  }
};

const parseLocation = (
  {
    mode,
    sourcesMap,
    whitelistedModules,
    baseOutputDir,
    relativeTargetDir,
  }: RunConfig,
  location?: Location
): string | undefined => {
  if (!location) {
    throw new Error('Location is invalid');
  }

  // If mode is "merged", there's only one module:
  //   - always generate a.k.a  it's always whitelisted
  //   - put them together at degsinated relativeTargetDir
  if (mode === 'merged') {
    return path.join(baseOutputDir, relativeTargetDir);
  }

  // 2. mode is "modules", each module is the folder containing the schema files
  // This means one or multiple schema files can add up to one module
  const sourceFilename = location.source.name;
  const sourceFile = sourcesMap[sourceFilename];
  if (!sourceFile) {
    throw new Error(`Unable to find ${sourceFilename} in sourcesMap`);
  }

  const isInWhitelistedModule =
    // whitelistedModules is empty a.k.a. all are whitelisted
    whitelistedModules.length === 0
      ? true
      : whitelistedModules.includes(sourceFile.moduleName);

  return isInWhitelistedModule
    ? path.join(baseOutputDir, sourceFile.moduleName, relativeTargetDir)
    : undefined;
};
