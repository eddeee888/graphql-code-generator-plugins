import { Project, SyntaxKind } from 'ts-morph';
import { getGraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate.js';
import type { TypeMappersMap } from '../parseTypeMappers/index.js';
import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema/index.js';
import type { GeneratedTypesFileMeta } from '../generateResolverFiles/index.js';

describe('getGraphQLObjectTypeResolversToGenerate', () => {
  // https://github.com/eddeee888/graphql-code-generator-plugins/issues/446
  it('does not treat a mapper with an unresolvable type as having zero fields in "smart" mode', () => {
    const project = new Project({ skipAddingFilesFromTsConfig: true });

    const typesSourceFile = project.createSourceFile(
      '/path/to/types.generated.ts',
      `
      export type UserResolvers = {
        id: string;
        name: string;
      };`
    );

    // `Foo` is imported from a module that doesn't exist (e.g. not generated yet),
    // so `UserTypeMapper`'s type resolves to a TS error type.
    project.createSourceFile(
      '/path/to/mappers.ts',
      `
      import type { Foo } from './does-not-exist';
      export type UserTypeMapper = Foo;`
    );

    const typeMappersMap: TypeMappersMap = {
      User: {
        schemaType: 'User',
        mapper: {
          name: 'UserTypeMapper',
          filename: '/path/to/mappers.ts',
          kind: SyntaxKind.TypeAliasDeclaration,
        },
        configImportPath: './mappers#UserTypeMapper',
      },
    };

    const userDefinedSchemaObjectTypeMap = {
      User: {},
    } as unknown as ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap']['object'];

    const generatedTypesFileMeta = {
      generatedResolverTypes: {
        userDefined: {
          User: { name: 'UserResolvers' },
        },
      },
    } as unknown as GeneratedTypesFileMeta;

    const result = getGraphQLObjectTypeResolversToGenerate({
      mode: 'smart',
      tsMorphProject: project,
      typesSourceFile,
      typeMappersMap,
      userDefinedSchemaObjectTypeMap,
      generatedTypesFileMeta,
    });

    // The mapper's real fields are unknown because `Foo` couldn't be resolved -
    // this must NOT be treated the same as "the mapper genuinely has no fields",
    // which is what currently happens and causes a "resolver is required because
    // ... does not [exist on the mapper]" stub to be generated for every field,
    // overwriting hand-maintained resolvers.
    expect(result).toEqual({});
  });
});
