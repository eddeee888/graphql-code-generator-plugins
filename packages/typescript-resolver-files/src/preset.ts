import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import type { Types } from '@graphql-codegen/plugin-helpers';
import { parseSources } from './utils';
import { RunContext } from './types';
import { run } from './run';

interface PresetConfig {
  resolverTypesPath: string;
  relativeTargetDir?: string;
  mainFile?: string;
  mode?: 'merged' | 'modules';
  whitelistedModules?: string[];
  externalResolvers?: Record<string, string>;
}

const configDefaultMode = 'modules';

export const preset: Types.OutputPreset<PresetConfig> = {
  buildGeneratesSection: ({
    schema,
    schemaAst,
    presetConfig,
    baseOutputDir,
  }) => {
    if (!schemaAst) {
      throw new Error('Missing schemaAst');
    }
    const sources = schemaAst.extensions.extendedSources;
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
    } = presetConfig;

    const resolverTypesPath = path.join(
      baseOutputDir,
      relativeResolverTypesPathFromBaseOutputDir
    );

    const result: RunContext['result'] = {
      files: {},
      externalImports: {},
    };

    run({
      config: {
        schema: schemaAst,
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

    return Object.entries(result.files).map(([filename, { content }]) => ({
      filename,
      pluginMap: { add: addPlugin },
      plugins: [{ add: { content } }],
      schema,
      config: {},
      documents: [],
    }));
  },
};
