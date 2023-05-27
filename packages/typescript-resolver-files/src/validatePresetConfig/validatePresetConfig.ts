import * as path from 'path';
import * as fs from 'fs';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { ProjectOptions } from 'ts-morph';
import { cwd, fmt } from '../utils';

const defaultResolverRelativeTargetDirMap: Record<
  ParsedPresetConfig['mode'],
  string
> = {
  modules: 'resolvers',
  merged: '',
};
const defaultTypeDefsFilePath = './typeDefs.generated.ts';
const defaultScalarsModule = 'graphql-scalars';

type ParsedTypesPluginsConfig = Omit<
  typeScriptPlugin.TypeScriptPluginConfig &
    typeScriptResolversPlugin.TypeScriptResolversPluginConfig,
  'scalars' | 'emitLegacyCommonJSImports'
>;
type ConfigMode = 'merged' | 'modules';
type ResolverMainFileMode = 'merged' | 'modules';
export type TypeDefsFileMode = 'merged' | 'mergedWhitelisted' | 'modules';
type FixObjectTypeResolvers = 'smart' | 'disabled';

export type ScalarsOverridesType = string | { input: string; output: string };

export interface ParsedPresetConfig {
  resolverTypesPath: string;
  resolverRelativeTargetDir: string;
  resolverMainFile: string;
  resolverMainFileMode: ResolverMainFileMode;
  typeDefsFilePath: string | false;
  typeDefsFileMode: TypeDefsFileMode;
  mappersFileExtension: string;
  mappersSuffix: string;
  scalarsModule: string | false;
  scalarsOverrides: Record<
    string,
    { resolver?: string; type?: ScalarsOverridesType }
  >;
  mode: ConfigMode;
  whitelistedModules: string[];
  blacklistedModules: string[];
  externalResolvers: Record<string, string>;
  typesPluginsConfig: ParsedTypesPluginsConfig;
  tsMorphProjectOptions: ProjectOptions;
  fixObjectTypeResolvers: FixObjectTypeResolvers;
  emitLegacyCommonJSImports: boolean;
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
  scalarsModule?: string | boolean;
  scalarsOverrides?: Record<
    string,
    { resolver?: string; type?: ScalarsOverridesType }
  >;
  mode?: string;
  whitelistedModules?: string[];
  blacklistedModules?: string[];
  externalResolvers?: Record<string, string>;
  typesPluginsConfig?: typeScriptPlugin.TypeScriptPluginConfig &
    typeScriptResolversPlugin.TypeScriptResolversPluginConfig;
  tsConfigFilePath?: string;
  fixObjectTypeResolvers?: string;
  emitLegacyCommonJSImports?: boolean;
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
  scalarsModule = 'graphql-scalars',
  scalarsOverrides = {},
  mode = 'modules',
  whitelistedModules,
  blacklistedModules,
  externalResolvers = {},
  typesPluginsConfig = {},
  tsConfigFilePath = './tsconfig.json',
  fixObjectTypeResolvers = 'smart',
  emitLegacyCommonJSImports = true,
}: RawPresetConfig): ParsedPresetConfig => {
  if (mode !== 'merged' && mode !== 'modules') {
    throw new Error(
      fmt.error(
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
      fmt.error(
        'presetConfig.fixObjectTypeResolvers must be "smart" or "disabled" (default is "smart")',
        'Validation'
      )
    );
  }

  if (resolverMainFileMode !== 'merged' && resolverMainFileMode !== 'modules') {
    throw new Error(
      fmt.error(
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
      fmt.warn(
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
      fmt.error(
        'presetConfig.typeDefsFileMode must be "merged", "mergedWhitelisted" or "modules" (default is "merged")',
        'Validation'
      )
    );
  }

  if (!resolverTypesPath) {
    throw new Error(
      fmt.error('presetConfig.resolverTypesPath is required', 'Validation')
    );
  }

  const finalResolverRelativeTargetDir =
    resolverRelativeTargetDir === undefined
      ? defaultResolverRelativeTargetDirMap[mode]
      : resolverRelativeTargetDir;

  if (path.extname(resolverMainFile) === '') {
    throw new Error(
      fmt.error('presetConfig.mainFile must be a valid file name', 'Validation')
    );
  }

  if (whitelistedModules) {
    if (!Array.isArray(whitelistedModules)) {
      throw new Error(
        fmt.error(
          'presetConfig.whitelistedModules must be an array if provided',
          'Validation'
        )
      );
    }

    if (mode !== 'modules') {
      throw new Error(
        fmt.error(
          'presetConfig.whitelistedModules can only be used with presetConfig.mode == "modules"',
          'Validation'
        )
      );
    }
  }

  if (blacklistedModules) {
    if (!Array.isArray(blacklistedModules)) {
      throw new Error(
        fmt.error(
          'presetConfig.blacklistedModules must be an array if provided',
          'Validation'
        )
      );
    }

    if (mode !== 'modules') {
      throw new Error(
        fmt.error(
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

  let finalScalarsModule = scalarsModule;
  if (finalScalarsModule === true) {
    finalScalarsModule = defaultScalarsModule;
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
        fmt.warn(
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
    scalarsModule: finalScalarsModule,
    scalarsOverrides,
    whitelistedModules: whitelistedModules || [],
    blacklistedModules: blacklistedModules || [],
    externalResolvers,
    typesPluginsConfig: validatedTypesPluginsConfig,
    tsMorphProjectOptions,
    fixObjectTypeResolvers,
    emitLegacyCommonJSImports,
  };
};

const validateTypesPluginsConfig = (
  config: NonNullable<RawPresetConfig['typesPluginsConfig']>
): ParsedPresetConfig['typesPluginsConfig'] => {
  if ('scalars' in config) {
    throw new Error(
      fmt.error(
        'presetConfig.typesPluginsConfig.scalars is not supported. Use presetConfig.scalarsOverrides instead.',
        'Validation'
      )
    );
  }

  if ('emitLegacyCommonJSImports' in config) {
    throw new Error(
      fmt.error(
        'presetConfig.typesPluginsConfig.emitLegacyCommonJSImports is not supported. Use presetConfig.emitLegacyCommonJSImports instead.',
        'Validation'
      )
    );
  }

  const { scalars: _, emitLegacyCommonJSImports: __, ...rest } = config;

  return rest;
};
