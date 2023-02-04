import * as path from 'path';

export * from './parseLocationForWhitelistedModule';
export * from './isNativeNamedType';
export * from './isRootObjectType';
export * from './printImportLine';

function slash(path:string): string {
  const isExtendedLengthPath: boolean = /^\\\\\?\\/.test(path);

  if(isExtendedLengthPath) return path;

  return path.replace(/\\/g,'/');
}

// TODO: break the functions below this line into smaller files
// -----------
export const relativeModulePath = (from: string, to: string): string => {
  const rawPath = slash(path.relative(from, to));
  return normalizeRelativePath(rawPath);
};

export const normalizeRelativePath = (path: string): string => {
  if (!path.startsWith('../') || !path.startsWith('./')) {
    return `./${path}`;
  }
  return path;
};
