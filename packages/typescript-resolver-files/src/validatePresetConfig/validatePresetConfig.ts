import * as path from 'path';
import * as fs from 'fs';
import type { AddPluginConfig } from '@graphql-codegen/add/typings/config';
import type * as typeScriptPlugin from '@graphql-codegen/typescript';
import type * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
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
type ResolverGeneration = 'disabled' | 'recommended' | 'all'; // TODO: also take object in the future

export type ScalarsOverridesType = string | { input: string; output: string };

export interface ParsedPresetConfig {
  add?: Record<string, AddPluginConfig>;
  resolverTypesPath: string;
  resolverRelativeTargetDir: string;
  resolverMainFile: string;
  resolverMainFileMode: ResolverMainFileMode;
  resolverGeneration: {
    query: boolean;
    mutation: boolean;
    subscription: boolean;
    scalar: boolean;
    object: boolean;
    union: boolean;
    interface: boolean;
  };
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
  add?: Record<string, unknown>;
  resolverTypesPath?: string;
  resolverRelativeTargetDir?: string;
  resolverMainFile?: string;
  resolverMainFileMode?: string;
  resolverGeneration?: string;
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
  add?: Record<string, AddPluginConfig>;
  mode?: ConfigMode;
  resolverMainFileMode?: ResolverMainFileMode;
  typeDefsFileMode?: TypeDefsFileMode;
  fixObjectTypeResolvers?: FixObjectTypeResolvers;
  typesPluginsConfig?: ParsedTypesPluginsConfig;
  resolverGeneration?: ResolverGeneration;
}

export const validatePresetConfig = ({
  add,
  resolverTypesPath = './types.generated.ts',
  resolverRelativeTargetDir,
  resolverMainFile = 'resolvers.generated.ts',
  resolverMainFileMode = 'merged',
  resolverGeneration = 'recommended',
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

  if (
    resolverGeneration !== 'disabled' &&
    resolverGeneration !== 'recommended' &&
    resolverGeneration !== 'all'
  ) {
    throw new Error(
      fmt.error(
        'presetConfig.resolverGeneration must be "disabled", "recommended" or "all" (default is "recommended")',
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

  const validatedAdd = validateAddOption(add);

  return {
    add: validatedAdd,
    resolverTypesPath,
    resolverRelativeTargetDir: finalResolverRelativeTargetDir,
    resolverMainFile,
    resolverMainFileMode,
    resolverGeneration: parseResolverGeneration(resolverGeneration),
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

  if ('namingConvention' in config) {
    console.warn(
      fmt.warn(
        "presetConfig.typesPluginsConfig.namingConvention is not fully supported. The default is `namingConvention: 'keep'`. Change at your own risk."
      )
    );
  }

  const { scalars: _, emitLegacyCommonJSImports: __, ...rest } = config;

  return rest;
};

const parseResolverGeneration = (
  resolverGeneration: ResolverGeneration
): ParsedPresetConfig['resolverGeneration'] => {
  if (resolverGeneration === 'all') {
    return {
      query: true,
      mutation: true,
      subscription: true,
      scalar: true,
      object: true,
      union: true,
      interface: true,
    };
  } else if (resolverGeneration === 'recommended') {
    return {
      query: true,
      mutation: true,
      subscription: true,
      scalar: true,
      object: true,
      union: false,
      interface: false,
    };
  }

  return {
    query: false,
    mutation: false,
    subscription: false,
    scalar: false,
    object: false,
    union: false,
    interface: false,
  };
};

const validateAddOption = (
  add: RawPresetConfig['add']
): ParsedPresetConfig['add'] => {
  if (!add) {
    return undefined;
  }

  Object.entries(add).forEach(([_, pluginConfig]) => {
    if (typeof pluginConfig !== 'object' || pluginConfig === null) {
      throw new Error(
        fmt.error('presetConfig.add must be an object', 'Validation')
      );
    }

    if (!('content' in pluginConfig)) {
      throw new Error(
        fmt.error(
          'presetConfig.add must contain a "content" property',
          'Validation'
        )
      );
    }
  });

  // TODO: a bit hacky here but what's a good way to coerce this type? 🤔
  return add as ParsedPresetConfig['add'];
};
