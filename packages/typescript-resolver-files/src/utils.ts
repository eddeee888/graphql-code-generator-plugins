import * as path from 'path';
import type { Source } from '@graphql-tools/utils';
import type { ImportLineMeta, RootObjectType, SourcesMap } from './types';

export const isRootObjectType = (
  typeName: string
): typeName is RootObjectType =>
  typeName === 'Query' ||
  typeName === 'Mutation' ||
  typeName === 'Subscription';

export const relativeModulePath = (from: string, to: string): string => {
  const rawPath = path.relative(from, to);
  return normalizeRelativePath(rawPath);
};

export const normalizeRelativePath = (path: string): string => {
  if (!path.startsWith('../') || !path.startsWith('./')) {
    return `./${path}`;
  }
  return path;
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

export function printImportLine({
  isTypeImport,
  module,
  namedImports,
  defaultImport,
}: ImportLineMeta): string {
  const typeImportKeyword = isTypeImport ? 'type' : '';
  const hasDefaultImport = Boolean(defaultImport);
  const hasNamedImports = namedImports.length > 0;
  const namedImportsString = hasNamedImports
    ? `{ ${namedImports.map(printNamedImportSpecifier).join(',')} }`
    : '';

  return `import ${typeImportKeyword} ${defaultImport || ''} ${
    hasDefaultImport && hasNamedImports ? ',' : ''
  } ${namedImportsString} from '${normalizeModuleExtensionForImport(module)}';`;
}

const normalizeModuleExtensionForImport = (module: string): string => {
  if (module.endsWith('.ts')) {
    return module.split('.').slice(0, -1).join('.');
  }
  return module;
};
const printNamedImportSpecifier = (
  namedImport: ImportLineMeta['namedImports'][number]
): string => {
  if (typeof namedImport === 'string') {
    return namedImport;
  }

  if (namedImport.propertyName === namedImport.identifierName) {
    return namedImport.identifierName;
  }

  return `${namedImport.propertyName} as ${namedImport.identifierName}`;
};
