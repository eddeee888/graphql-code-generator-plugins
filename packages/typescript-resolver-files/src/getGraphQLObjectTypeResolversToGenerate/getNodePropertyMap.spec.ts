import { Project, Node } from 'ts-morph';
import { getNodePropertyMap } from './getNodePropertyMap';

describe('getNodePropertyMap', () => {
  it('correctly resolves property map of a typical types.generated.ts', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/path/to/types.generated.ts',
      `
      export type Maybe<T> = T | null;
      export type Scalars = {
        ID: { input: string; output: string; }
        String: { input: string; output: string; }
        Boolean: { input: boolean; output: boolean; }
        Int: { input: number; output: number; }
        Float: { input: number; output: number; }
        DateTime: { input: Date; output: Date | string | number; }
      };
      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']['output']>;
        accountGoogle?: Maybe<Scalars['String']['output']>;
        createdAt: Scalars['DateTime']['output'];
        fullName: Scalars['String']['output'];
        id: Scalars['ID']['output'];
        role: UserRole;
      };
      export type UserRole = 'ADMIN' | 'USER';`
    );

    const userDeclarationNode = sourceFile.getFirstDescendant(
      (node) => Node.isTypeAliasDeclaration(node) && node.getName() === 'User'
    );

    const nodePropertyMap = getNodePropertyMap({
      tsMorphProject: project,
      node: userDeclarationNode,
    });

    expect(nodePropertyMap.__typename.name).toBe('__typename');
    expect(nodePropertyMap.__typename.type.getText()).toBe('"User"');

    expect(nodePropertyMap.accountGitHub.name).toBe('accountGitHub');
    expect(nodePropertyMap.accountGitHub.type.getText()).toBe('string');

    expect(nodePropertyMap.accountGoogle.name).toBe('accountGoogle');
    expect(nodePropertyMap.accountGoogle.type.getText()).toBe('string');

    expect(nodePropertyMap.createdAt.name).toBe('createdAt');
    expect(nodePropertyMap.createdAt.type.getText()).toBe(
      'string | number | Date'
    );

    expect(nodePropertyMap.fullName.name).toBe('fullName');
    expect(nodePropertyMap.fullName.type.getText()).toBe('string');

    expect(nodePropertyMap.id.name).toBe('id');
    expect(nodePropertyMap.id.type.getText()).toBe('string');

    expect(nodePropertyMap.role.name).toBe('role');
    expect(nodePropertyMap.role.type.getText()).toBe(
      'import("/path/to/types.generated").UserRole'
    );
  });

  it('correctly resolves property map a class', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/path/to/types.ts',
      `
      export type UserRole = 'ADMIN' | 'USER';
      export class User {
        #_id: string;
        private word: string;
        protected word2: string;
        
        name: string;
        role: UserRole;

        get id(): string {
          return this.#_id;
        }
      }`
    );

    const userDeclarationNode = sourceFile.getFirstDescendant(
      (node) => Node.isClassDeclaration(node) && node.getName() === 'User'
    );

    const nodePropertyMap = getNodePropertyMap({
      tsMorphProject: project,
      node: userDeclarationNode,
    });

    expect(nodePropertyMap._id).toBe(undefined);
    expect(nodePropertyMap.id).toBe(undefined);
    expect(nodePropertyMap.word).toBe(undefined);
    expect(nodePropertyMap.word2).toBe(undefined);

    expect(nodePropertyMap.name.name).toBe('name');
    expect(nodePropertyMap.name.type.getText()).toBe('string');

    expect(nodePropertyMap.role.name).toBe('role');
    expect(nodePropertyMap.role.type.getText()).toBe(
      'import("/path/to/types").UserRole'
    );
  });
});
