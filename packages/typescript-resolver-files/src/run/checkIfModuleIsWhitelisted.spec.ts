import { checkIfModuleIsWhitelisted } from './checkIfModuleIsWhitelisted';

describe('checkIfModuleIsWhitelisted', () => {
  test.each([
    {
      description:
        'is whitelisted if whitelistedModules and blacklistedModules are empty arrays',
      moduleName: 'module1',
      whitelistedModules: [],
      blacklistedModules: [],
      isWhitelisted: true,
    },
    {
      description: 'is whitelisted if exists in whitelistedModules',
      moduleName: 'module2',
      whitelistedModules: ['module1', 'module2', 'module3'],
      blacklistedModules: [],
      isWhitelisted: true,
    },
    {
      description: 'is NOT whitelisted if not exists in whitelistedModules',
      moduleName: 'module2',
      whitelistedModules: ['module1', 'module3'],
      blacklistedModules: [],
      isWhitelisted: false,
    },
    {
      description:
        'is whitelisted if exists in whitelistedModules but not blacklistedModules',
      moduleName: 'module2',
      whitelistedModules: ['module1', 'module2', 'module3'],
      blacklistedModules: ['module1'],
      isWhitelisted: true,
    },
    {
      description:
        'is whitelisted if whitelistedModules is empty but does not exist in blacklistedModules',
      moduleName: 'module2',
      whitelistedModules: [],
      blacklistedModules: ['module1'],
      isWhitelisted: true,
    },
    {
      description:
        'is NOT whitelisted if exists in both whitelistedModules and blacklistedModules',
      moduleName: 'module1',
      whitelistedModules: ['module1', 'module2', 'module3'],
      blacklistedModules: ['module1'],
      isWhitelisted: false,
    },
    {
      description:
        'is NOT whitelisted if whitelistedModules is empty and exists in blacklistedModules',
      moduleName: 'module3',
      whitelistedModules: [],
      blacklistedModules: ['module3'],
      isWhitelisted: false,
    },
  ])(
    '$description',
    ({ moduleName, blacklistedModules, whitelistedModules, isWhitelisted }) =>
      expect(
        checkIfModuleIsWhitelisted({
          moduleName,
          blacklistedModules,
          whitelistedModules,
        })
      ).toBe(isWhitelisted)
  );
});
