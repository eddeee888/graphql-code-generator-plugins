import { printImportLine } from './printImportLine';

describe('printImportLine', () => {
  it('prints default import correctly', () => {
    const result = printImportLine({
      module: './path/to/file',
      moduleType: 'file',
      isTypeImport: false,
      namedImports: [],
      defaultImport: 'DefaultImport',
      emitLegacyCommonJSImports: true,
    });
    expect(result).toBe("import  DefaultImport   from './path/to/file';");
  });

  it('prints one named import correctly', () => {
    const result = printImportLine({
      module: './path/to/file',
      moduleType: 'file',
      isTypeImport: false,
      namedImports: ['Thing'],
      emitLegacyCommonJSImports: true,
    });
    expect(result).toBe("import    { Thing } from './path/to/file';");
  });

  it('prints one aliased named import correctly', () => {
    const result = printImportLine({
      module: './path/to/file',
      moduleType: 'file',
      isTypeImport: false,
      namedImports: [{ propertyName: 'Thing', identifierName: 'OtherThing' }],
      emitLegacyCommonJSImports: true,
    });
    expect(result).toBe(
      "import    { Thing as OtherThing } from './path/to/file';"
    );
  });

  it('prints multiple mixed default and named imports correctly', () => {
    const result = printImportLine({
      module: './path/to/file',
      moduleType: 'file',
      isTypeImport: false,
      defaultImport: 'DefaultThing',
      namedImports: [
        { propertyName: 'Thing', identifierName: 'OtherThing' },
        'ThingTwo',
      ],
      emitLegacyCommonJSImports: true,
    });
    expect(result).toBe(
      "import  DefaultThing , { Thing as OtherThing,ThingTwo } from './path/to/file';"
    );
  });

  it('prints .js extension for ESM files', () => {
    const result = printImportLine({
      module: './path/to/file',
      moduleType: 'file',
      isTypeImport: false,
      namedImports: ['Thing'],
      emitLegacyCommonJSImports: false,
    });
    expect(result).toBe("import    { Thing } from './path/to/file.js';");
  });

  it('does not print .js extension for ESM modules', () => {
    const result = printImportLine({
      module: '@org/module',
      moduleType: 'module',
      isTypeImport: false,
      namedImports: ['Thing'],
      emitLegacyCommonJSImports: false,
    });
    expect(result).toBe("import    { Thing } from '@org/module';");
  });

  it('prints extension as declared', () => {
    const result = printImportLine({
      module: 'absolute/path/to/file.js',
      moduleType: 'preserve',
      isTypeImport: false,
      namedImports: ['Thing'],
      emitLegacyCommonJSImports: true,
    });
    expect(result).toBe("import    { Thing } from 'absolute/path/to/file.js';");
  });

  it('prints type import correctly', () => {
    const result = printImportLine({
      module: './path/to/file',
      moduleType: 'file',
      isTypeImport: true,
      namedImports: ['Thing'],
      emitLegacyCommonJSImports: true,
    });
    expect(result).toBe("import type   { Thing } from './path/to/file';");
  });

  describe('importExtension parameter', () => {
    it('uses explicit importExtension parameter over emitLegacyCommonJSImports', () => {
      const result = printImportLine({
        module: './path/to/file',
        moduleType: 'file',
        isTypeImport: false,
        namedImports: ['Thing'],
        emitLegacyCommonJSImports: false,
        importExtension: '.mjs',
      });
      expect(result).toBe("import    { Thing } from './path/to/file.mjs';");
    });

    it('uses custom .cjs extension when importExtension is provided', () => {
      const result = printImportLine({
        module: './path/to/file',
        moduleType: 'file',
        isTypeImport: false,
        namedImports: ['Thing'],
        emitLegacyCommonJSImports: true,
        importExtension: '.cjs',
      });
      expect(result).toBe("import    { Thing } from './path/to/file.cjs';");
    });

    it('uses empty string when importExtension is explicitly set to empty', () => {
      const result = printImportLine({
        module: './path/to/file',
        moduleType: 'file',
        isTypeImport: false,
        namedImports: ['Thing'],
        emitLegacyCommonJSImports: false,
        importExtension: '',
      });
      expect(result).toBe("import    { Thing } from './path/to/file';");
    });

    it('does not apply importExtension to module imports', () => {
      const result = printImportLine({
        module: '@org/module',
        moduleType: 'module',
        isTypeImport: false,
        namedImports: ['Thing'],
        emitLegacyCommonJSImports: false,
        importExtension: '.mjs',
      });
      expect(result).toBe("import    { Thing } from '@org/module';");
    });
  });
});
