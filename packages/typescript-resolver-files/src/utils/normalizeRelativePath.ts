export const normalizeRelativePath = (path: string): string => {
  if (!path.startsWith('../') || !path.startsWith('./')) {
    return `./${path}`;
  }
  return path;
};
