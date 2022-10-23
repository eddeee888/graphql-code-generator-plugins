import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { mkdir, writeFile } from 'fs/promises';
import * as path from 'path';

interface PluginConfig {
  resolverTypesPath: string;
}

export const plugin: PluginFunction<PluginConfig> = async (
  schema,
  documents,
  config,
  info
) => {
  // TODO: check if there's a better way to handle output dir
  const outputDir = info?.outputFile;
  if (!outputDir) {
    throw new Error('Output folder is invalid');
  }
  const { resolverTypesPath } = config;

  const completeResolverTypesPath = `${outputDir}/${resolverTypesPath}`;

  const dirs: string[] = [];
  const files: Record<string, File> = {};

  const queryType = schema.getQueryType();
  if (queryType) {
    const queryFields = queryType.getFields();

    const outputQueryDir = `${outputDir}/Query`;
    dirs.push(outputQueryDir);

    Object.keys(queryFields).forEach((fieldName) => {
      const fieldFilePath = `${outputQueryDir}/${fieldName}.ts`;
      if (files[fieldFilePath]) {
        throw new Error(
          `Unexpected duplication in field filename: Query.${fieldFilePath}`
        );
      }

      const relativePathToResolverTypes = path.relative(
        outputQueryDir,
        completeResolverTypesPath
      );

      files[fieldFilePath] = {
        content: `import type { QueryResolvers } from '${printImportModule(
          relativePathToResolverTypes
        )}';
        export const ${fieldName}: QueryResolvers['${fieldName}'] = async (_parent, _arg, _ctx) => {
          /* Implement Query.${fieldName} logic here */
        };`,
      };
    });
  }

  // Write dirs and files
  await Promise.all(
    dirs.map(async (dir) => await mkdir(dir, { recursive: true }))
  );
  await Promise.all(
    Object.entries(files).map(
      async ([filePath, file]) => await writeFile(filePath, file.content)
    )
  );

  return { content: '' };
};

interface File {
  content: string;
}

/* Utils */
const printImportModule = (moduleName: string) => {
  if (moduleName.endsWith('.ts')) {
    return moduleName.split('.').slice(0, -1).join('.');
  }
  return moduleName;
};
