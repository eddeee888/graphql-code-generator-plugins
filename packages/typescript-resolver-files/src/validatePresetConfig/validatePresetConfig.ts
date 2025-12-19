import * as path from 'path';
import * as fs from 'fs';
import type { AddPluginConfig } from '@graphql-codegen/add/typings/config';
import type * as typeScriptPlugin from '@graphql-codegen/typescript';
import type * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type * as schemaAstPlugin from '@graphql-codegen/schema-ast';
import type { ProjectOptions } from 'ts-morph';
import { cwd, fmt, logger, normalizeImportExtension, type ImportExtension } from '../utils';

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
  'scalars' | 'emitLegacyCommonJSImports' | 'importExtension'
>;
type ConfigMode = 'merged' | 'modules';
type ResolverMainFileMode = 'merged' | 'modules';
export type TypeDefsFileMode = 'merged' | 'mergedWhitelisted' | 'modules';
type StringFixObjectTypeResolvers = 'smart' | 'fast' | 'disabled';
type NormalizedFixObjectTypeResolvers = {
  object: 'smart' | 'fast' | 'disabled';
  enum: 'smart' | 'fast' | 'disabled';
};
type StringResolverGeneration = 'disabled' | 'recommended' | 'minimal' | 'all';
type NormalizedResolverGeneration = {
  query: string | string[];
  mutation: string | string[];
  subscription: string | string[];
  scalar: string | string[];
  object: string | string[];
  union: string | string[];
  interface: string | string[];
  enum: string | string[];
};
export type ModuleNamingMode = number | 'all';

export type ScalarsOverridesType = string | { input: string; output: string };

export interface ParsedPresetConfig {
  add?: Record<string, AddPluginConfig>;
  resolverTypesPath: string;
  resolverRelativeTargetDir: string;
  resolverMainFile: string;
  resolverMainFileMode: ResolverMainFileMode;
  resolverGeneration: NormalizedResolverGeneration;
  typeDefsFilePath: string | false;
  typeDefsFileMode: TypeDefsFileMode;
  mappersRelativeTargetDir: string;
  mappersFileExtension: string;
  mappersSuffix: string;
  moduleNamingMode: ModuleNamingMode;
  scalarsModule: string | false;
  scalarsOverrides: Record<
    string,
    { resolver?: string; type?: ScalarsOverridesType }
  >;
  mergeSchema:
    | { path: string; config: schemaAstPlugin.SchemaASTConfig }
    | false;
  mode: ConfigMode;
  whitelistedModules: string[];
  blacklistedModules: string[];
  externalResolvers: Record<string, string>;
  typesPluginsConfig: ParsedTypesPluginsConfig;
  tsMorphProjectOptions: ProjectOptions;
  fixObjectTypeResolvers: NormalizedFixObjectTypeResolvers;
  /** @deprecated Use importExtension instead */
  emitLegacyCommonJSImports: boolean;
  importExtension: ImportExtension;
}

export interface RawPresetConfig {
  add?: Record<string, unknown>;
  resolverTypesPath?: string;
  resolverRelativeTargetDir?: string;
  resolverMainFile?: string;
  resolverMainFileMode?: string;
  resolverGeneration?: string | Record<string, string | string[]>;
  typeDefsFilePath?: string | boolean;
  typeDefsFileMode?: string;
  mappersRelativeTargetDir?: string;
  mappersFileExtension?: string;
  mappersSuffix?: string;
  moduleNamingMode?: string | number;
  scalarsModule?: string | boolean;
  scalarsOverrides?: Record<
    string,
    { resolver?: string; type?: ScalarsOverridesType }
  >;
  mergeSchema?: boolean | string | { path: string; config: unknown };
  mode?: string;
  whitelistedModules?: string[];
  blacklistedModules?: string[];
  externalResolvers?: Record<string, string>;
  typesPluginsConfig?: typeScriptPlugin.TypeScriptPluginConfig &
    typeScriptResolversPlugin.TypeScriptResolversPluginConfig;
  tsConfigFilePath?: string;
  fixObjectTypeResolvers?: string | Record<string, string>;
  /** @deprecated Use importExtension instead */
  emitLegacyCommonJSImports?: boolean;
  importExtension?: ImportExtension;
}

export interface TypedPresetConfig extends RawPresetConfig {
  add?: Record<string, AddPluginConfig>;
  mode?: ConfigMode;
  resolverMainFileMode?: ResolverMainFileMode;
  typeDefsFileMode?: TypeDefsFileMode;
  fixObjectTypeResolvers?:
    | StringFixObjectTypeResolvers
    | NormalizedFixObjectTypeResolvers;
  typesPluginsConfig?: ParsedTypesPluginsConfig;
  resolverGeneration?: StringResolverGeneration | NormalizedResolverGeneration;
  mergeSchema?:
    | boolean
    | string
    | { path: string; config: schemaAstPlugin.SchemaASTConfig };
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
  mappersRelativeTargetDir = './',
  mappersFileExtension = '.mappers.ts',
  mappersSuffix = 'Mapper',
  moduleNamingMode = 'last',
  mergeSchema,
  scalarsModule = 'graphql-scalars',
  scalarsOverrides = {},
  mode = 'modules',
  whitelistedModules,
  blacklistedModules,
  externalResolvers = {},
  typesPluginsConfig = {},
  tsConfigFilePath = './tsconfig.json',
  fixObjectTypeResolvers = 'fast',
  emitLegacyCommonJSImports,
  importExtension,
}: RawPresetConfig,
  baseConfig?: {
    emitLegacyCommonJSImports?: boolean;
    importExtension?: ImportExtension;
  }
): ParsedPresetConfig => {
  const finalEmitLegacyCommonJSImports =
    emitLegacyCommonJSImports ?? baseConfig?.emitLegacyCommonJSImports ?? true;

  const baseImportExtension = baseConfig?.importExtension || undefined;
  const finalImportExtension = importExtension ?? baseImportExtension;

  if (mode !== 'merged' && mode !== 'modules') {
    throw new Error(
      fmt.error(
        'presetConfig.mode must be "merged" or "modules" (default is "modules")',
        'Validation'
      )
    );
  }

  if (
    typeof fixObjectTypeResolvers !== 'object' &&
    fixObjectTypeResolvers !== 'smart' &&
    fixObjectTypeResolvers !== 'fast' &&
    fixObjectTypeResolvers !== 'disabled'
  ) {
    throw new Error(
      fmt.error(
        'presetConfig.fixObjectTypeResolvers must be an object, "smart", "fast" or "disabled" (default is "fast")',
        'Validation'
      )
    );
  }

  if (
    typeof resolverGeneration !== 'object' &&
    resolverGeneration !== 'disabled' &&
    resolverGeneration !== 'recommended' &&
    resolverGeneration !== 'minimal' &&
    resolverGeneration !== 'all'
  ) {
    throw new Error(
      fmt.error(
        'presetConfig.resolverGeneration must be an object, "disabled", "recommended", "minimal" or "all" (default is "recommended")',
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
    logger.warn(
      `presetConfig.typeDefsFileMode has automatically been set to "merged" because presetConfig.mode is "merged"`
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

  const finalModuleNamingMode = parseModuleNamingMode(moduleNamingMode);

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
      logger.warn(
        `Unable to find TypeScript config at ${absoluteTsConfigFilePath}. Use presetConfig.tsConfigFilePath to set a custom value. Otherwise, type analysis may not work correctly.`
      );
    }
  }

  const validatedAdd = validateAddOption(add);
  
  const normalizedImportExtension = normalizeImportExtension(finalImportExtension, finalEmitLegacyCommonJSImports);
  
  return {
    add: validatedAdd,
    resolverTypesPath,
    resolverRelativeTargetDir: finalResolverRelativeTargetDir,
    resolverMainFile,
    resolverMainFileMode,
    resolverGeneration: parseResolverGeneration(resolverGeneration),
    typeDefsFilePath: finalTypeDefsFilePath,
    typeDefsFileMode,
    mergeSchema: parseMergeSchema(mergeSchema),
    mode,
    mappersRelativeTargetDir,
    mappersFileExtension,
    mappersSuffix,
    moduleNamingMode: finalModuleNamingMode,
    scalarsModule: finalScalarsModule,
    scalarsOverrides,
    whitelistedModules: whitelistedModules || [],
    blacklistedModules: blacklistedModules || [],
    externalResolvers,
    typesPluginsConfig: validatedTypesPluginsConfig,
    tsMorphProjectOptions,
    fixObjectTypeResolvers: parseFixObjectTypeResolvers(fixObjectTypeResolvers),
    emitLegacyCommonJSImports: finalEmitLegacyCommonJSImports,
    importExtension: normalizedImportExtension,
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

  if ('importExtension' in config) {
    throw new Error(
      fmt.error(
        'presetConfig.typesPluginsConfig.importExtension is not supported. Use presetConfig.importExtension instead.',
        'Validation'
      )
    );
  }

  const { scalars: _, emitLegacyCommonJSImports: __, ...rest } = config;

  return rest;
};

const parseResolverGeneration = (
  resolverGeneration:
    | StringResolverGeneration
    | Record<string, string | string[]>
): ParsedPresetConfig['resolverGeneration'] => {
  if (resolverGeneration === 'all') {
    return {
      query: '*',
      mutation: '*',
      subscription: '*',
      scalar: '*',
      object: '*',
      union: '*',
      interface: '*',
      enum: '*',
    };
  } else if (resolverGeneration === 'minimal') {
    return {
      query: '*',
      mutation: '*',
      subscription: '*',
      scalar: '*',
      object: '',
      union: '',
      interface: '',
      enum: '',
    };
  } else if (resolverGeneration === 'recommended') {
    return {
      query: '*',
      mutation: '*',
      subscription: '*',
      scalar: '*',
      object: '*',
      union: '',
      interface: '',
      enum: '',
    };
  } else if (resolverGeneration === 'disabled') {
    return {
      query: '',
      mutation: '',
      subscription: '',
      scalar: '',
      object: '',
      union: '',
      interface: '',
      enum: '',
    };
  }

  return {
    query: resolverGeneration.query || '',
    mutation: resolverGeneration.mutation || '',
    subscription: resolverGeneration.subscription || '',
    scalar: resolverGeneration.scalar || '',
    object: resolverGeneration.object || '',
    union: resolverGeneration.union || '',
    interface: resolverGeneration.interface || '',
    enum: resolverGeneration.enum || '',
  };
};

const parseFixObjectTypeResolvers = (
  fixObjectTypeResolvers: StringFixObjectTypeResolvers | Record<string, string>
): NormalizedFixObjectTypeResolvers => {
  if (typeof fixObjectTypeResolvers === 'string') {
    return {
      object: fixObjectTypeResolvers,
      enum: fixObjectTypeResolvers,
    };
  }

  const allowedOptions: Record<string, 'smart' | 'fast' | 'disabled'> = {
    smart: 'smart',
    fast: 'fast',
    disabled: 'disabled',
  };

  return {
    object: allowedOptions[fixObjectTypeResolvers.object] || 'disabled',
    enum: allowedOptions[fixObjectTypeResolvers.enum] || 'disabled',
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

const parseMergeSchema = (
  mergeSchema: RawPresetConfig['mergeSchema']
): ParsedPresetConfig['mergeSchema'] => {
  const defaultPath = 'schema.generated.graphqls';

  if (mergeSchema === false) {
    return false;
  }

  if (mergeSchema === true || mergeSchema === undefined) {
    return { path: defaultPath, config: {} };
  }

  if (typeof mergeSchema === 'string') {
    return { path: mergeSchema, config: {} };
  }

  return {
    path: mergeSchema.path,
    config: mergeSchema.config as schemaAstPlugin.SchemaASTConfig,
  };
};

const parseModuleNamingMode = (
  moduleNamingMode: RawPresetConfig['moduleNamingMode']
): ParsedPresetConfig['moduleNamingMode'] => {
  if (moduleNamingMode == null) {
    // By default, for backwards compatibility prior to `moduleNamingMode`, we
    // select the last directory in a path.
    return -1;
  }

  if (moduleNamingMode === 'all') {
    return 'all';
  }

  if (typeof moduleNamingMode === 'string') {
    // As a convenience we support the keywords "first" and "last".
    if (moduleNamingMode === 'first') {
      return 0;
    } else if (moduleNamingMode === 'last') {
      return -1;
    }

    const parsedNumber = parseInt(moduleNamingMode);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }

  if (typeof moduleNamingMode === 'number') {
    return moduleNamingMode;
  }

  throw new Error(
    fmt.error(
      'presetConfig.moduleNamingMode must be "first" or "last" or a number (default is "last")',
      'Validation'
    )
  );
};
