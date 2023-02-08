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
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };
      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };
      export type UserRole = 'ADMIN' | 'USER';`
    );

    const userDeclarationNode = sourceFile.getFirstDescendant(
      (node) => Node.isTypeAliasDeclaration(node) && node.getName() === 'User'
    );

    expect(getNodePropertyMap(userDeclarationNode)).toEqual({
      __typename: {
        name: '__typename',
      },
      accountGitHub: {
        name: 'accountGitHub',
      },
      accountGoogle: {
        name: 'accountGoogle',
      },
      createdAt: {
        name: 'createdAt',
      },
      fullName: {
        name: 'fullName',
      },
      id: {
        name: 'id',
      },
      role: {
        name: 'role',
      },
    });
  });
});
