import {
  type ParsedPresetConfig,
  validatePresetConfig,
} from './validatePresetConfig';

const defaultExpected: ParsedPresetConfig = {
  mode: 'modules',
  resolverMainFile: 'resolvers.generated.ts',
  resolverMainFileMode: 'merged',
  resolverRelativeTargetDir: 'resolvers',
  resolverTypesPath: './types.generated.ts',
  resolverGeneration: {
    query: true,
    mutation: true,
    subscription: true,
    scalar: true,
    object: true,
    union: false,
    interface: false,
  },
  typeDefsFilePath: './typeDefs.generated.ts',
  typeDefsFileMode: 'merged',
  mappersFileExtension: '.mappers.ts',
  mappersSuffix: 'Mapper',
  scalarsModule: 'graphql-scalars',
  scalarsOverrides: {},
  externalResolvers: {},
  typesPluginsConfig: {},
  whitelistedModules: [],
  blacklistedModules: [],
  tsMorphProjectOptions: {
    skipAddingFilesFromTsConfig: true,
  },
  fixObjectTypeResolvers: 'smart',
  emitLegacyCommonJSImports: true,
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
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.mode must be "merged" or "modules" (default is "modules")'
    );
  });

  it("returns result.typeDefsFileMode = 'modules' if config.typeDefsFileMode == modules", () => {
    const parsed = validatePresetConfig({ typeDefsFileMode: 'modules' });

    expect(parsed).toEqual({
      ...defaultExpected,
      typeDefsFileMode: 'modules',
    });
  });

  it("returns result.resolverMainFileMode = 'merged' if config.resolverMainFileMode == merged", () => {
    const parsed = validatePresetConfig({ resolverMainFileMode: 'merged' });

    expect(parsed).toEqual({
      ...defaultExpected,
      resolverMainFileMode: 'merged',
    });
  });

  it("returns result.resolverMainFileMode = 'modules' if config.resolverMainFileMode == modules", () => {
    const parsed = validatePresetConfig({ resolverMainFileMode: 'modules' });

    expect(parsed).toEqual({
      ...defaultExpected,
      resolverMainFileMode: 'modules',
    });
  });

  it('throws if result.resolverMainFileMode is not expected', () => {
    expect(() =>
      validatePresetConfig({ resolverMainFileMode: 'not_valid_value' })
    ).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.resolverMainFileMode must be "merged" or "modules" (default is "merged")'
    );
  });

  it("returns result.typeDefsFileMode = 'mergedWhitelisted' if config.typeDefsFileMode == mergedWhitelisted", () => {
    const parsed = validatePresetConfig({
      typeDefsFileMode: 'mergedWhitelisted',
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      typeDefsFileMode: 'mergedWhitelisted',
    });
  });

  it('throws if result.typeDefsFileMode is not expected', () => {
    expect(() => validatePresetConfig({ typeDefsFileMode: '' })).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.typeDefsFileMode must be "merged", "mergedWhitelisted" or "modules" (default is "merged")'
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
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.resolverTypesPath is required'
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
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.mainFile must be a valid file name'
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

  it('returns result.fixObjectTypeResolvers = "smart" if set as "smart"', () => {
    const parsed = validatePresetConfig({ fixObjectTypeResolvers: 'smart' });

    expect(parsed).toEqual({
      ...defaultExpected,
      fixObjectTypeResolvers: 'smart',
    });
  });

  it('returns result.fixObjectTypeResolvers = "disabled" if set as "disabled"', () => {
    const parsed = validatePresetConfig({ fixObjectTypeResolvers: 'disabled' });

    expect(parsed).toEqual({
      ...defaultExpected,
      fixObjectTypeResolvers: 'disabled',
    });
  });

  it('returns result.emitLegacyCommonJSImports = false if set to false', () => {
    const parsed = validatePresetConfig({ emitLegacyCommonJSImports: false });

    expect(parsed).toEqual({
      ...defaultExpected,
      emitLegacyCommonJSImports: false,
    });
  });

  it('throws if config.typesPluginsConfig.emitLegacyCommonJSImports is used', () => {
    expect(() =>
      validatePresetConfig({
        typesPluginsConfig: {
          emitLegacyCommonJSImports: false,
        },
      })
    ).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.typesPluginsConfig.emitLegacyCommonJSImports is not supported. Use presetConfig.emitLegacyCommonJSImports instead.'
    );
  });

  it('throws if config.typesPluginsConfig.namingConvention is used', () => {
    expect(() =>
      validatePresetConfig({
        typesPluginsConfig: { namingConvention: 'change-case-all#pascalCase' },
      })
    ).toThrowError(
      "[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.typesPluginsConfig.namingConvention is not currently supported. This is set as `namingConvention: 'keep'`."
    );
  });

  it('throws if result.fixObjectTypeResolvers is not valid', () => {
    expect(() =>
      validatePresetConfig({ fixObjectTypeResolvers: 'not-valid-for-sure' })
    ).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.fixObjectTypeResolvers must be "smart" or "disabled" (default is "smart")'
    );
  });

  it('throws if config.typesPluginsConfig.scalars is used', () => {
    expect(() =>
      validatePresetConfig({ typesPluginsConfig: { scalars: 'asdas' } })
    ).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.typesPluginsConfig.scalars is not supported. Use presetConfig.scalarsOverrides instead.'
    );
  });

  it('returns result.scalarsModule = false if config.scalarsModule == false', () => {
    const parsed = validatePresetConfig({ scalarsModule: false });

    expect(parsed).toEqual({
      ...defaultExpected,
      scalarsModule: false,
    });
  });
  it('returns custom result.scalarsModule = false if config.scalarsModule == false', () => {
    const parsed = validatePresetConfig({
      scalarsModule: '@someother/graphql-scalars',
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      scalarsModule: '@someother/graphql-scalars',
    });
  });

  it('returns correct result if config.externalResolvers and config.scalarsOverrides are used together', () => {
    const parsed = validatePresetConfig({
      externalResolvers: {
        DateTime: 'module#DateTimeResolver',
      },
      scalarsOverrides: {
        Currency: {
          resolver: 'module#CurrencyResolver',
          type: 'unknown',
        },
      },
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      externalResolvers: {
        DateTime: 'module#DateTimeResolver',
      },
      scalarsOverrides: {
        Currency: {
          resolver: 'module#CurrencyResolver',
          type: 'unknown',
        },
      },
    });
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
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.whitelistedModules must be an array if provided'
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
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.blacklistedModules must be an array if provided'
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
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.whitelistedModules can only be used with presetConfig.mode == "modules"'
    );
  });
  it('throws if config.blacklistedModules is provided', () => {
    expect(() =>
      validatePresetConfig({
        mode: 'merged',
        blacklistedModules: ['moduleA'],
      })
    ).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.blacklistedModules can only be used with presetConfig.mode == "modules"'
    );
  });
});

describe('validatePresetConfig - resolverGeneration', () => {
  it.each<{
    input: 'disabled' | 'recommended' | 'all';
    expected: ParsedPresetConfig['resolverGeneration'];
  }>([
    {
      input: 'disabled',
      expected: {
        query: false,
        mutation: false,
        subscription: false,
        scalar: false,
        object: false,
        union: false,
        interface: false,
      },
    },
    {
      input: 'recommended',
      expected: {
        query: true,
        mutation: true,
        subscription: true,
        scalar: true,
        object: true,
        union: false,
        interface: false,
      },
    },
    {
      input: 'all',
      expected: {
        query: true,
        mutation: true,
        subscription: true,
        scalar: true,
        object: true,
        union: true,
        interface: true,
      },
    },
  ])(
    'correctly returns the parsed "$input" resolverGeneration object',
    ({ input, expected }) => {
      const result = validatePresetConfig({ resolverGeneration: input });

      expect(result.resolverGeneration).toEqual(expected);
    }
  );

  it('throws if invalid resolverGeneration is provided', () => {
    expect(() =>
      validatePresetConfig({ resolverGeneration: 'omg_what_is_this' })
    ).toThrowError(
      '[@eddeee888/gcg-typescript-resolver-files] ERROR: Validation - presetConfig.resolverGeneration must be "disabled", "recommended" or "full" (default is "recommended")'
    );
  });
});
