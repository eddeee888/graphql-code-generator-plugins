import * as path from 'path';
import { normalizeRelativePath } from './normalizeRelativePath';

export const relativeModulePath = (from: string, to: string): string => {
  const rawPath = path.posix.relative(from, to);
  return normalizeRelativePath(rawPath);
};
