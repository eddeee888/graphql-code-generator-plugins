import * as path from 'path';
import * as fs from 'fs';
import { type ProjectOptions, Project } from 'ts-morph';
import type { ParseSourcesResult } from '../parseSources';
import type { NodePropertyMap } from '../utils';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

export interface ParseTypeMappersParams {
  sourceMap: ParseSourcesResult['sourceMap'];
  resolverTypesPath: string;
  typeMappersFileExtension: string;
  typeMappersSuffix: string;
  tsMorphProjectOptions: ProjectOptions;
}

export interface TypeMapperDetails {
  schemaType: string;
  typeMapperName: string;
  typeMapperPropertyMap: NodePropertyMap;
  configImportPath: string;
}

export type TypeMappersMap = Record<string, TypeMapperDetails>;

export const parseTypeMappers = ({
  sourceMap,
  resolverTypesPath,
  typeMappersFileExtension,
  typeMappersSuffix,
  tsMorphProjectOptions,
}: ParseTypeMappersParams): TypeMappersMap => {
  const project = new Project(tsMorphProjectOptions);

  const result = Object.entries(sourceMap).reduce<TypeMappersMap>(
    (res, [_, { sourcePath }]) => {
      const typeMapperFilePath = path.join(
        sourcePath.dir,
        `${sourcePath.name}${typeMappersFileExtension}`
      );

      if (!fs.existsSync(typeMapperFilePath)) {
        return res;
      }

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
