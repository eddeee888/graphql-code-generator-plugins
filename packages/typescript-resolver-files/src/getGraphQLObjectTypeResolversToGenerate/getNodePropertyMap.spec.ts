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

    expect(nodePropertyMap.accountGitHub.name).toBe('accountGitHub');

    expect(nodePropertyMap.accountGoogle.name).toBe('accountGoogle');

    expect(nodePropertyMap.createdAt.name).toBe('createdAt');

    expect(nodePropertyMap.fullName.name).toBe('fullName');

    expect(nodePropertyMap.id.name).toBe('id');

    expect(nodePropertyMap.role.name).toBe('role');
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

    expect(nodePropertyMap.role.name).toBe('role');
  });

  it('correctly resolves property map a type alias mapper', () => {
    const project = new Project();
    const sourceFile = project.createSourceFile(
      '/path/to/mappers.ts',
      `
      type UserRole = 'Admin' | 'User';
      export type UserMapper = {
        id: number;
        name: string;
        role: UserRole;
      }`
    );

    const node = sourceFile.getFirstDescendant(
      (descendant) =>
        Node.isTypeAliasDeclaration(descendant) &&
        descendant.getName() === 'UserMapper'
    );

    const nodePropertyMap = getNodePropertyMap({
      tsMorphProject: project,
      node,
    });

    expect(nodePropertyMap.id.name).toBe('id');

    expect(nodePropertyMap.name.name).toBe('name');

    expect(nodePropertyMap.role.name).toBe('role');
  });
});
