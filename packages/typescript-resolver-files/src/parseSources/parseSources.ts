import * as path from 'path';
import type { Source } from '@graphql-tools/utils';

export interface ParsedSource {
  source: Source;
  sourcePath: path.ParsedPath;
  moduleName: string;
}
export type SourcesMap = Record<string, ParsedSource>;

export function parseSources(sources: Source[]): SourcesMap {
  const sourcesMap: SourcesMap = {};

  sources.forEach((source) => {
    if (!source.location) {
      throw new Error('Missing source location');
    }

    const sourcePath = path.parse(source.location);
    const moduleDir = sourcePath.dir;

    const [moduleName] = moduleDir.split(path.sep).slice(-1);

    sourcesMap[source.location] = {
      source,
      sourcePath,
      moduleName,
    };
  });

  return sourcesMap;
}
