import { createHash } from 'crypto';
import type { Project, SourceFile } from 'ts-morph';
import type { TypeMappersMap } from '../parseTypeMappers/index.js';
import type { GraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate.js';

type Cache = {
  get(key: string): GraphQLObjectTypeResolversToGenerate | undefined;
  updateCache(
    key: string,
    value: GraphQLObjectTypeResolversToGenerate
  ): GraphQLObjectTypeResolversToGenerate;
  createCacheKey({
    mode,
    typesSourceFile,
    typeMappersMap,
    tsMorphProject,
  }: {
    mode: string;
    typesSourceFile: SourceFile;
    typeMappersMap: TypeMappersMap;
    tsMorphProject: Project;
  }): string;
};

export const createCache = (): Cache => {
  /**
   * Cache of the previous run's result, so the ts-morph type-checker work is
   * skipped when nothing it depends on has changed (e.g. a watch re-run where only
   * a resolver implementation file was edited). This function is a pure function of
   * - `mode`
   * - the generated types file
   * - the mapper file contents
   *
   * so the key is a hash of exactly those. Persisted at module scope;
   * reused only on an exact key match, so it can never go stale.
   */
  const resultCache: Record<string, GraphQLObjectTypeResolversToGenerate> = {};

  return {
    get(key) {
      const result = resultCache[key];
      if (!result) {
        return undefined;
      }

      return structuredClone(result);
    },
    /**
     * updateCache
     * Create a structured clone in the cache
     * because downstream can update the value object
     */
    updateCache(key, value) {
      resultCache[key] = structuredClone(value);
      return value;
    },

    /**
     * Hash of everything the result depends on: the mode, the generated types file
     * text (captures all schema-derived inputs), and each mapper file's contents.
     * Same key => same result.
     */
    createCacheKey({ mode, typesSourceFile, typeMappersMap, tsMorphProject }) {
      const hash = createHash('sha1');
      hash.update(mode);
      hash.update(' ');
      hash.update(typesSourceFile.getFullText());

      // The parsed mapper map (which schema type -> which mapper declaration) depends
      // on config such as mappersSuffix, so hash it too: mapper file text alone would
      // not distinguish two configs that read the same files differently.
      hash.update(' ');
      hash.update(
        JSON.stringify(
          Object.entries(typeMappersMap).sort(([a], [b]) => (a < b ? -1 : 1))
        )
      );

      const mapperFilenames = [
        ...new Set(Object.values(typeMappersMap).map((m) => m.mapper.filename)),
      ].sort();
      for (const filename of mapperFilenames) {
        const sourceFile = tsMorphProject.getSourceFile(filename);
        hash.update(' ');
        hash.update(filename);
        hash.update(' ');
        hash.update(sourceFile ? sourceFile.getFullText() : '');
      }

      return hash.digest('hex');
    },
  } satisfies Cache;
};
