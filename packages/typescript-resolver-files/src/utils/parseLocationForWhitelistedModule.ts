import type { Location } from 'graphql';
import type { SourcesMap, ParsedSource } from './parseSources';

interface ParseLocationForWhitelistedModule {
  location: Location | undefined;
  sourcesMap: SourcesMap;
  whitelistedModules: string[];
  blacklistedModules: string[];
}

export const parseLocationForWhitelistedModule = ({
  location,
  sourcesMap,
  whitelistedModules,
  blacklistedModules,
}: ParseLocationForWhitelistedModule): ParsedSource | undefined => {
  if (!location) {
    throw new Error('Location is invalid');
  }

  const sourceFilename = location.source.name;
  const sourceFile = sourcesMap[sourceFilename];
  if (!sourceFile) {
    throw new Error(`Unable to find ${sourceFilename} in sourcesMap`);
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
