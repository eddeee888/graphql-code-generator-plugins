import * as path from 'path';
import type { ImportLineMeta } from '../types';

export * from './parseLocationForWhitelistedModule';
export * from './parseSources';
export * from './isNativeNamedType';
export * from './isRootObjectType';

// TODO: break the functions below this line into smaller files
// -----------

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
