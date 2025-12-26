import {
  type RawPresetConfig,
  type ParsedPresetConfig,
  validatePresetConfig,
} from './validatePresetConfig';

beforeEach(() => {
  jest.resetAllMocks();
});

const defaultExpected: ParsedPresetConfig = {
  mode: 'modules',
  resolverMainFile: 'resolvers.generated.ts',
  resolverMainFileMode: 'merged',
  resolverRelativeTargetDir: 'resolvers',
  resolverTypesPath: './types.generated.ts',
  resolverGeneration: {
    query: '*',
    mutation: '*',
    subscription: '*',
    scalar: '*',
    object: '*',
    union: '',
    interface: '',
    enum: '',
  },
  mergeSchema: {
    path: 'schema.generated.graphqls',
    config: {},
  },
  typeDefsFilePath: './typeDefs.generated.ts',
  typeDefsFileMode: 'merged',
  mappersRelativeTargetDir: './',
  mappersFileExtension: '.mappers.ts',
  mappersSuffix: 'Mapper',
  moduleNamingMode: -1,
  scalarsModule: 'graphql-scalars',
  scalarsOverrides: {},
  externalResolvers: {},
  typesPluginsConfig: {},
  whitelistedModules: [],
  blacklistedModules: [],
  tsMorphProjectOptions: {
    skipAddingFilesFromTsConfig: true,
  },
  fixObjectTypeResolvers: {
    object: 'fast',
    enum: 'fast',
  },
  emitLegacyCommonJSImports: true,
  importExtension:'',
};

describe('validatePresetConfig - general', () => {
  it('returns correct default config', () => {
    const parsed = validatePresetConfig({});

    expect(parsed).toEqual(defaultExpected);
  });

  it('throws if wrong mode is provided', () => {
    expect(() => validatePresetConfig({ mode: 'this_will_never_be' })).toThrow(
      'Validation - presetConfig.mode must be "merged" or "modules" (default is "modules")'
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
    ).toThrow(
      'Validation - presetConfig.resolverMainFileMode must be "merged" or "modules" (default is "merged")'
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
    expect(() => validatePresetConfig({ typeDefsFileMode: '' })).toThrow(
      'presetConfig.typeDefsFileMode must be "merged", "mergedWhitelisted" or "modules" (default is "merged")'
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
    expect(() => validatePresetConfig({ resolverTypesPath: '' })).toThrow(
      'Validation - presetConfig.resolverTypesPath is required'
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
    expect(() => validatePresetConfig({ resolverMainFile: 'aaa' })).toThrow(
      'presetConfig.mainFile must be a valid file name'
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

  it('returns result.fixObjectTypeResolvers object with every key set as "smart" if input is set as "smart"', () => {
    const parsed = validatePresetConfig({ fixObjectTypeResolvers: 'smart' });

    expect(parsed).toEqual({
      ...defaultExpected,
      fixObjectTypeResolvers: {
        object: 'smart',
        enum: 'smart',
      },
    });
  });

  it('returns result.fixObjectTypeResolvers object with every key set as "disabled" if input is set as "disabled"', () => {
    const parsed = validatePresetConfig({ fixObjectTypeResolvers: 'disabled' });

    expect(parsed).toEqual({
      ...defaultExpected,
      fixObjectTypeResolvers: {
        object: 'disabled',
        enum: 'disabled',
      },
    });
  });

  it('returns result.fixObjectTypeResolvers object when input is an object', () => {
    const parsed = validatePresetConfig({
      fixObjectTypeResolvers: {
        object: 'smart',
        enum: 'disabled',
      },
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      fixObjectTypeResolvers: {
        object: 'smart',
        enum: 'disabled',
      },
    });
  });

  it('returns result.fixObjectTypeResolvers fields as "disabled" if the input object fields are not "smart" or "disabled"', () => {
    const parsed = validatePresetConfig({
      fixObjectTypeResolvers: {
        object: 'never_an_option',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enum: undefined as any,
      },
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      fixObjectTypeResolvers: {
        object: 'disabled',
        enum: 'disabled',
      },
    });
  });

  it('returns result.emitLegacyCommonJSImports = false if set to false', () => {
    const parsed = validatePresetConfig({ emitLegacyCommonJSImports: false });

    expect(parsed).toEqual({
      ...defaultExpected,
      emitLegacyCommonJSImports: false,
      importExtension: '.js',
    });
  });

  it('throws if config.typesPluginsConfig.emitLegacyCommonJSImports is used', () => {
    expect(() =>
      validatePresetConfig({
        typesPluginsConfig: {
          emitLegacyCommonJSImports: false,
        },
      })
    ).toThrow(
      'Validation - presetConfig.typesPluginsConfig.emitLegacyCommonJSImports is not supported. Use presetConfig.emitLegacyCommonJSImports instead.'
    );
  });

  it('throws if result.fixObjectTypeResolvers is not valid', () => {
    expect(() =>
      validatePresetConfig({ fixObjectTypeResolvers: 'not-valid-for-sure' })
    ).toThrow(
      'Validation - presetConfig.fixObjectTypeResolvers must be an object, "smart", "fast" or "disabled" (default is "fast")'
    );
  });

  it('throws if config.typesPluginsConfig.scalars is used', () => {
    expect(() =>
      validatePresetConfig({ typesPluginsConfig: { scalars: 'asdas' } })
    ).toThrow(
      'presetConfig.typesPluginsConfig.scalars is not supported. Use presetConfig.scalarsOverrides instead.'
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
    ).toThrow(
      'Validation - presetConfig.whitelistedModules must be an array if provided'
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
    ).toThrow(
      'Validation - presetConfig.blacklistedModules must be an array if provided'
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
    ).toThrow(
      'Validation - presetConfig.whitelistedModules can only be used with presetConfig.mode == "modules"'
    );
  });
  it('throws if config.blacklistedModules is provided', () => {
    expect(() =>
      validatePresetConfig({
        mode: 'merged',
        blacklistedModules: ['moduleA'],
      })
    ).toThrow(
      'Validation - presetConfig.blacklistedModules can only be used with presetConfig.mode == "modules"'
    );
  });
});

describe('validatePresetConfig - importExtension', () => {
  it('returns importExtension: ".js" when explicitly set', () => {
    const parsed = validatePresetConfig({ importExtension: '.js' });

    expect(parsed).toEqual({
      ...defaultExpected,
      importExtension: '.js',
    });
  });

  it('returns importExtension: "" when explicitly set to empty string', () => {
    const parsed = validatePresetConfig({ importExtension: '' });

    expect(parsed).toEqual({
      ...defaultExpected,
      importExtension: '',
    });
  });

  it('returns custom importExtension when provided', () => {
    const parsed = validatePresetConfig({ importExtension: '.mjs' });

    expect(parsed).toEqual({
      ...defaultExpected,
      importExtension: '.mjs',
    });
  });

  it('importExtension takes precedence over emitLegacyCommonJSImports when both are set', () => {
    const parsed = validatePresetConfig({
      importExtension: '.mjs',
      emitLegacyCommonJSImports: false,
    });

    expect(parsed).toEqual({
      ...defaultExpected,
      importExtension: '.mjs',
      emitLegacyCommonJSImports: false,
    });
  });

  it('returns importExtension: "" when emitLegacyCommonJSImports is true (backward compatibility)', () => {
    const parsed = validatePresetConfig({ emitLegacyCommonJSImports: true });

    expect(parsed).toEqual({
      ...defaultExpected,
      emitLegacyCommonJSImports: true,
      importExtension: '',
    });
  });

  describe('base config inheritance', () => {
    it('inherits importExtension from base config when not specified in preset', () => {
      const parsed = validatePresetConfig(
        {},
        { importExtension: '.ts' }
      );

      expect(parsed).toEqual({
        ...defaultExpected,
        importExtension: '.ts',
        emitLegacyCommonJSImports: true,
      });
    });

    it('preset importExtension overrides base config', () => {
      const parsed = validatePresetConfig(
        { importExtension: '.mjs' },
        { importExtension: '.ts' }
      );

      expect(parsed).toEqual({
        ...defaultExpected,
        importExtension: '.mjs',
      });
    });

    it('inherits emitLegacyCommonJSImports from base config', () => {
      const parsed = validatePresetConfig(
        {},
        { emitLegacyCommonJSImports: false }
      );

      expect(parsed).toEqual({
        ...defaultExpected,
        emitLegacyCommonJSImports: false,
        importExtension: '.js',
      });
    });

    it('preset emitLegacyCommonJSImports overrides base config', () => {
      const parsed = validatePresetConfig(
        { emitLegacyCommonJSImports: true },
        { emitLegacyCommonJSImports: false }
      );

      expect(parsed).toEqual({
        ...defaultExpected,
        emitLegacyCommonJSImports: true,
        importExtension: '',
      });
    });

    it('uses defaults when base config is not provided', () => {
      const parsed = validatePresetConfig({});

      expect(parsed).toEqual(defaultExpected);
    });

    it('uses defaults when base config is undefined', () => {
      const parsed = validatePresetConfig({}, undefined);

      expect(parsed).toEqual(defaultExpected);
    });

    it('preset importExtension takes precedence over base emitLegacyCommonJSImports', () => {
      const parsed = validatePresetConfig(
        { importExtension: '.ts' },
        { emitLegacyCommonJSImports: false }
      );

      expect(parsed).toEqual({
        ...defaultExpected,
        emitLegacyCommonJSImports: false, 
        importExtension: '.ts',
      });
    });

    it('base importExtension takes precedence over base emitLegacyCommonJSImports', () => {
      const parsed = validatePresetConfig(
        {},
        { importExtension: '.mts', emitLegacyCommonJSImports: false }
      );

      expect(parsed).toEqual({
        ...defaultExpected,
        emitLegacyCommonJSImports: false, 
        importExtension: '.mts',
      });
    });
  });
});

describe('validatePresetConfig - resolverGeneration', () => {
  it.each<{
    input: 'disabled' | 'recommended' | 'all' | 'minimal';
    expected: ParsedPresetConfig['resolverGeneration'];
  }>([
    {
      input: 'disabled',
      expected: {
        query: '',
        mutation: '',
        subscription: '',
        scalar: '',
        object: '',
        union: '',
        interface: '',
        enum: '',
      },
    },
    {
      input: 'minimal',
      expected: {
        query: '*',
        mutation: '*',
        subscription: '*',
        scalar: '*',
        object: '',
        union: '',
        interface: '',
        enum: '',
      },
    },
    {
      input: 'recommended',
      expected: {
        query: '*',
        mutation: '*',
        subscription: '*',
        scalar: '*',
        object: '*',
        union: '',
        interface: '',
        enum: '',
      },
    },
    {
      input: 'all',
      expected: {
        query: '*',
        mutation: '*',
        subscription: '*',
        scalar: '*',
        object: '*',
        union: '*',
        interface: '*',
        enum: '*',
      },
    },
  ])(
    'correctly returns the parsed "$input" resolverGeneration object',
    ({ input, expected }) => {
      const result = validatePresetConfig({ resolverGeneration: input });

      expect(result.resolverGeneration).toEqual(expected);
    }
  );

  it('correctly returns provided resolverGeneration object', () => {
    const result = validatePresetConfig({
      resolverGeneration: {
        query: '*.Query.*',
        mutation: '!*.Mutation.*',
      },
    });

    expect(result.resolverGeneration).toEqual({
      query: '*.Query.*',
      mutation: '!*.Mutation.*',
      subscription: '',
      scalar: '',
      object: '',
      union: '',
      interface: '',
      enum: '',
    });
  });

  it('throws if invalid resolverGeneration is provided', () => {
    expect(() =>
      validatePresetConfig({ resolverGeneration: 'omg_what_is_this' })
    ).toThrow(
      'Validation - presetConfig.resolverGeneration must be an object, "disabled", "recommended", "minimal" or "all" (default is "recommended")'
    );
  });

  describe('validatePresetConfig - mergeSchema', () => {
    it.each<{
      input: RawPresetConfig['mergeSchema'];
      expected: ParsedPresetConfig['mergeSchema'];
    }>([
      {
        input: false,
        expected: false,
      },
      {
        input: true,
        expected: {
          path: 'schema.generated.graphqls',
          config: {},
        },
      },
      {
        input: 'schema.gen.gql',
        expected: {
          path: 'schema.gen.gql',
          config: {},
        },
      },
      {
        input: {
          path: 'omg.graphql',
          config: { sort: true },
        },
        expected: {
          path: 'omg.graphql',
          config: { sort: true },
        },
      },
    ])(
      'correctly returns the parsed "$input" resolverGeneration object',
      ({ input, expected }) => {
        const result = validatePresetConfig({ mergeSchema: input });

        expect(result.mergeSchema).toEqual(expected);
      }
    );
  });
});
