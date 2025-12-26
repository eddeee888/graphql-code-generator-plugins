export type ImportExtension = '' | `.${string}`;

export function normalizeImportExtension(
  importExtension?: ImportExtension,
  emitLegacyCommonJSImports?: boolean
): ImportExtension {
  if (importExtension !== undefined) {
    return importExtension;
  }

  if (emitLegacyCommonJSImports !== undefined) {
    return emitLegacyCommonJSImports ? '' : '.js';
  }

  return '';
}