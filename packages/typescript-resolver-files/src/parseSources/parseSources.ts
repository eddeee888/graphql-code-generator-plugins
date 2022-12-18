import * as path from 'path';
import type { Source } from '@graphql-tools/utils';

export interface ParsedSource {
  source: Source;
  moduleDir: string;
  moduleName: string;
}
export type SourcesMap = Record<string, ParsedSource>;

export function parseSources(sources: Source[]): SourcesMap {
  const sourcesMap: SourcesMap = {};

  sources.forEach((source) => {
    if (!source.location) {
      throw new Error('Missing source location');
    }

    const moduleDir = path.dirname(source.location);

    const [moduleName] = moduleDir.split(path.sep).slice(-1);

    sourcesMap[source.location] = {
      source,
      moduleDir,
      moduleName,
    };
  });

  return sourcesMap;
}
