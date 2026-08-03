import { Project, SyntaxKind } from 'ts-morph';
import { getGraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate';
import { logger } from '../utils';
import type { TypeMappersMap } from '../parseTypeMappers';
import type { GeneratedTypesFileMeta } from '../generateResolverFiles';
import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';

const MAPPERS_PATH = '/path/to/schema.mappers.ts';
const TYPES_PATH = '/path/to/types.generated.ts';

const setup = ({
  mapperContent,
}: {
  mapperContent: string;
}): {
  tsMorphProject: Project;
  typesSourceFile: ReturnType<Project['createSourceFile']>;
  typeMappersMap: TypeMappersMap;
  userDefinedSchemaObjectTypeMap: ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap']['object'];
  generatedTypesFileMeta: GeneratedTypesFileMeta;
} => {
  const tsMorphProject = new Project({ skipAddingFilesFromTsConfig: true });

  // A stand-in for the generated `types.generated.ts`: the `User` type has two
  // fields, so if `UserMapper` is treated as empty, both would be stubbed.
  const typesSourceFile = tsMorphProject.createSourceFile(
    TYPES_PATH,
    `export type UserResolvers = {
      id?: unknown;
      name?: unknown;
    };`
  );

  tsMorphProject.createSourceFile(MAPPERS_PATH, mapperContent);

  const typeMappersMap: TypeMappersMap = {
    User: {
      schemaType: 'User',
      mapper: {
        name: 'UserMapper',
        filename: MAPPERS_PATH,
        kind: SyntaxKind.TypeAliasDeclaration,
      },
      configImportPath: '',
    },
  };

  const generatedTypesFileMeta = {
    generatedResolverTypes: {
      resolversMap: { name: 'Resolvers' },
      userDefined: { User: { name: 'UserResolvers' } },
    },
  } as unknown as GeneratedTypesFileMeta;

  const userDefinedSchemaObjectTypeMap = {
    User: {},
  } as unknown as ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap']['object'];

  return {
    tsMorphProject,
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

  // Regression test for https://github.com/eddeee888/graphql-code-generator-plugins/issues/446
  it.each(['smart', 'fast'] as const)(
    'skips stub generation and warns when a mapper type is unresolvable (mode: %s)',
    (mode) => {
      const warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => {
        // noop
      });
      const {
        tsMorphProject,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      } = setup({
        mapperContent: `import type { User } from './does-not-exist';
        export type UserMapper = User;`,
      });

      const result = getGraphQLObjectTypeResolversToGenerate({
        mode,
        tsMorphProject,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      });

      // No stubs injected: the hand-maintained resolver file is left untouched.
      expect(result.User).toBeUndefined();

      // The real problem (unresolved import) is surfaced via a warning.
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy.mock.calls[0][0]).toContain('UserMapper');
    }
  );

  it.each(['smart', 'fast'] as const)(
    'still stubs fields for a mapper that genuinely has no matching fields (mode: %s)',
    (mode) => {
      const warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => {
        // noop
      });
      const {
        tsMorphProject,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      } = setup({ mapperContent: `export type UserMapper = {};` });

      const result = getGraphQLObjectTypeResolversToGenerate({
        mode,
        tsMorphProject,
        typesSourceFile,
        typeMappersMap,
        userDefinedSchemaObjectTypeMap,
        generatedTypesFileMeta,
      });

      // A genuinely empty mapper still triggers stub generation (unchanged behavior).
      expect(result.User).toBeDefined();
      expect(result.User.id).toBeDefined();
      expect(result.User.name).toBeDefined();
      expect(warnSpy).not.toHaveBeenCalled();
    }
  );
});
