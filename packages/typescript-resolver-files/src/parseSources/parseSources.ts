import * as path from 'path';
import type { Source } from '@graphql-tools/utils';
import type { ModuleNamingMode } from '../validatePresetConfig';

export interface ParsedSource {
  source: Source;
  sourcePath: path.ParsedPath;
  moduleName: string;
  relativePathFromBaseToModule: string[];
}

export interface ParseSourcesResult {
  sourceMap: Record<string, ParsedSource>;
}

export function parseSources({
  sources,
  baseOutputDir,
  moduleNamingMode,
}: {
  sources: Source[];
  baseOutputDir: string;
  moduleNamingMode: ModuleNamingMode;
}): ParseSourcesResult {
  return sources.reduce<ParseSourcesResult>(
    (result, source) => {
      if (!source.location) {
        throw new Error('Missing source location');
      }

      const sourcePath = path.parse(source.location);
      const moduleDir = sourcePath.dir;

      const relativePathFromBaseToModule = path
        .relative(path.resolve(baseOutputDir), path.resolve(sourcePath.dir))
        .split(path.sep);

      const moduleName = {
        first: () => relativePathFromBaseToModule[0],
        last: () => path.basename(moduleDir),
      }[moduleNamingMode]();

      result.sourceMap[source.location] = {
        source,
        sourcePath,
        moduleName,
        relativePathFromBaseToModule,
      };

      return result;
    },
    { sourceMap: {} }
  );
}
