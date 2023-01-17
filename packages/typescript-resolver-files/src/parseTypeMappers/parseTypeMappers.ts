import * as path from 'path';
import * as fs from 'fs';
import { Project } from 'ts-morph';
import type { ParseSourcesResult } from '../parseSources';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

export interface ParseTypeMappersParams {
  sourceMap: ParseSourcesResult['sourceMap'];
  resolverTypesPath: string;
  typeMappersFileExtension: string;
  typeMappersSuffix: string;
}

export interface TypeMapperDetails {
  schemaType: string;
  typeMapperName: string;
  configImportPath: string;
}

export type TypeMappersMap = Record<string, TypeMapperDetails>;

export const parseTypeMappers = ({
  sourceMap,
  resolverTypesPath,
  typeMappersFileExtension,
  typeMappersSuffix,
}: ParseTypeMappersParams): TypeMappersMap => {
  const result = Object.entries(sourceMap).reduce<TypeMappersMap>(
    (res, [_, { sourcePath }]) => {
      const typeMapperFilePath = path.join(
        sourcePath.dir,
        `${sourcePath.name}${typeMappersFileExtension}`
      );

      if (!fs.existsSync(typeMapperFilePath)) {
        return res;
      }

      const project = new Project();
      const [typeMappersSourceFile] =
        project.addSourceFilesAtPaths(typeMapperFilePath);

      collectTypeMappersFromSourceFile(
        { typeMappersSourceFile, typeMappersSuffix, resolverTypesPath },
        res
      );

      return res;
    },
    {}
  );
  return result;
};
