import * as path from 'path';
import type { RootObjectType } from './types';

export const printImportModule = (moduleName: string) => {
  if (moduleName.endsWith('.ts')) {
    return moduleName.split('.').slice(0, -1).join('.');
  }
  return moduleName;
};

export const isRootObjectType = (
  typeName: string
): typeName is RootObjectType =>
  typeName === 'Query' ||
  typeName === 'Mutation' ||
  typeName === 'Subscription';

export const relativeModulePath = (from: string, to: string) => {
  const rawPath = path.relative(from, to);

  if (!rawPath.startsWith('../') || !rawPath.startsWith('./')) {
    return `./${rawPath}`;
  }

  return rawPath;
};
