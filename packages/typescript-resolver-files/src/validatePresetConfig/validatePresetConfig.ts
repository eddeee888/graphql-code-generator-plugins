import * as path from 'path';
import * as fs from 'fs';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { ProjectOptions } from 'ts-morph';
import { presetName } from '../preset';
import { cwd } from '../utils';

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
type ConfigMode = 'merged' | 'modules';
type ResolverMainFileMode = 'merged' | 'modules';
export type TypeDefsFileMode = 'merged' | 'mergedWhitelisted' | 'modules';
type FixObjectTypeResolvers = 'smart' | 'disabled';

interface ParsedPresetConfig {
  resolverTypesPath: string;
  resolverRelativeTargetDir: string;
  resolverMainFile: string;
  resolverMainFileMode: ResolverMainFileMode;
  typeDefsFilePath: string | false;
  typeDefsFileMode: TypeDefsFileMode;
  mappersFileExtension: string;
  mappersSuffix: string;
  mode: ConfigMode;
  whitelistedModules: string[];
  blacklistedModules: string[];
  externalResolvers: Record<string, string>;
  typesPluginsConfig: ParsedTypesPluginsConfig;
  tsMorphProjectOptions: ProjectOptions;
  fixObjectTypeResolvers: FixObjectTypeResolvers;
}

export interface RawPresetConfig {
  resolverTypesPath?: string;
  resolverRelativeTargetDir?: string;
  resolverMainFile?: string;
  resolverMainFileMode?: string;
  typeDefsFilePath?: string | boolean;
  typeDefsFileMode?: string;
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
  mode?: ConfigMode;
  resolverMainFileMode?: ResolverMainFileMode;
  typeDefsFileMode?: TypeDefsFileMode;
  fixObjectTypeResolvers?: FixObjectTypeResolvers;
}

export const validatePresetConfig = ({
  resolverTypesPath = './types.generated.ts',
  resolverRelativeTargetDir,
  resolverMainFile = 'resolvers.generated.ts',
  resolverMainFileMode = 'merged',
  typeDefsFilePath = defaultTypeDefsFilePath,
  typeDefsFileMode: inputTypeDefsFileMode = 'merged',
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
      printError(
        'presetConfig.mode must be "merged" or "modules" (default is "modules")',
        'Validation'
      )
    );
  }

  if (
    fixObjectTypeResolvers !== 'smart' &&
    fixObjectTypeResolvers !== 'disabled'
  ) {
    throw new Error(
      printError(
        'presetConfig.fixObjectTypeResolvers must be "smart" or "disabled" (default is "smart")',
        'Validation'
      )
    );
  }

  if (resolverMainFileMode !== 'merged' && resolverMainFileMode !== 'modules') {
    throw new Error(
      printError(
        'presetConfig.resolverMainFileMode must be "merged" or "modules" (default is "merged")',
        'Validation'
      )
    );
  }

  let typeDefsFileMode = inputTypeDefsFileMode;
  if (mode === 'merged') {
    // If mode is `merged`, `typeDefsFileMode` is also `merged` because there's no whitelisted or modules concepts
    typeDefsFileMode = 'merged';
    console.warn(
      printWarning(
        `presetConfig.typeDefsFileMode has automatically been set to "merged" because presetConfig.mode is "merged"`
      )
    );
  }
  if (
    typeDefsFileMode !== 'merged' &&
    typeDefsFileMode !== 'modules' &&
    typeDefsFileMode !== 'mergedWhitelisted'
  ) {
    throw new Error(
      printError(
        'presetConfig.typeDefsFileMode must be "merged", "mergedWhitelisted" or "modules" (default is "merged")',
        'Validation'
      )
    );
  }

  if (!resolverTypesPath) {
    throw new Error(
      printError('presetConfig.resolverTypesPath is required', 'Validation')
    );
  }

  const finalResolverRelativeTargetDir =
    resolverRelativeTargetDir === undefined
      ? defaultResolverRelativeTargetDirMap[mode]
      : resolverRelativeTargetDir;

  if (path.extname(resolverMainFile) === '') {
    throw new Error(
      printError(
        'presetConfig.mainFile must be a valid file name',
        'Validation'
      )
    );
  }

  if (whitelistedModules) {
    if (!Array.isArray(whitelistedModules)) {
      throw new Error(
        printError(
          'presetConfig.whitelistedModules must be an array if provided',
          'Validation'
        )
      );
    }

    if (mode !== 'modules') {
      throw new Error(
        printError(
          'presetConfig.whitelistedModules can only be used with presetConfig.mode == "modules"',
          'Validation'
        )
      );
    }
  }

  if (blacklistedModules) {
    if (!Array.isArray(blacklistedModules)) {
      throw new Error(
        printError(
          'presetConfig.blacklistedModules must be an array if provided',
          'Validation'
        )
      );
    }

    if (mode !== 'modules') {
      throw new Error(
        printError(
          'presetConfig.blacklistedModules can only be used with presetConfig.mode == "modules"',
          'Validation'
        )
      );
    }
  }

  const validatedTypesPluginsConfig =
    validateTypesPluginsConfig(typesPluginsConfig);

  let finalTypeDefsFilePath = typeDefsFilePath;
  if (finalTypeDefsFilePath === true) {
    finalTypeDefsFilePath = defaultTypeDefsFilePath;
  }

  const tsMorphProjectOptions: ProjectOptions = {
    skipAddingFilesFromTsConfig: true, // avoid long startup time by NOT loading files included by tsconfig.json. We only use this virtually anyways so we don't need all the files
  };
  if (tsConfigFilePath) {
    const absoluteTsConfigFilePath = path.join(cwd(), tsConfigFilePath);

    if (fs.existsSync(absoluteTsConfigFilePath)) {
      tsMorphProjectOptions.tsConfigFilePath = absoluteTsConfigFilePath;
    } else {
      console.warn(
        printWarning(
          `Unable to find TypeScript config at ${absoluteTsConfigFilePath}. Use presetConfig.tsConfigFilePath to set a custom value. Otherwise, type analysis may not work correctly.`
        )
      );
    }
  }

  return {
    resolverTypesPath,
    resolverRelativeTargetDir: finalResolverRelativeTargetDir,
    resolverMainFile,
    resolverMainFileMode,
    typeDefsFilePath: finalTypeDefsFilePath,
    typeDefsFileMode,
    mode,
    mappersFileExtension,
    mappersSuffix,
    whitelistedModules: whitelistedModules || [],
    blacklistedModules: blacklistedModules || [],
    externalResolvers,
    typesPluginsConfig: validatedTypesPluginsConfig,
    tsMorphProjectOptions,
    fixObjectTypeResolvers,
  };
};

const validateTypesPluginsConfig = (
  config: NonNullable<RawPresetConfig['typesPluginsConfig']>
): ParsedPresetConfig['typesPluginsConfig'] => {
  const scalarsOption = config.scalars || {};

  if (typeof scalarsOption === 'string') {
    throw new Error(
      printError(
        'presetConfig.typesPluginsConfig.scalars of type "string" is not supported',
        'Validation'
      )
    );
  }
  return {
    ...config,
    scalars: scalarsOption,
  };
};

const printError = (input: string, type: 'Validation'): string => {
  return `[${presetName}] ERROR: ${type} - ${input}`;
};

const printWarning = (input: string): string => {
  return `[${presetName}] WARN: ${input}`;
};
