export interface ImportLineMeta {
  isTypeImport: boolean;
  module: string;
  namedImports: (string | { propertyName: string; identifierName: string })[];
  defaultImport?: string;
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
