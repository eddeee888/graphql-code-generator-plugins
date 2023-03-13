import * as path from 'path';
import type { Source } from '@graphql-tools/utils';

export interface ParsedSource {
  source: Source;
  sourcePath: path.ParsedPath;
  moduleName: string;
}

export interface ParseSourcesResult {
  sourceMap: Record<string, ParsedSource>;
}

export function parseSources(sources: Source[]): ParseSourcesResult {
  return sources.reduce<ParseSourcesResult>(
    (result, source) => {
      if (!source.location) {
        throw new Error('Missing source location');
      }

      const sourcePath = path.parse(source.location);
      const moduleDir = sourcePath.dir;

      const moduleName = path.basename(moduleDir);

      result.sourceMap[source.location] = {
        source,
        sourcePath,
        moduleName,
      };

      return result;
    },
    { sourceMap: {} }
  );
}
