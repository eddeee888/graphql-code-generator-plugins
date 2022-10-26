import * as path from 'path';
import {
  PluginFunction,
  PluginValidateFn,
} from '@graphql-codegen/plugin-helpers';
import { mkdir, writeFile } from 'fs/promises';
import { run } from './run';
import { RunResult } from './types';
import { parseSources } from './utils';

const pluginName = '@eddeee888/gcg-typescript-resolver-files';

interface PluginConfig {
  resolverTypesPath: string;
  relativeTargetDir?: string;
  mainFile?: string;
  mode?: 'merged' | 'modules';
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
    mode = 'modules',
  } = config;

  const resolverTypesPath = path.join(
    baseOutputDir,
    relativeResolverTypesPathFromBaseOutputDir
  );

  const result: RunResult = {
    dirs: [], // TODO: make dirs a map
    files: {},
  };
  run(
    {
      schema,
      sourcesMap,
      baseOutputDir,
      resolverTypesPath,
      relativeTargetDir,
      mainFile,
      mode,
    },
    result
  );

  // Write dirs and files
  await Promise.all(
    result.dirs.map(async (dir) => await mkdir(dir, { recursive: true }))
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
}
export const validate: PluginValidateFn<RawPluginConfig> = async (
  _schema,
  _documents,
  config
) => {
  if (!config.resolverTypesPath) {
    throw new Error(
      `Validation Error - ${pluginName} - config.resolverTypesPath is required`
    );
  }

  if (config.mainFile && path.extname(config.mainFile) === '') {
    throw new Error(
      `Validation Error - ${pluginName} - config.mainFile must be a valid file name`
    );
  }

  if (
    config.mode !== undefined &&
    config.mode !== 'merged' &&
    config.mode !== 'modules'
  ) {
    throw new Error(
      `Validation Error - ${pluginName} - config.mode must be "merged" or "modules" (default is "modules")`
    );
  }
};
