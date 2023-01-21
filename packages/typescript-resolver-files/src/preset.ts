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
import { RawPresetConfig, validatePresetConfig } from './validatePresetConfig';

export const preset: Types.OutputPreset<RawPresetConfig> = {
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
      resolverRelativeTargetDir,
      mappersFileExtension: typeMappersFileExtension,
      mappersSuffix: typeMappersSuffix,
      resolverMainFile,
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

    const { sourceMap } = parseSources(sources);

    const typeMappersMap = parseTypeMappers({
      sourceMap,
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
      sourceMap,
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
        sourceMap,
        baseOutputDir,
        resolverTypesPath,
        resolverRelativeTargetDir,
        resolverMainFile,
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
