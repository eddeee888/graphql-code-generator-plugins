import type { Location } from 'graphql';
import type { ParseSourcesResult, ParsedSource } from '../parseSources';
import { isWhitelistedModule } from './isWhitelistedModule';

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

  const isWhitelisted = isWhitelistedModule({
    moduleName: sourceFile.moduleName,
    whitelistedModules,
    blacklistedModules,
  });

  return isWhitelisted ? sourceFile : undefined;
};
