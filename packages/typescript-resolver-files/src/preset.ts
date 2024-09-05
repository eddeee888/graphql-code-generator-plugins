import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import * as schemaAstPlugin from '@graphql-codegen/schema-ast';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';
import { Project } from 'ts-morph';
import { defineConfig as defineServerConfig } from '@eddeee888/gcg-server-config';
import { parseSources } from './parseSources';
import { parseGraphQLSchema } from './parseGraphQLSchema';
import {
  type GenerateResolverFilesContext,
  generateResolverFiles,
} from './generateResolverFiles';
import { generateTypeDefsFiles } from './generateTypeDefsFiles';
import { getGraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate';
import { addVirtualTypesFileToTsMorphProject } from './addVirtualTypesFileToTsMorphProject';
import { parseTypeMappers } from './parseTypeMappers';
import {
  type RawPresetConfig,
  validatePresetConfig,
} from './validatePresetConfig';
import { validateAndMergeParsedConfigs } from './validateAndMergeParsedConfigs';
import { normalizeAddConfigPath } from './normalizeAddConfigPath';
import { logger } from './utils';

export const presetName = '@eddeee888/gcg-typescript-resolver-files';

export const preset: Types.OutputPreset<RawPresetConfig> = {
  buildGeneratesSection: async ({
    schema,
    schemaAst,
    presetConfig: rawPresetConfig,
    baseOutputDir,
    profiler = createNoopProfiler(),
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
      add,
      resolverTypesPath: relativeResolverTypesPathFromBaseOutputDir,
      resolverRelativeTargetDir,
      mappersFileExtension: typeMappersFileExtension,
      mappersSuffix: typeMappersSuffix,
      resolverMainFile,
      resolverMainFileMode,
      resolverGeneration,
      typeDefsFilePath,
      typeDefsFileMode,
      mergeSchema,
      scalarsModule,
      scalarsOverrides,
      mode,
      whitelistedModules,
      blacklistedModules,
      externalResolvers,
      typesPluginsConfig,
      tsMorphProjectOptions,
      fixObjectTypeResolvers,
      emitLegacyCommonJSImports,
    } = validatePresetConfig(rawPresetConfig);

    const resolverTypesPath = path.posix.join(
      baseOutputDir,
      relativeResolverTypesPathFromBaseOutputDir
    );

    const normalizedAdd = normalizeAddConfigPath({ add, baseOutputDir });

    const { sourceMap } = parseSources(sources, baseOutputDir);

    const tsMorphProject = await profiler.run(
      async () => new Project(tsMorphProjectOptions),
      createProfilerRunName('Initialising ts-morph project')
    );

    const typeMappersMap = await profiler.run(
      async () =>
        parseTypeMappers({
          sourceMap,
          resolverTypesPath,
          typeMappersFileExtension,
          typeMappersSuffix,
          tsMorphProject,
          shouldCollectPropertyMap:
            fixObjectTypeResolvers.object !== 'disabled',
          emitLegacyCommonJSImports,
        }),
      createProfilerRunName('parseTypeMappers')
    );

    const generatesSection: Types.GenerateOptions[] = [];

    const parsedGraphQLSchemaMeta = await profiler.run(
      async () =>
        parseGraphQLSchema({
          schemaAst,
          sourceMap,
          resolverTypesPath,
          scalarsModule,
          scalarsOverrides,
          typeMappersMap,
          mode,
          baseOutputDir,
          resolverRelativeTargetDir,
          whitelistedModules,
          blacklistedModules,
        }),
      createProfilerRunName('parseGraphQLSchema')
    );

    const mergedConfig = validateAndMergeParsedConfigs({
      unmanagedNonScalarResolvers: externalResolvers,
      parsedGraphQLSchemaMeta,
    });

    // typescript and typescript-resolvers plugins config
    const resolverTypesConfig = defineServerConfig({
      optionalResolveType: true,
      resolversNonOptionalTypename: {
        unionMember: true,
        interfaceImplementingType: true,
      },
      namingConvention: 'keep',
      emitLegacyCommonJSImports,
      generateInternalResolversIfNeeded: {
        __resolveReference: true,
      },
      ...typesPluginsConfig,
      scalars: mergedConfig.scalarTypes,
      mappers: {
        ...mergedConfig.typeMappers,
        ...typesPluginsConfig.mappers,
      },
    });

    // typesSourceFile is the virtual `types.generated.ts`
    // This is useful when we need to do static analysis as most types come from this file
    // e.g. comparing mappers field type vs schema object field type
    const { typesSourceFile, meta: generatedTypesFileMeta } =
      await profiler.run(
        () =>
          addVirtualTypesFileToTsMorphProject({
            tsMorphProject,
            schemaAst,
            resolverTypesConfig,
            resolverTypesPath,
            addConfig: normalizedAdd?.[resolverTypesPath],
          }),
        createProfilerRunName('addVirtualTypesFileToTsMorphProject')
      );

    const graphQLObjectTypeResolversToGenerate = await profiler.run(
      async () =>
        getGraphQLObjectTypeResolversToGenerate({
          tsMorphProject,
          typesSourceFile,
          userDefinedSchemaObjectTypeMap:
            mergedConfig.userDefinedSchemaTypeMap.object,
          typeMappersMap,
        }),
      createProfilerRunName('graphQLObjectTypeResolversToGenerate')
    );

    const resolverTypesFilePlugins: Types.PluginConfig[] = [
      { typescript: {} },
      { ['typescript-resolvers']: {} },
    ];
    if (normalizedAdd?.[resolverTypesPath]) {
      resolverTypesFilePlugins.push({
        add: normalizedAdd[resolverTypesPath],
      });
    }
    const resolverTypesFile: Types.GenerateOptions = {
      filename: resolverTypesPath,
      pluginMap: {
        typescript: typeScriptPlugin,
        'typescript-resolvers': typeScriptResolversPlugin,
        add: addPlugin,
      },
      plugins: resolverTypesFilePlugins,
      config: resolverTypesConfig,
      schema,
      documents: [],
    };
    generatesSection.push(resolverTypesFile);

    // typeDefs
    if (typeDefsFilePath) {
      const typeDefsFiles = await profiler.run(async () => {
        return generateTypeDefsFiles({
          baseOutputDir,
          typeDefsFilePath,
          typeDefsFileMode,
          sourceMap,
          whitelistedModules,
          blacklistedModules,
        });
      }, createProfilerRunName('generateTypeDefsFiles'));

      Object.entries(typeDefsFiles).forEach(([filename, meta]) => {
        const typeDefsFile: Types.GenerateOptions = {
          filename: filename,
          pluginMap: { add: addPlugin },
          plugins: [{ add: { content: meta.content } }],
          config: {},
          schema,
          documents: [],
        };
        generatesSection.push(typeDefsFile);
      });
    }

    // merge schema
    if (mergeSchema) {
      generatesSection.push({
        filename: path.posix.join(baseOutputDir, mergeSchema.path),
        pluginMap: { ['schema-ast']: schemaAstPlugin },
        plugins: [{ ['schema-ast']: {} }],
        schema,
        documents: [],
        config: mergeSchema.config,
      });
    }

    // resolver files
    const result: GenerateResolverFilesContext['result'] = {
      files: {},
      externalImports: {},
    };
    await profiler.run(
      async () =>
        generateResolverFiles({
          config: {
            baseOutputDir,
            resolverTypesPath,
            resolverRelativeTargetDir,
            resolverMainFile,
            resolverMainFileMode,
            resolverGeneration,
            typeMappersMap,
            parsedGraphQLSchemaMeta,
            graphQLObjectTypeResolversToGenerate,
            tsMorph: {
              project: tsMorphProject,
              typesSourceFile,
            },
            fixObjectTypeResolvers,
            unmanagedResolvers: {
              ...mergedConfig.unmanagedResolvers,
            },
            emitLegacyCommonJSImports,
            generatedTypesFileMeta,
          },
          result,
        }),
      createProfilerRunName('generateResolverFiles')
    );

    const resultFilesArray = Object.entries(result.files);
    const resolverFilesGenerateOptions: Types.GenerateOptions[] =
      resultFilesArray
        .filter(([_, file]) => {
          // Only generate files that are:
          // 1. `virtual` - because file doesn't exist yet
          // 2. on `filesystem` and with `contentUpdated` - because file content has been updated, so we want to apply the changes
          return (
            file.filesystem.type === 'virtual' ||
            (file.filesystem.type === 'filesystem' &&
              file.filesystem.contentUpdated === true)
          );
        })
        .map(([filename, { content }]) => {
          return {
            filename,
            pluginMap: { add: addPlugin },
            plugins: [{ add: { content } }],
            config: {},
            schema,
            documents: [],
          };
        });
    logger.debug(
      `Applying changes to ${resolverFilesGenerateOptions.length}/${
        resultFilesArray.length
      } files. (${
        resultFilesArray.length - resolverFilesGenerateOptions.length
      } skipped files because they are already on filesystem and are not updated)`
    );

    return [...resolverFilesGenerateOptions, ...generatesSection];
  },
};

const createProfilerRunName = (traceName: string): string =>
  `[${presetName}]: ${traceName}`;
