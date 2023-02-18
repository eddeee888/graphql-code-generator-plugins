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
import { generateTypeDefsContent } from './generateTypeDefsContent';
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
      typeDefsFilePath,
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

    const { sourceMap, mergedSDL } = parseSources(sources);

    const typeMappersMap = parseTypeMappers({
      sourceMap,
      resolverTypesPath,
      typeMappersFileExtension,
      typeMappersSuffix,
    });

    const generatesSection: Types.GenerateOptions[] = [];

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
    generatesSection.push(resolverTypesFile);

    // typeDefs
    if (typeDefsFilePath) {
      const typeDefsFile: Types.GenerateOptions = {
        filename: path.join(baseOutputDir, typeDefsFilePath),
        pluginMap: { add: addPlugin },
        plugins: [
          {
            add: { content: generateTypeDefsContent({ mergedSDL }) },
          },
        ],
        config: {},
        schema,
        documents: [],
      };
      generatesSection.push(typeDefsFile);
    }

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
        typesPrefix: typesPluginsConfig.typesPrefix,
      },
      result,
    });
    const resolverFilesGenerateOptions: Types.GenerateOptions[] =
      Object.entries(result.files).map(([filename, { content }]) => ({
        filename,
        pluginMap: { add: addPlugin },
        plugins: [{ add: { content } }],
        config: {},
        schema,
        documents: [],
      }));

    return [...resolverFilesGenerateOptions, ...generatesSection];
  },
};
