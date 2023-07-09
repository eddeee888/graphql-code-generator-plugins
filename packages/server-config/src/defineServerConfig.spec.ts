import { type ServerConfig, defineServerConfig } from './defineServerConfig';

const defaultServerConfig: ServerConfig = {
  enumsAsTypes: true,
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

describe('defineServerConfig', () => {
  it('returns default server config correctly', () => {
    const result = defineServerConfig();

    expect(result).toEqual(defaultServerConfig);
  });

  it('returns config with overriden root-level options correctly', () => {
    const result = defineServerConfig({
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
    const result = defineServerConfig({
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
    expect(() =>
      defineServerConfig({
        scalars: 'test',
      })
    ).toThrowError(
      '[@eddeee888/gcg-server-config] ERROR: defineServerConfig does not support config.scalars string'
    );
  });
});
