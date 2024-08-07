import { Project } from 'ts-morph';
import { getImportStatementWithExpectedNamedImport } from './getImportStatementWithExpectedNamedImport';

describe('getImportStatementWithExpectedNamedImport', () => {
  it('returns import statement if found for objectType files', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/pathto/User.ts',
      `
      import { UserResolvers } from '../types.generated.ts';
      export const User: UserResolvers = {
        id: ({ id }) => id,
      }
      `
    );

    const result = getImportStatementWithExpectedNamedImport(sourceFile, {
      __filetype: 'objectType',
      content: '',
      filesystem: {
        type: 'virtual',
        contentUpdated: false,
      },
      mainImportIdentifier: 'User',
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
      },
    });

    expect(result.importDeclaration?.getText()).toBe(
      `import { UserResolvers } from '../types.generated.ts';`
    );
  });

  it('returns import statement if found for rootObjectTypeFieldResolver files', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/pathto/Query/me.ts',
      `
      import { QueryResolvers } from '../types.generated.ts';
      export const me: QueryResolvers['me'] = () => {};
      `
    );

    const result = getImportStatementWithExpectedNamedImport(sourceFile, {
      __filetype: 'rootObjectTypeFieldResolver',
      content: '',
      filesystem: {
        type: 'virtual',
        contentUpdated: false,
      },
      mainImportIdentifier: 'user',
      meta: {
        belongsToRootObject: 'Query',
        moduleName: 'user',
        normalizedResolverName: {
          base: 'Query.user',
          withModule: 'user.Query.user',
        },
        relativePathFromBaseToModule: ['user'],
        resolverType: {
          baseImport: 'QueryResolvers',
          resolver: "QueryResolvers['me']",
          final: "NonNullable<QueryResolvers['me']>",
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
      },
    });

    expect(result.importDeclaration?.getText()).toBe(
      `import { QueryResolvers } from '../types.generated.ts';`
    );
  });

  it('returns import statement if found for interfaceResolver files', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/pathto/User.ts',
      `
      import { NodeResolvers } from '../types.generated.ts';
      export const Node: NodeResolvers = {
      }
      `
    );

    const result = getImportStatementWithExpectedNamedImport(sourceFile, {
      __filetype: 'interfaceResolver',
      content: '',
      filesystem: {
        type: 'virtual',
        contentUpdated: false,
      },
      mainImportIdentifier: 'user',
      meta: {
        moduleName: 'user',
        normalizedResolverName: {
          base: 'Query.user',
          withModule: 'user.Query.user',
        },
        relativePathFromBaseToModule: ['user'],
        resolverType: {
          baseImport: 'NodeResolvers',
          final: 'NodeResolvers',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
      },
    });

    expect(result.importDeclaration?.getText()).toBe(
      `import { NodeResolvers } from '../types.generated.ts';`
    );
  });
});
