import * as path from 'path';
import type { Location } from 'graphql';
import { RunConfig } from '../types';

export const getPathToLocation = (config: RunConfig, location?: Location) => {
  if (!location) {
    throw new Error('Location is invalid');
  }

  // If mode is "merged", there's only one module, put them together at degsinated relativeTargetDir
  if (config.mode === 'merged') {
    return path.join(config.baseOutputDir, config.relativeTargetDir);
  }

  // If mode is "modules", each module is the folder containing the schema files
  // This means one or multiple schema files can add up to one module
  const sourceFilename = location.source.name;
  const sourceFile = config.sourcesMap[sourceFilename];
  if (!sourceFile) {
    throw new Error(`Unable to find ${sourceFilename} in sourcesMap`);
  }

  return path.join(
    config.baseOutputDir,
    sourceFile.moduleName,
    config.relativeTargetDir
  );
};
