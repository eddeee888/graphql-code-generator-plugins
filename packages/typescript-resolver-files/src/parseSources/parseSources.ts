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

      const relativePathFromBaseToModule = path
        .relative(path.resolve(baseOutputDir), path.resolve(sourcePath.dir))
        .split(path.sep);

      const moduleName = selectModuleName({
        moduleNamingMode,
        relativePathFromBaseToModule,
      });

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

const selectModuleName = ({
  moduleNamingMode,
  relativePathFromBaseToModule,
}: {
  moduleNamingMode: ModuleNamingMode;
  relativePathFromBaseToModule: string[];
}): string => {
  if (moduleNamingMode === 'all') {
    return relativePathFromBaseToModule.join('_');
  }

  const wrappedModuleNamingMode =
    moduleNamingMode >= 0
      ? moduleNamingMode
      : relativePathFromBaseToModule.length + moduleNamingMode;

  if (
    wrappedModuleNamingMode < 0 ||
    wrappedModuleNamingMode >= relativePathFromBaseToModule.length
  ) {
    throw new Error(
      `"moduleNamingMode" ${moduleNamingMode} exceeds path ${relativePathFromBaseToModule.join(
        '/'
      )}`
    );
  }

  return relativePathFromBaseToModule[wrappedModuleNamingMode];
};
