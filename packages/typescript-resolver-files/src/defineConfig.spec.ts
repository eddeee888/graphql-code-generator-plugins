import { defineConfig } from './defineConfig';
import { preset as defaultPreset } from './preset';

describe('defineConfig()', () => {
  it('returns default values correctly', () => {
    const { preset, presetConfig, watchPattern } = defineConfig();
    expect(preset).toBe(defaultPreset);
    expect(presetConfig).toEqual({});
    expect(watchPattern).toEqual(['**/*.mappers.ts']);
  });

  it('returns default values correctly with baseOutputDir', () => {
    const { preset, presetConfig, watchPattern } = defineConfig(
      {},
      { baseOutputDir: 'src/schema' }
    );
    expect(preset).toBe(defaultPreset);
    expect(presetConfig).toEqual({});
    expect(watchPattern).toEqual(['src/schema/**/*.mappers.ts']);
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
