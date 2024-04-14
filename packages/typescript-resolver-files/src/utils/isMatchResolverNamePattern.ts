import micromatch from 'micromatch';

/**
 * @description Wrapper function to return true if `value` matches on of the `pattern`s
 */
export const isMatchResolverNamePattern = ({
  pattern,
  value,
}: {
  pattern: string | string[];
  value: string;
}): boolean => {
  const normalizedPatterns = typeof pattern === 'string' ? [pattern] : pattern;
  const nonEmptyNormalizedPatterns = normalizedPatterns.filter(Boolean);

  const matchedValues = micromatch([value], nonEmptyNormalizedPatterns, {
    // `micromatch` mainly matches filesystems whilst we want this function
    // to match object-like path pattern e.g.
    // - `book.Query.books`
    // - `book.Book`
    // - `.BookResult` (in the case where module mode are merged i.e. `mode=merged`)
    // so set `dot=true` to treat `.` the same as other characters
    dot: true,
  });

  return matchedValues.length > 0;
};
