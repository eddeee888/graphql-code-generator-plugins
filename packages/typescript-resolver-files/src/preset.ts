import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import * as typescriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { Types } from '@graphql-codegen/plugin-helpers';
import { parseSources } from './utils';
import { RunContext } from './types';
import { run } from './run';

interface ParsedPresetConfig {
  resolverTypesPath: string;
  relativeTargetDir: string;
  mainFile: string;
  mode: 'merged' | 'modules';
  whitelistedModules: string[];
  externalResolvers: Record<string, string>;
}

const presetName = '@eddeee888/gcg-typescript-resolver-files';

export const preset: Types.OutputPreset<ParsedPresetConfig> = {
  buildGeneratesSection: ({
    schema,
    schemaAst,
    presetConfig: rawPresetConfig,
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
      relativeTargetDir,
      mainFile,
      mode,
      whitelistedModules,
      externalResolvers,
    } = validatePresetConfig(rawPresetConfig);

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

    const generatesSection: Types.GenerateOptions[] = Object.entries(
      result.files
    ).map(([filename, { content }]) => ({
      filename,
      pluginMap: { add: addPlugin },
      plugins: [{ add: { content } }],
      config: {},
      schema,
      documents: [],
    }));

    // Resolvers type file
    generatesSection.push({
      filename: path.join(
        baseOutputDir,
        relativeResolverTypesPathFromBaseOutputDir
      ),
      pluginMap: {
        typescript: typescriptPlugin,
        'typescript-resolvers': typescriptResolversPlugin,
      },
      plugins: [{ typescript: {} }, { ['typescript-resolvers']: {} }],
      config: {
        nonOptionalTypename: true,
        enumsAsTypes: true,
      },
      schema,
      documents: [],
    });

    return generatesSection;
  },
};

interface RawPresetConfig {
  resolverTypesPath?: string;
  relativeTargetDir?: string;
  mainFile?: string;
  mode?: string;
  whitelistedModules?: string[];
  externalResolvers?: Record<string, string>;
}
const validatePresetConfig = ({
  resolverTypesPath,
  relativeTargetDir = '',
  mainFile = 'index.ts',
  mode = 'modules',
  whitelistedModules,
  externalResolvers = {},
}: RawPresetConfig): ParsedPresetConfig => {
  if (!resolverTypesPath) {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.resolverTypesPath is required`
    );
  }

  if (path.extname(mainFile) === '') {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.mainFile must be a valid file name`
    );
  }

  if (mode !== 'merged' && mode !== 'modules') {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.mode must be "merged" or "modules" (default is "modules")`
    );
  }

  if (whitelistedModules) {
    if (!Array.isArray(whitelistedModules)) {
      throw new Error(
        `Validation Error - ${presetName} - presetConfig.whitelistedModules must be an array if provided`
      );
    }

    if (mode !== 'modules') {
      throw new Error(
        `Validation Error - ${presetName} - presetConfig.whitelistedModules can only be used with presetConfig.mode == "modules"`
      );
    }
  }

  return {
    resolverTypesPath,
    relativeTargetDir,
    mainFile,
    mode: mode,
    whitelistedModules: whitelistedModules || [],
    externalResolvers,
  };
};
