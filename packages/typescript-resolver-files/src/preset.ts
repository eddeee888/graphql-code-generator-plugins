import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import type { Types } from '@graphql-codegen/plugin-helpers';
import { parseSources } from './utils';
import { RunContext } from './types';
import { run } from './run';

type ParsedTypesPluginsConfig = Omit<
  typeScriptPlugin.TypeScriptPluginConfig,
  'scalars'
> &
  Omit<typeScriptResolversPlugin.TypeScriptResolversPluginConfig, 'scalars'> & {
    scalars: Record<string, string>;
  };

interface ParsedPresetConfig {
  resolverTypesPath: string;
  relativeTargetDir: string;
  mainFile: string;
  mode: 'merged' | 'modules';
  whitelistedModules: string[];
  externalResolvers: Record<string, string>;
  typesPluginsConfig: ParsedTypesPluginsConfig;
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
      typesPluginsConfig,
    } = validatePresetConfig(rawPresetConfig);

    // typescript and typescript-resolvers
    const { defaultScalarTypesMap, defaultScalarExternalResolvers } =
      Object.entries(scalarResolvers).reduce<
        Record<
          'defaultScalarTypesMap' | 'defaultScalarExternalResolvers',
          Record<string, string>
        >
      >(
        (res, [scalarName, scalarResolver]) => {
          if (
            scalarResolver.extensions.codegenScalarType &&
            typeof scalarResolver.extensions.codegenScalarType === 'string'
          ) {
            res.defaultScalarTypesMap[scalarName] =
              scalarResolver.extensions.codegenScalarType;
          }

          res.defaultScalarExternalResolvers[
            scalarName
          ] = `~graphql-scalars#${scalarResolver.name}Resolver`;

          return res;
        },
        { defaultScalarTypesMap: {}, defaultScalarExternalResolvers: {} }
      );

    const resolverTypesFile: Types.GenerateOptions = {
      filename: path.join(
        baseOutputDir,
        relativeResolverTypesPathFromBaseOutputDir
      ),
      pluginMap: {
        typescript: typeScriptPlugin,
        'typescript-resolvers': typeScriptResolversPlugin,
      },
      plugins: [{ typescript: {} }, { ['typescript-resolvers']: {} }],
      config: {
        enumsAsTypes: true,
        nonOptionalTypename: true,
        ...typesPluginsConfig,
        scalars: {
          ...defaultScalarTypesMap,
          ...typesPluginsConfig.scalars,
        },
      },
      schema,
      documents: [],
    };

    // typescript-resolver-types
    const result: RunContext['result'] = {
      files: {},
      externalImports: {},
    };
    run({
      config: {
        schema: schemaAst,
        sourcesMap,
        baseOutputDir,
        resolverTypesPath: path.join(
          baseOutputDir,
          relativeResolverTypesPathFromBaseOutputDir
        ),
        relativeTargetDir,
        mainFile,
        mode,
        whitelistedModules,
        externalResolvers: {
          ...defaultScalarExternalResolvers,
          ...externalResolvers,
        },
      },
      result,
    });

    // Prepare `generatesSection`
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
    generatesSection.push(resolverTypesFile);
    return generatesSection;
  },
};

export interface TypeScriptResolverFilesPresetConfig {
  resolverTypesPath?: string;
  relativeTargetDir?: string;
  mainFile?: string;
  mode?: string;
  whitelistedModules?: string[];
  externalResolvers?: Record<string, string>;
  typesPluginsConfig?: typeScriptPlugin.TypeScriptPluginConfig &
    typeScriptResolversPlugin.TypeScriptResolversPluginConfig;
}
const validatePresetConfig = ({
  resolverTypesPath,
  relativeTargetDir = '',
  mainFile = 'index.ts',
  mode = 'modules',
  whitelistedModules,
  externalResolvers = {},
  typesPluginsConfig = {},
}: TypeScriptResolverFilesPresetConfig): ParsedPresetConfig => {
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

  if (!validateTypesPluginsConfig(typesPluginsConfig)) {
    throw new Error('Invalid typescriptPluginConfig. Should not see this.');
  }

  return {
    resolverTypesPath,
    relativeTargetDir,
    mainFile,
    mode: mode,
    whitelistedModules: whitelistedModules || [],
    externalResolvers,
    typesPluginsConfig,
  };
};

const validateTypesPluginsConfig = (
  config: NonNullable<TypeScriptResolverFilesPresetConfig['typesPluginsConfig']>
): config is ParsedPresetConfig['typesPluginsConfig'] => {
  config.scalars = config.scalars || {};
  if (typeof config.scalars === 'string') {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.typesPluginsConfig.scalars of type "string" is not supported`
    );
  }
  return true;
};
