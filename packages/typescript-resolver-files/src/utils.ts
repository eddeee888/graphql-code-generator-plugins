import * as path from 'path';
import type { Source } from '@graphql-tools/utils';
import type { RootObjectType, SourcesMap } from './types';

export const printImportModule = (moduleName: string) => {
  if (moduleName.endsWith('.ts')) {
    return moduleName.split('.').slice(0, -1).join('.');
  }
  return moduleName;
};

export const isRootObjectType = (
  typeName: string
): typeName is RootObjectType =>
  typeName === 'Query' ||
  typeName === 'Mutation' ||
  typeName === 'Subscription';

export const relativeModulePath = (from: string, to: string) => {
  const rawPath = path.relative(from, to);

  if (!rawPath.startsWith('../') || !rawPath.startsWith('./')) {
    return `./${rawPath}`;
  }

  return rawPath;
};

export function parseSources(sources: Source[]): SourcesMap {
  const sourcesMap: SourcesMap = {};

  sources.forEach((source) => {
    if (!source.location) {
      throw new Error('Missing source location');
    }

    const [moduleName] = path
      .dirname(source.location)
      .split(path.sep)
      .slice(-1);

    sourcesMap[source.location] = {
      source,
      moduleName,
    };
  });

  return sourcesMap;
}
