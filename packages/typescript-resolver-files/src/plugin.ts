import * as path from 'path';
import {
  PluginFunction,
  PluginValidateFn,
} from '@graphql-codegen/plugin-helpers';
import { mkdir, writeFile } from 'fs/promises';
import { run } from './run';
import type { RunContext } from './types';
import { parseSources } from './utils';

const pluginName = '@eddeee888/gcg-typescript-resolver-files';
const configDefaultMode = 'modules';

interface PluginConfig {
  resolverTypesPath: string;
  relativeTargetDir?: string;
  mainFile?: string;
  mode?: 'merged' | 'modules';
  whitelistedModules?: string[];
  externalResolvers?: Record<string, string>;
}

export const plugin: PluginFunction<PluginConfig> = async (
  schema,
  _documents,
  config,
  info
) => {
  // TODO: check if there's a better way to handle output dir
  const baseOutputDir = info?.outputFile;
  if (!baseOutputDir) {
    throw new Error('Output folder is invalid');
  }

  const sources = schema.extensions.extendedSources;
  if (!Array.isArray(sources) || sources.length === 0) {
    throw new Error(
      'Empty Sources. Make sure schema files are parsed correctly.'
    );
  }
  const sourcesMap = parseSources(sources);

  const {
    resolverTypesPath: relativeResolverTypesPathFromBaseOutputDir,
    relativeTargetDir = '',
    mainFile = 'index.ts',
    mode = configDefaultMode,
    whitelistedModules = [],
    externalResolvers = {},
  } = config;

  const resolverTypesPath = path.join(
    baseOutputDir,
    relativeResolverTypesPathFromBaseOutputDir
  );

  const result: RunContext['result'] = {
    dirs: {},
    files: {},
    externalImports: {},
  };

  run({
    config: {
      schema,
      sourcesMap,
      baseOutputDir,
      resolverTypesPath,
      relativeTargetDir,
      mainFile,
      mode,
      whitelistedModules,
      externalResolvers,
    },
    result,
  });

  // Write dirs and files
  await Promise.all(
    Object.keys(result.dirs).map(
      async (dir) => await mkdir(dir, { recursive: true })
    )
  );
  await Promise.all(
    Object.entries(result.files).map(
      async ([filePath, file]) => await writeFile(filePath, file.content)
    )
  );

  return { content: '' };
};

interface RawPluginConfig {
  resolverTypesPath?: string;
  relativeTargetDir?: string;
  mainFile?: string;
  mode?: string;
  whitelistedModules?: string[];
  externalResolvers?: Record<string, string>;
}
export const validate: PluginValidateFn<RawPluginConfig> = async (
  _schema,
  _documents,
  { resolverTypesPath, mainFile, mode = configDefaultMode, whitelistedModules }
) => {
  if (!resolverTypesPath) {
    throw new Error(
      `Validation Error - ${pluginName} - config.resolverTypesPath is required`
    );
  }

  if (mainFile && path.extname(mainFile) === '') {
    throw new Error(
      `Validation Error - ${pluginName} - config.mainFile must be a valid file name`
    );
  }

  if (mode !== 'merged' && mode !== 'modules') {
    throw new Error(
      `Validation Error - ${pluginName} - config.mode must be "merged" or "modules" (default is "modules")`
    );
  }

  if (whitelistedModules) {
    if (!Array.isArray(whitelistedModules)) {
      throw new Error(
        `Validation Error - ${pluginName} - config.whitelistedModules must be an array if provided`
      );
    }
    if (mode !== 'modules') {
      throw new Error(
        `Validation Error - ${pluginName} - config.whitelistedModules can only be used with config.mode == "modules"`
      );
    }
  }
};
