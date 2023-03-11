import { defineConfig } from './defineConfig';
import { preset as defaultPreset } from './preset';

describe('defineConfig()', () => {
  it('uses preset correctly', () => {
    const { preset } = defineConfig();
    expect(preset).toBe(defaultPreset);
  });

  it('returns empty object as default presetConfig', () => {
    const { presetConfig } = defineConfig();
    expect(presetConfig).toEqual({});
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
});
