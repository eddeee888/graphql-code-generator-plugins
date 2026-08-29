import { createHash } from 'crypto';
import type { Project, SourceFile } from 'ts-morph';
import type { TypeMappersMap } from '../parseTypeMappers/index.js';
import type { GraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate.js';

type Cache = {
  get(key: string): GraphQLObjectTypeResolversToGenerate | undefined;
  set(
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

/**
 * Maximum number of entries kept in the cache. Each entry corresponds to one
 * distinct `(mode + types file + mappers)` state. A long watch session can visit
 * many such states, and separate `generates` targets each contribute their own
 * key, so we keep the N most-recently-used entries and evict the rest to bound
 * memory. N is comfortably larger than the number of concurrent targets a single
 * codegen run has.
 */
const MAX_CACHE_ENTRIES = 50;

export const createCache = (): Cache => {
  /**
   * Cache of previous runs' results, so the ts-morph type-checker work is skipped
   * when nothing it depends on has changed (e.g. a watch re-run where only a
   * resolver implementation file was edited). The result is a pure function of
   * - `mode`
   * - the generated types file
   * - the mapper file contents
   *
   * so the key is a hash of exactly those. Reused only on an exact key match, so
   * it can never go stale. A `Map` is used because its insertion order gives a
   * cheap LRU: the first key is the least-recently-used.
   */
  const resultCache = new Map<string, GraphQLObjectTypeResolversToGenerate>();

  return {
    get(key) {
      const result = resultCache.get(key);
      if (result === undefined) {
        return undefined;
      }

      // Mark as most-recently-used by re-inserting at the end.
      resultCache.delete(key);
      resultCache.set(key, result);

      return structuredClone(result);
    },
    /**
     * set
     * Create a structured clone in the cache
     * because downstream can update the value object
     */
    set(key, value) {
      // Re-insert so this key becomes the most-recently-used entry.
      resultCache.delete(key);
      resultCache.set(key, structuredClone(value));

      // Evict least-recently-used entries beyond the cap.
      while (resultCache.size > MAX_CACHE_ENTRIES) {
        const lruKey = resultCache.keys().next().value;
        if (lruKey === undefined) {
          break;
        }
        resultCache.delete(lruKey);
      }

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
