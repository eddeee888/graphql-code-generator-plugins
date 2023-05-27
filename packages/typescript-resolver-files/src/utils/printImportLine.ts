export interface ImportLineMeta {
  isTypeImport: boolean;
  module: string;
  /**
   * moduleType
   *
   * @description Determines how the module should be treated when imported taking into consideration CJS vs ESM
   * - file: import is a file. For ESM, .js extension is added. For CJS, no extension is added.
   * - module: import is a module from `node_modules` or aliased e.g. `graphql-scalars` or `@org/your-module`. No extension is added.
   * - preserve: preserve what the config declares. This is only used when taking user's config or preset-controlled config e.g. `externalExternals` because the import could be either file or module
   */
  moduleType: 'file' | 'module' | 'preserve';
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

  let fileExt = '';
  if (moduleType !== 'preserve') {
    const isFile = moduleType === 'file';
    fileExt = emitLegacyCommonJSImports || !isFile ? '' : '.js';
  }

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
