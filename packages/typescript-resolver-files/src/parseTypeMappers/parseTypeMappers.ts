import * as path from 'path';
import { Project } from 'ts-morph';
import type { ParseSourcesResult } from '../parseSources';
import type { NodePropertyMap } from '../utils';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

export interface ParseTypeMappersParams {
  sourceMap: ParseSourcesResult['sourceMap'];
  resolverTypesPath: string;
  typeMappersFileExtension: string;
  typeMappersSuffix: string;
  tsMorphProject: Project;
  shouldCollectPropertyMap: boolean;
  emitLegacyCommonJSImports: boolean;
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
  tsMorphProject,
  shouldCollectPropertyMap,
  emitLegacyCommonJSImports
}: ParseTypeMappersParams): TypeMappersMap => {
  const result = Object.entries(sourceMap).reduce<TypeMappersMap>(
    (res, [_, { sourcePath }]) => {
      const typeMapperFilePath = path.posix.join(
        sourcePath.dir,
        `${sourcePath.name}${typeMappersFileExtension}`
      );

      const typeMappersSourceFile =
        tsMorphProject.addSourceFileAtPathIfExists(typeMapperFilePath);

      if (!typeMappersSourceFile) {
        return res;
      }

      collectTypeMappersFromSourceFile(
        {
          typeMappersSourceFile,
          typeMappersSuffix,
          resolverTypesPath,
          shouldCollectPropertyMap,
          emitLegacyCommonJSImports
        },
        res
      );

      return res;
    },
    {}
  );
  return result;
};
