import { Project } from 'ts-morph';
import { getVariableStatementWithExpectedIdentifier } from './getVariableStatementWithExpectedIdentifier';

describe('getVariableStatementWithExpectedIdentifier()', () => {
  it('gets VariableStatement node and isExported=true if found', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/pathto/User.ts',
      `
      import {} from '../types.generated.ts';

      const DontLookAtThisNode = {};

      export const User: UserResolvers = {
        id: ({ id }) => id,
      }

      const DontLookAtThisNodeEither = {};
      `
    );
    const result = getVariableStatementWithExpectedIdentifier(sourceFile, {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      meta: {
        moduleName: 'user',
        variableStatement: '',
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
      },
    });

    expect(result.isExported).toBe(true);
    expect(result.variableStatement?.getText()).toMatchInlineSnapshot(`
      "export const User: UserResolvers = {
              id: ({ id }) => id,
            }"
    `);
  });

  it('returns variableStatement=undefined and isExported=false if NOT found', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/pathto/User.ts',
      `
      import {} from '../types.generated.ts';

      const DontLookAtThisNode = {};

      export const Userssss: UserResolvers = {
        id: ({ id }) => id,
      }

      const DontLookAtThisNodeEither = {};
      `
    );
    const result = getVariableStatementWithExpectedIdentifier(sourceFile, {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      meta: {
        moduleName: 'user',
        variableStatement: '',
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
      },
    });

    expect(result.isExported).toBe(false);
    expect(result.variableStatement).toBeUndefined();
  });

  it('returns variableStatement=undefined and isExported=true if found but not exported', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/pathto/User.ts',
      `
      import {} from '../types.generated.ts';

      const DontLookAtThisNode = {};

      const User: UserResolvers = {
        id: ({ id }) => id,
      }

      const DontLookAtThisNodeEither = {};
      `
    );
    const result = getVariableStatementWithExpectedIdentifier(sourceFile, {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      meta: {
        moduleName: 'user',
        variableStatement: '',
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
      },
    });

    expect(result.isExported).toBe(false);
    expect(result.variableStatement?.getText()).toMatchInlineSnapshot(`
      "const User: UserResolvers = {
              id: ({ id }) => id,
            }"
    `);
  });
});
