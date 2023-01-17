import type { Location } from 'graphql';
import type { ParseSourcesResult, ParsedSource } from '../parseSources';

export interface ParseLocationForWhitelistedModule {
  location: Location | undefined;
  sourceMap: ParseSourcesResult['sourceMap'];
  whitelistedModules: string[];
  blacklistedModules: string[];
}

export const parseLocationForWhitelistedModule = ({
  location,
  sourceMap,
  whitelistedModules,
  blacklistedModules,
}: ParseLocationForWhitelistedModule): ParsedSource | undefined => {
  if (!location) {
    throw new Error('Location is invalid');
  }

  const sourceFilename = location.source.name;
  const sourceFile = sourceMap[sourceFilename];
  if (!sourceFile) {
    throw new Error(`Unable to find ${sourceFilename} in sourceMap`);
  }

  if (blacklistedModules.includes(sourceFile.moduleName)) {
    return;
  }

  const isInWhitelistedModule =
    // whitelistedModules is empty a.k.a. all are whitelisted
    whitelistedModules.length === 0
      ? true
      : whitelistedModules.includes(sourceFile.moduleName);

  return isInWhitelistedModule ? sourceFile : undefined;
};
