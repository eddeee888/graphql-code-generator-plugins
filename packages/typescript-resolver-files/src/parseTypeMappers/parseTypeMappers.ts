import * as path from 'path';
import type { Project, SyntaxKind } from 'ts-morph';
import type { ParseSourcesResult } from '../parseSources';
import type {ImportExtension} from '../utils';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

export interface ParseTypeMappersParams {
  sourceMap: ParseSourcesResult['sourceMap'];
  resolverTypesPath: string;
  typeMappersRelativeTargetDir: string;
  typeMappersFileExtension: string;
  typeMappersSuffix: string;
  tsMorphProject: Project;
  emitLegacyCommonJSImports: boolean;
  importExtension: ImportExtension;
}

export interface TypeMapperDetails {
  schemaType: string;
  mapper: {
    name: string;
    filename: string; // e.g. /path/to/schema.mappers.ts
    kind:
      | SyntaxKind.InterfaceDeclaration
      | SyntaxKind.TypeAliasDeclaration
      | SyntaxKind.ExportSpecifier
      | SyntaxKind.ClassDeclaration;
  };
  configImportPath: string;
}

export type TypeMappersMap = Record<string, TypeMapperDetails>;

export const parseTypeMappers = ({
  sourceMap,
  resolverTypesPath,
  typeMappersRelativeTargetDir,
  typeMappersFileExtension,
  typeMappersSuffix,
  tsMorphProject,
  emitLegacyCommonJSImports,
  importExtension,
}: ParseTypeMappersParams): TypeMappersMap => {
  const result = Object.entries(sourceMap).reduce<TypeMappersMap>(
    (res, [_, { sourcePath }]) => {
      const typeMapperFilePath = path.posix.join(
        sourcePath.dir,
        typeMappersRelativeTargetDir,
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
          emitLegacyCommonJSImports,
          importExtension
        },
        res
      );

      return res;
    },
    {}
  );
  return result;
};
