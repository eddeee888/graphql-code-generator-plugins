import * as path from 'path';
import { RunConfig, RunResult } from '../types';
import { relativeModulePath } from '../utils';

export const validateAndPrepareForGraphQLType = (
  { type, outputDir }: { type: { name: string }; outputDir: string },
  { resolverTypesPath }: RunConfig,
  runResult: RunResult
): {
  fieldFilePath: string;
  typeName: string;
  resolverTypeName: string;
  relativeModulePath: string;
} => {
  const typeName = type.name;

  const fieldFilePath = path.join(outputDir, `${typeName}.ts`);
  if (runResult.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  runResult.dirs[outputDir] = true;

  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin

  return {
    typeName,
    resolverTypeName,
    fieldFilePath,
    relativeModulePath: relativeModulePath(outputDir, resolverTypesPath),
  };
};
