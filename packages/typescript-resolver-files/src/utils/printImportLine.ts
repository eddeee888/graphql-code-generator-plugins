export interface ImportLineMeta {
  isTypeImport: boolean;
  module: string;
  moduleType: 'file' | 'module';
  namedImports: (string | { propertyName: string; identifierName: string })[];
  defaultImport?: string;
  emitLegacyCommonJSImports: boolean;
}

export function printImportLine({
  isTypeImport,
  module,
  moduleType,
  namedImports,
  defaultImport,
  emitLegacyCommonJSImports,
}: ImportLineMeta): string {
  const typeImportKeyword = isTypeImport ? 'type' : '';
  const hasDefaultImport = Boolean(defaultImport);
  const hasNamedImports = namedImports.length > 0;
  const namedImportsString = hasNamedImports
    ? `{ ${namedImports.map(printNamedImportSpecifier).join(',')} }`
    : '';
  const isFile = moduleType === 'file';
  const fileExt = emitLegacyCommonJSImports || !isFile ? '' : '.js';

  return `import ${typeImportKeyword} ${defaultImport || ''} ${
    hasDefaultImport && hasNamedImports ? ',' : ''
  } ${namedImportsString} from '${normalizeModuleExtensionForImport(
    module
  )}${fileExt}';`;
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
