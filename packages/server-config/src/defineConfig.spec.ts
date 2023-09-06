import { type ServerConfig, defineConfig } from './defineConfig';

const defaultServerConfig: ServerConfig = {
  enumsAsTypes: true,
  maybeValue: 'T | null | undefined',
  optionalResolveType: true,
  resolversNonOptionalTypename: {
    interfaceImplementingType: true,
    unionMember: true,
  },
  scalars: {
    ID: {
      input: 'string',
      output: 'string | number',
    },
  },
};

describe('defineConfig', () => {
  it('returns default server config correctly', () => {
    const result = defineConfig();

    expect(result).toEqual(defaultServerConfig);
  });

  it('returns config with overriden root-level options correctly', () => {
    const result = defineConfig({
      enumsAsTypes: false,
      contextType: 'Test',
    });

    expect(result).toEqual({
      ...defaultServerConfig,
      enumsAsTypes: false,
      contextType: 'Test',
    });
  });

  it('returns config with overriden `scalars` correctly', () => {
    const result = defineConfig({
      scalars: {
        ID: 'string',
        Date: 'Date',
      },
    });

    expect(result).toEqual({
      ...defaultServerConfig,
      scalars: {
        ID: 'string',
        Date: 'Date',
      },
    });
  });

  it('throws if a string is used for `scalars`', () => {
    const result = defineConfig({
      scalars: 'test',
    });

    expect(result).toEqual({
      ...defaultServerConfig,
      scalars: 'test',
    });
  });
});
