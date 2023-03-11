import * as path from 'path';
import { StandardFile } from '../generateResolverFiles';
import type { ParseSourcesResult } from '../parseSources';
import { isWhitelistedModule } from '../utils/isWhitelistedModule';
import { generateTypeDefsContent } from './generateTypeDefsContent';

interface GenerateTypeDefsFilesParams {
  baseOutputDir: string;
  typeDefsFilePath: string;
  typeDefsFileMode: 'merged' | 'modules';
  sourceMap: ParseSourcesResult['sourceMap'];
  whitelistedModules: string[];
  blacklistedModules: string[];
}

export const generateTypeDefsFiles = ({
  baseOutputDir,
  typeDefsFilePath,
  typeDefsFileMode,
  sourceMap,
  blacklistedModules,
  whitelistedModules,
}: GenerateTypeDefsFilesParams): Record<string, StandardFile> => {
  const filesContent: Record<string, string> = {};
  Object.values(sourceMap).forEach(({ moduleName, source, sourcePath }) => {
    const isWhitelisted = isWhitelistedModule({
      moduleName,
      whitelistedModules,
      blacklistedModules,
    });

    if (isWhitelisted) {
      // If mode is "modules", create a typeDefs in each module
      // If mode is "merged", create a typeDefs file at baseOutputDir
      const filePath =
        typeDefsFileMode === 'modules'
          ? path.posix.join(sourcePath.dir, typeDefsFilePath)
          : path.posix.join(baseOutputDir, typeDefsFilePath);

      if (!filesContent[filePath]) {
        filesContent[filePath] = '';
      }
      filesContent[filePath] += `${source.rawSDL}\n`;
    }
  });

  const result: Record<string, StandardFile> = {};
  Object.entries(filesContent).forEach(([filePath, content]) => {
    result[filePath] = {
      __filetype: 'file',
      content: generateTypeDefsContent({ mergedSDL: content }),
      mainImportIdentifier: 'typeDefs',
    };
  });

  return result;
};
