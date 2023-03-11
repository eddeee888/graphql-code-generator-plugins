import * as path from 'path';

/**
 * It is process.cwd() but normalised for all OS
 */
export const cwd = (): string => {
  return process.cwd().split(path.sep).join(path.posix.sep);
};
