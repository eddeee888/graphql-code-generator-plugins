import * as path from 'path';
import type { Location } from 'graphql';
import { parseLocationForWhitelistedModule } from './parseLocationForWhitelistedModule';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import type { ParseSourcesResult } from '../parseSources';

interface ParseLocationForOutputDirParams {
  nestedDirs: string[];
  location?: Location;
  mode: ParsedPresetConfig['mode'];
  sourceMap: ParseSourcesResult['sourceMap'];
  whitelistedModules: string[];
  blacklistedModules: string[];
  baseOutputDir: string;
  resolverRelativeTargetDir: string;
}

type OutputDirResult =
  | {
      resolversOutputDir: string;
      moduleName: string;
      relativePathFromBaseToModule: string[];
    }
  | undefined;
/**
 * Parse location to see which module it belongs to.
 * Also check against whitelisted and blacklisted to see if need to generate file.
 */
export const parseLocationForOutputDir = ({
  nestedDirs,
  mode,
  sourceMap,
  whitelistedModules,
  blacklistedModules,
  baseOutputDir,
  resolverRelativeTargetDir,
  location,
}: ParseLocationForOutputDirParams): OutputDirResult => {
  // If mode is "merged", there's only one module:
  //   - always generate a.k.a  it's always whitelisted
  //   - put them together at designated relativeTargetDir
  //   - moduleName='' i.e. no module
  if (mode === 'merged') {
    return {
      resolversOutputDir: path.posix.join(
        baseOutputDir,
        resolverRelativeTargetDir,
        ...nestedDirs
      ),
      moduleName: '',
      relativePathFromBaseToModule: [],
    };
  }

  // 2. mode is "modules", each module is the folder containing the schema files
  // This means one or multiple schema files can add up to one module
  const parsedSource = parseLocationForWhitelistedModule({
    location,
    sourceMap,
    whitelistedModules,
    blacklistedModules,
  });

  return parsedSource
    ? {
        resolversOutputDir: path.posix.join(
          baseOutputDir,
          ...parsedSource.relativePathFromBaseToModule,
          resolverRelativeTargetDir,
          ...nestedDirs
        ),
        moduleName: parsedSource.moduleName,
        relativePathFromBaseToModule: parsedSource.relativePathFromBaseToModule,
      }
    : undefined;
};
