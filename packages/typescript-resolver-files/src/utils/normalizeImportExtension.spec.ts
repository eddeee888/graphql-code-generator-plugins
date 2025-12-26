import { normalizeImportExtension } from './normalizeImportExtension';

describe('normalizeImportExtension', () => {
  describe('when importExtension is explicitly provided', () => {
    it('returns the explicit extension regardless of emitLegacyCommonJSImports', () => {
      expect(normalizeImportExtension('.js', true)).toBe('.js');
      expect(normalizeImportExtension('.js', false)).toBe('.js');
      expect(normalizeImportExtension('.js', undefined)).toBe('.js');
    });

    it('returns empty string when explicitly set to empty', () => {
      expect(normalizeImportExtension('', true)).toBe('');
      expect(normalizeImportExtension('', false)).toBe('');
      expect(normalizeImportExtension('', undefined)).toBe('');
    });

    it('returns custom extension formats', () => {
      expect(normalizeImportExtension('.mjs', undefined)).toBe('.mjs');
      expect(normalizeImportExtension('.cjs', false)).toBe('.cjs');
      expect(normalizeImportExtension('.mjs', true)).toBe('.mjs');
      expect(normalizeImportExtension('.custom.ext')).toBe('.custom.ext');
    });

    it('takes precedence over emitLegacyCommonJSImports', () => {
      expect(normalizeImportExtension('.mjs', false)).toBe('.mjs');
    });
  });

  describe('when importExtension is undefined', () => {
    it('returns .js when emitLegacyCommonJSImports is false', () => {
      expect(normalizeImportExtension(undefined, false)).toBe('.js');
    });

    it('returns empty string when emitLegacyCommonJSImports is true', () => {
      expect(normalizeImportExtension(undefined, true)).toBe('');
    });

    it('returns empty string when emitLegacyCommonJSImports is undefined', () => {
      expect(normalizeImportExtension(undefined, undefined)).toBe('');
    });
  });
});
