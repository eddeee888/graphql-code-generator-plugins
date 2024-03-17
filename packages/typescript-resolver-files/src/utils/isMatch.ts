import { type MinimatchOptions, minimatch } from 'minimatch';

/**
 * isMatch
 *
 * @description Wrapper function of minimatch to return true if `value` matches on of the `pattern`s
 */
export const isMatch = ({
  pattern,
  value,
}: {
  pattern: string | string[];
  value: string;
}): boolean => {
  const options: MinimatchOptions = {
    // `minimatch` matches filesystems whilst we want this function
    // to match object-like path pattern e.g. `book.Query.books`, `book.Book`,
    // so set `dot=true` to treat `.` the same as other characters
    dot: true,
  };

  if (typeof pattern === 'string') {
    const result = minimatch(value, pattern, options);
    return result;
  }

  for (const patternValue of pattern) {
    const result = minimatch(value, patternValue, options);
    if (result) {
      return true;
    }
  }

  console.log('*** END', false);
  return false;
};
