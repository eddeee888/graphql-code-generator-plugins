import * as path from 'path';
import * as fs from 'fs';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { ProjectOptions } from 'ts-morph';
import { presetName } from '../preset';

const defaultResolverRelativeTargetDirMap: Record<
  ParsedPresetConfig['mode'],
  string
> = {
  modules: 'resolvers',
  merged: '',
};
const defaultTypeDefsFilePath = './typeDefs.generated.ts';

type ParsedTypesPluginsConfig = Omit<
  typeScriptPlugin.TypeScriptPluginConfig,
  'scalars'
> &
  Omit<typeScriptResolversPlugin.TypeScriptResolversPluginConfig, 'scalars'> & {
    scalars: Record<string, string>;
  };

interface ParsedPresetConfig {
  resolverTypesPath: string;
  resolverRelativeTargetDir: string;
  resolverMainFile: string;
  typeDefsFilePath: string | false;
  mappersFileExtension: string;
  mappersSuffix: string;
  mode: 'merged' | 'modules';
  whitelistedModules: string[];
  blacklistedModules: string[];
  externalResolvers: Record<string, string>;
  typesPluginsConfig: ParsedTypesPluginsConfig;
  tsMorphProjectOptions: ProjectOptions;
  fixObjectTypeResolvers: 'smart' | 'disabled';
}

export interface RawPresetConfig {
  resolverTypesPath?: string;
  resolverRelativeTargetDir?: string;
  resolverMainFile?: string;
  typeDefsFilePath?: string | boolean;
  mappersFileExtension?: string;
  mappersSuffix?: string;
  mode?: string;
  whitelistedModules?: string[];
  blacklistedModules?: string[];
  externalResolvers?: Record<string, string>;
  typesPluginsConfig?: typeScriptPlugin.TypeScriptPluginConfig &
    typeScriptResolversPlugin.TypeScriptResolversPluginConfig;
  tsConfigFilePath?: string;
  fixObjectTypeResolvers?: string;
}

export interface TypedPresetConfig extends RawPresetConfig {
  mode?: 'merged' | 'modules';
  fixObjectTypeResolvers?: 'smart' | 'disabled';
}

export const validatePresetConfig = ({
  resolverTypesPath = './types.generated.ts',
  resolverRelativeTargetDir,
  resolverMainFile = 'resolvers.generated.ts',
  typeDefsFilePath = defaultTypeDefsFilePath,
  mappersFileExtension = '.mappers.ts',
  mappersSuffix = 'Mapper',
  mode = 'modules',
  whitelistedModules,
  blacklistedModules,
  externalResolvers = {},
  typesPluginsConfig = {},
  tsConfigFilePath = './tsconfig.json',
  fixObjectTypeResolvers = 'smart',
}: RawPresetConfig): ParsedPresetConfig => {
  if (mode !== 'merged' && mode !== 'modules') {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.mode must be "merged" or "modules" (default is "modules")`
    );
  }

  if (
    fixObjectTypeResolvers !== 'smart' &&
    fixObjectTypeResolvers !== 'disabled'
  ) {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.fixObjectTypeResolvers must be "smart" or "disabled" (default is "smart")`
    );
  }

  if (!resolverTypesPath) {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.resolverTypesPath is required`
    );
  }

  const finalResolverRelativeTargetDir =
    resolverRelativeTargetDir === undefined
      ? defaultResolverRelativeTargetDirMap[mode]
      : resolverRelativeTargetDir;

  if (path.extname(resolverMainFile) === '') {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.mainFile must be a valid file name`
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

  if (blacklistedModules) {
    if (!Array.isArray(blacklistedModules)) {
      throw new Error(
        `Validation Error - ${presetName} - presetConfig.blacklistedModules must be an array if provided`
      );
    }

    if (mode !== 'modules') {
      throw new Error(
        `Validation Error - ${presetName} - presetConfig.blacklistedModules can only be used with presetConfig.mode == "modules"`
      );
    }
  }

  if (!validateTypesPluginsConfig(typesPluginsConfig)) {
    throw new Error('Invalid typescriptPluginConfig. Should not see this.');
  }

  let finalTypeDefsFilePath = typeDefsFilePath;
  if (finalTypeDefsFilePath === true) {
    finalTypeDefsFilePath = defaultTypeDefsFilePath;
  }

  const tsMorphProjectOptions: ProjectOptions = {
    skipAddingFilesFromTsConfig: true, // avoid long startup time by NOT loading files included by tsconfig.json. We only use this virtually anyways so we don't need all the files
  };
  if (tsConfigFilePath) {
    const absoluteTsConfigFilePath = path.join(process.cwd(), tsConfigFilePath);

    if (fs.existsSync(absoluteTsConfigFilePath)) {
      tsMorphProjectOptions.tsConfigFilePath = absoluteTsConfigFilePath;
    } else {
      console.warn(
        `[${presetName}] WARN: Unable to find TypeScript config at ${absoluteTsConfigFilePath}. Use presetConfig.tsConfigFilePath to set a custom value. Otherwise, type analysis may not work correctly.`
      );
    }
  }

  return {
    resolverTypesPath,
    resolverRelativeTargetDir: finalResolverRelativeTargetDir,
    resolverMainFile,
    typeDefsFilePath: finalTypeDefsFilePath,
    mode,
    mappersFileExtension,
    mappersSuffix,
    whitelistedModules: whitelistedModules || [],
    blacklistedModules: blacklistedModules || [],
    externalResolvers,
    typesPluginsConfig,
    tsMorphProjectOptions,
    fixObjectTypeResolvers,
  };
};

const validateTypesPluginsConfig = (
  config: NonNullable<RawPresetConfig['typesPluginsConfig']>
): config is ParsedPresetConfig['typesPluginsConfig'] => {
  config.scalars = config.scalars || {};
  if (typeof config.scalars === 'string') {
    throw new Error(
      `Validation Error - ${presetName} - presetConfig.typesPluginsConfig.scalars of type "string" is not supported`
    );
  }
  return true;
};
