import { validatePresetConfig } from './validatePresetConfig';

const defaultExpected: ReturnType<typeof validatePresetConfig> = {
  mode: 'modules',
  resolverMainFile: 'resolvers.generated.ts',
  resolverRelativeTargetDir: 'resolvers',
  resolverTypesPath: './types.generated.ts',
  typeDefsFilePath: './typeDefs.generated.ts',
  mappersFileExtension: '.mappers.ts',
  mappersSuffix: 'Mapper',
  externalResolvers: {},
  typesPluginsConfig: {
    scalars: {},
  },
  whitelistedModules: [],
  blacklistedModules: [],
};

describe('validatePresetConfig - general', () => {
  it('returns correct default config', () => {
    const parsed = validatePresetConfig({});

    expect(parsed).toEqual(defaultExpected);
  });

  it('throws if wrong mode is provided', () => {
    expect(() =>
      validatePresetConfig({ mode: 'this_will_never_be' })
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.mode must be "merged" or "modules" (default is "modules")'
    );
  });

  it("returns result.typeDefsFilePath = './typeDefs.generated.ts' if config.typeDefsFilePath == true", () => {
    const parsed = validatePresetConfig({ typeDefsFilePath: true });

    expect(parsed).toEqual({
      ...defaultExpected,
      typeDefsFilePath: './typeDefs.generated.ts',
    });
  });
  it('returns result.typeDefsFilePath = false if config.typeDefsFilePath == false', () => {
    const parsed = validatePresetConfig({ typeDefsFilePath: false });

    expect(parsed).toEqual({
      ...defaultExpected,
      typeDefsFilePath: false,
    });
  });
  it("returns result.typeDefsFilePath = '' if config.typeDefsFilePath == '' ", () => {
    const parsed = validatePresetConfig({ typeDefsFilePath: '' });

    expect(parsed).toEqual({
      ...defaultExpected,
      typeDefsFilePath: '',
    });
  });

  it('returns custom result.resolverTypesPath = config.resolverTypesPath if config.resolverTypesPath is not falsy', () => {
    const parsed = validatePresetConfig({
      resolverTypesPath: './types.gen.ts',
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      resolverTypesPath: './types.gen.ts',
    });
  });
  it('throws if if config.resolverTypesPath is falsy', () => {
    expect(() => validatePresetConfig({ resolverTypesPath: '' })).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.resolverTypesPath is required'
    );
  });

  it('returns custom result.resolverRelativeTargetDir = config.resolverRelativeTargetDir', () => {
    const parsed = validatePresetConfig({ resolverRelativeTargetDir: '' });

    expect(parsed).toEqual({
      ...defaultExpected,
      resolverRelativeTargetDir: '',
    });
  });

  it('returns custom result.resolverMainFile = config.resolverMainFile', () => {
    const parsed = validatePresetConfig({
      resolverMainFile: 'resolvers.gen.ts',
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      resolverMainFile: 'resolvers.gen.ts',
    });
  });
  it('throws if config.resolverMainFile is not a valid filename', () => {
    expect(() =>
      validatePresetConfig({ resolverMainFile: 'aaa' })
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.mainFile must be a valid file name'
    );
  });

  it('returns custom result.mappersFileExtension = config.mappersFileExtension', () => {
    const parsed = validatePresetConfig({ mappersFileExtension: '.map.ts' });

    expect(parsed).toEqual({
      ...defaultExpected,
      mappersFileExtension: '.map.ts',
    });
  });

  it('returns custom result.mappersSuffix = config.mappersSuffix', () => {
    const parsed = validatePresetConfig({ mappersSuffix: '_Map' });

    expect(parsed).toEqual({
      ...defaultExpected,
      mappersSuffix: '_Map',
    });
  });

  it('throws if config.typesPluginsConfig.scalars is a non-empty string', () => {
    expect(() =>
      validatePresetConfig({ typesPluginsConfig: { scalars: 'asdas' } })
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.typesPluginsConfig.scalars of type "string" is not supported'
    );
  });
});

describe('validatePresetConfig - mode: modules', () => {
  it('returns custom result.whitelistedModules = config.whitelistedModules', () => {
    const parsed = validatePresetConfig({ whitelistedModules: ['moduleA'] });

    expect(parsed).toEqual({
      ...defaultExpected,
      whitelistedModules: ['moduleA'],
    });
  });
  it('returns result.whitelistedModules = [] if config.whitelistedModules is falsy', () => {
    const parsed = validatePresetConfig({ whitelistedModules: undefined });

    expect(parsed).toEqual({
      ...defaultExpected,
      whitelistedModules: [],
    });
  });
  it('throws if config.whitelistedModules is truthy but not an array', () => {
    expect(() =>
      validatePresetConfig({ whitelistedModules: true } as never)
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.whitelistedModules must be an array if provided'
    );
  });

  it('returns custom result.blacklistedModules = config.blacklistedModules', () => {
    const parsed = validatePresetConfig({ blacklistedModules: ['moduleA'] });

    expect(parsed).toEqual({
      ...defaultExpected,
      blacklistedModules: ['moduleA'],
    });
  });
  it('returns result.blacklistedModules = [] if config.blacklistedModules is falsy', () => {
    const parsed = validatePresetConfig({ blacklistedModules: undefined });

    expect(parsed).toEqual({
      ...defaultExpected,
      blacklistedModules: [],
    });
  });
  it('throws if config.blacklistedModules is truthy but not an array', () => {
    expect(() =>
      validatePresetConfig({ blacklistedModules: true } as never)
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.blacklistedModules must be an array if provided'
    );
  });
});

describe('validatePresetConfig - mode: merged', () => {
  it('returns correct default config for merged mode', () => {
    const parsed = validatePresetConfig({ mode: 'merged' });
    expect(parsed).toEqual({
      ...defaultExpected,
      mode: 'merged',
      resolverRelativeTargetDir: '',
    });
  });

  it('throws if config.whitelistedModules is provided', () => {
    expect(() =>
      validatePresetConfig({
        mode: 'merged',
        whitelistedModules: ['moduleA'],
      })
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.whitelistedModules can only be used with presetConfig.mode == "modules"'
    );
  });
  it('throws if config.blacklistedModules is provided', () => {
    expect(() =>
      validatePresetConfig({
        mode: 'merged',
        blacklistedModules: ['moduleA'],
      })
    ).toThrowError(
      'Validation Error - @eddeee888/gcg-typescript-resolver-files - presetConfig.blacklistedModules can only be used with presetConfig.mode == "modules"'
    );
  });
});
