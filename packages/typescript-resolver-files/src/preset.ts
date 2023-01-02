import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { Types } from '@graphql-codegen/plugin-helpers';
import { parseSources } from './parseSources';
import { getPluginsConfig } from './getPluginsConfig';
import {
  generateResolverFiles,
  GenerateResolverFilesContext,
} from './generateResolverFiles';
import { parseTypeMappers } from './parseTypeMappers';

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
  mappersFileExtension: string;
  mappersSuffix: string;
  mainFile: string;
  mode: 'merged' | 'modules';
  whitelistedModules: string[];
  blacklistedModules: string[];
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

    const {
      resolverTypesPath: relativeResolverTypesPathFromBaseOutputDir,
      relativeTargetDir,
      mappersFileExtension: typeMappersFileExtension,
      mappersSuffix: typeMappersSuffix,
      mainFile,
      mode,
      whitelistedModules,
      blacklistedModules,
      externalResolvers,
      typesPluginsConfig,
    } = validatePresetConfig(rawPresetConfig);

    const resolverTypesPath = path.join(
      baseOutputDir,
      relativeResolverTypesPathFromBaseOutputDir
    );

    const sourcesMap = parseSources(sources);

    const typeMappersMap = parseTypeMappers({
      sourcesMap,
      resolverTypesPath,
      typeMappersFileExtension,
      typeMappersSuffix,
    });

    // typescript and typescript-resolvers plugins config
    const {
      defaultScalarTypesMap,
      defaultScalarExternalResolvers,
      defaultTypeMappers,
    } = getPluginsConfig({
      schemaAst,
      sourcesMap,
      typeMappersMap,
      whitelistedModules,
      blacklistedModules,
    });

    const resolverTypesFile: Types.GenerateOptions = {
      filename: resolverTypesPath,
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
        mappers: {
          ...defaultTypeMappers,
          ...typesPluginsConfig.mappers,
        },
      },
      schema,
      documents: [],
    };

    // resolver files
    const result: GenerateResolverFilesContext['result'] = {
      files: {},
      externalImports: {},
    };
    generateResolverFiles({
      config: {
        schema: schemaAst,
        sourcesMap,
        baseOutputDir,
        resolverTypesPath,
        relativeTargetDir,
        mainFile,
        mode,
        whitelistedModules,
        blacklistedModules,
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
  mappersFileExtension?: string;
  mappersSuffix?: string;
  mainFile?: string;
  mode?: string;
  whitelistedModules?: string[];
  blacklistedModules?: string[];
  externalResolvers?: Record<string, string>;
  typesPluginsConfig?: typeScriptPlugin.TypeScriptPluginConfig &
    typeScriptResolversPlugin.TypeScriptResolversPluginConfig;
}
const validatePresetConfig = ({
  resolverTypesPath,
  relativeTargetDir = '',
  mappersFileExtension = '.mappers.ts',
  mappersSuffix = 'Mapper',
  mainFile = 'index.ts',
  mode = 'modules',
  whitelistedModules,
  blacklistedModules,
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

  return {
    resolverTypesPath,
    relativeTargetDir,
    mainFile,
    mode: mode,
    mappersFileExtension,
    mappersSuffix,
    whitelistedModules: whitelistedModules || [],
    blacklistedModules: blacklistedModules || [],
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
