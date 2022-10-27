import * as path from 'path';
import type { Location } from 'graphql';
import { RunConfig } from '../types';

export const parseLocation = (
  {
    mode,
    sourcesMap,
    whitelistedModules,
    baseOutputDir,
    relativeTargetDir,
  }: RunConfig,
  location?: Location
): {
  location: Location;
  isInWhitelistedModule: boolean;
  pathToLocation: string;
} => {
  if (!location) {
    throw new Error('Location is invalid');
  }

  // If mode is "merged", there's only one module:
  //   - always generate a.k.a  it's always whitelisted
  //   - put them together at degsinated relativeTargetDir
  if (mode === 'merged') {
    return {
      location,
      isInWhitelistedModule: true,
      pathToLocation: path.join(baseOutputDir, relativeTargetDir),
    };
  }

  // 2. mode is "modules", each module is the folder containing the schema files
  // This means one or multiple schema files can add up to one module
  const sourceFilename = location.source.name;
  const sourceFile = sourcesMap[sourceFilename];
  if (!sourceFile) {
    throw new Error(`Unable to find ${sourceFilename} in sourcesMap`);
  }

  return {
    location,
    isInWhitelistedModule:
      // whitelistedModules is empty a.k.a. all are whitelisted
      whitelistedModules.length === 0
        ? true
        : whitelistedModules.includes(sourceFile.moduleName),
    pathToLocation: path.join(
      baseOutputDir,
      sourceFile.moduleName,
      relativeTargetDir
    ),
  };
};
