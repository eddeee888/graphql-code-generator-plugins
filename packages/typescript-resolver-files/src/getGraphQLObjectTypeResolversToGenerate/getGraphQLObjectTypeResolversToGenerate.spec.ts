import { Project, SyntaxKind } from 'ts-morph';
import { getGraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate.js';
import { logger } from '../utils/index.js';
import type { TypeMappersMap } from '../parseTypeMappers/index.js';
import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema/index.js';
import type { GeneratedTypesFileMeta } from '../generateResolverFiles/index.js';

const setup = ({
  mapperContent,
}: {
  mapperContent: string;
}): {
  project: Project;
  typesSourceFile: ReturnType<Project['createSourceFile']>;
  typeMappersMap: TypeMappersMap;
  userDefinedSchemaObjectTypeMap: ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap']['object'];
  generatedTypesFileMeta: GeneratedTypesFileMeta;
} => {
  const project = new Project({ skipAddingFilesFromTsConfig: true });

  const typesSourceFile = project.createSourceFile(
    '/path/to/types.generated.ts',
    `
    export type UserResolvers = {
      id: string;
      name: string;
    };`
  );

  project.createSourceFile('/path/to/mappers.ts', mapperContent);

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

  return {
    project,
    typesSourceFile,
    typeMappersMap,
    userDefinedSchemaObjectTypeMap,
    generatedTypesFileMeta,
  };
};

describe('getGraphQLObjectTypeResolversToGenerate', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  // https://github.com/eddeee888/graphql-code-generator-plugins/issues/446
  it.each(['smart', 'fast'] as const)(
    'does not treat a mapper with an unresolvable type as having zero fields, and warns instead (mode: %s)',
    (mode) => {
      const warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => {
        // noop
      });

      // `Foo` is imported from a module that doesn't exist (e.g. not generated
      // yet), so `UserTypeMapper`'s type resolves to a TS error type.
      const {
        project,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      } = setup({
        mapperContent: `
        import type { Foo } from './does-not-exist';
        export type UserTypeMapper = Foo;`,
      });

      const result = getGraphQLObjectTypeResolversToGenerate({
        mode,
        tsMorphProject: project,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      });

      // The mapper's real fields are unknown because `Foo` couldn't be
      // resolved - this must NOT be treated the same as "the mapper genuinely
      // has no fields", which used to generate a "resolver is required
      // because ... does not [exist on the mapper]" stub for every field,
      // overwriting hand-maintained resolvers.
      expect(result).toEqual({});

      // The real problem - the unresolved import - is surfaced instead.
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy.mock.calls[0][0]).toContain('UserTypeMapper');
    }
  );

  it.each(['smart', 'fast'] as const)(
    'still generates stubs for a mapper that is genuinely empty, without warning (mode: %s)',
    (mode) => {
      const warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => {
        // noop
      });

      const {
        project,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      } = setup({
        mapperContent: `export type UserTypeMapper = {};`,
      });

      const result = getGraphQLObjectTypeResolversToGenerate({
        mode,
        tsMorphProject: project,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      });

      expect(result.User?.id).toBeDefined();
      expect(result.User?.name).toBeDefined();
      expect(warnSpy).not.toHaveBeenCalled();
    }
  );
});
