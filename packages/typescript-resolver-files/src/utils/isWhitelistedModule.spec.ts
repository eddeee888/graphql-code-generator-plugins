import { isWhitelistedModule } from './isWhitelistedModule';

describe('isWhitelistedModule()', () => {
  it.each([
    {
      description:
        'is whitelisted if whitelistedModules and blacklistedModules are empty arrays',
      moduleName: 'moduleA',
      whitelistedModules: [],
      blacklistedModules: [],
      result: true,
    },
    {
      description: 'is whitelisted if exists in whitelistedModules',
      moduleName: 'moduleA',
      whitelistedModules: ['moduleA', 'moduleB'],
      blacklistedModules: [],
      result: true,
    },
    {
      description: 'is NOT whitelisted if not exists in whitelistedModules',
      moduleName: 'moduleA',
      whitelistedModules: ['moduleB', 'moduleC'],
      blacklistedModules: [],
      result: false,
    },
    {
      description:
        'is whitelisted if exists in whitelistedModules but not blacklistedModules',
      moduleName: 'moduleB',
      whitelistedModules: ['moduleB', 'moduleC'],
      blacklistedModules: ['moduleA'],
      result: true,
    },
    {
      description:
        'is whitelisted if whitelistedModules is empty but does not exist in blacklistedModules',
      moduleName: 'moduleA',
      whitelistedModules: [],
      blacklistedModules: ['moduleB'],
      result: true,
    },
    {
      description:
        'is NOT whitelisted if exists in both whitelistedModules and blacklistedModules',
      moduleName: 'moduleA',
      whitelistedModules: ['moduleA', 'moduleB', 'moduleC'],
      blacklistedModules: ['moduleA'],
      result: false,
    },
    {
      description:
        'is NOT whitelisted if whitelistedModules is empty and exists in blacklistedModules',
      moduleName: 'moduleA',
      whitelistedModules: [],
      blacklistedModules: ['moduleA'],
      result: false,
    },
  ])(
    '$description',
    ({ moduleName, blacklistedModules, whitelistedModules, result }) => {
      expect(result).toEqual(
        isWhitelistedModule({
          moduleName,
          whitelistedModules,
          blacklistedModules,
        })
      );
    }
  );
});
