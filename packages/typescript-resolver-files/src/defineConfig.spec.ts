import { defineConfig } from './defineConfig';
import { preset as defaultPreset } from './preset';

describe('defineConfig()', () => {
  it('returns default values correctly', () => {
    const result = defineConfig();

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['**/*.mappers.ts'],
    });
  });

  it('returns default values correctly with baseOutputDir', () => {
    const result = defineConfig({}, { baseOutputDir: 'src/schema' });

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['src/schema/**/*.mappers.ts'],
    });
  });

  it('returns schema value correctly when set', () => {
    const result = defineConfig({}, { schema: ['src/**/*.graphqls'] });

    expect(result).toEqual({
      preset: defaultPreset,
      presetConfig: {},
      watchPattern: ['**/*.mappers.ts'],
      schema: ['src/**/*.graphqls'],
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
