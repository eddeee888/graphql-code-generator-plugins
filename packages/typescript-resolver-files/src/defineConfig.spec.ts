import { defineConfig } from './defineConfig.js';
import { preset as defaultPreset } from './preset.js';

describe('defineConfig()', () => {
  it('returns default values correctly', () => {
    const result = defineConfig();

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['**/*.mappers.ts'],
      overwrite: {
        removeStaleFiles: false,
        updateExistingFiles: true,
      },
    });
  });

  it('returns default values correctly with baseOutputDir', () => {
    const result = defineConfig({}, { baseOutputDir: 'src/schema' });

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['src/schema/**/*.mappers.ts'],
      overwrite: {
        removeStaleFiles: false,
        updateExistingFiles: true,
      },
    });
  });

  it('returns schema value correctly when set', () => {
    const result = defineConfig({}, { schema: ['src/**/*.graphqls'] });

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['**/*.mappers.ts'],
      schema: ['src/**/*.graphqls'],
      overwrite: {
        removeStaleFiles: false,
        updateExistingFiles: true,
      },
    });
  });

  it('returns hooks value correctly when set', () => {
    const result = defineConfig(
      {},
      { hooks: { afterAllFileWrite: ['prettier --write'] } }
    );

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['**/*.mappers.ts'],
      hooks: { afterAllFileWrite: ['prettier --write'] },
      overwrite: {
        removeStaleFiles: false,
        updateExistingFiles: true,
      },
    });
  });

  it('returns presetConfig with declared config', () => {
    const { presetConfig } = defineConfig({
      mode: 'merged',
      fixObjectTypeResolvers: 'disabled',
      typesPluginsConfig: {
        defaultMapper: 'Partial<{T}>',
      },
    });
    expect(presetConfig).toEqual({
      mode: 'merged',
      fixObjectTypeResolvers: 'disabled',
      typesPluginsConfig: {
        defaultMapper: 'Partial<{T}>',
      },
    });
  });

  it('returns updated watchPattern if custom presetConfig.mappersFileExtension is used', () => {
    const { presetConfig, watchPattern } = defineConfig({
      mappersFileExtension: '.model.ts',
    });
    expect(presetConfig).toEqual({
      mappersFileExtension: '.model.ts',
    });
    expect(watchPattern).toEqual(['**/*.model.ts']);
  });
});
