import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import * as schemaAstPlugin from '@graphql-codegen/schema-ast';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import { plugin as typeScriptResolversPlugin } from '@graphql-codegen/typescript-resolvers';
import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';
import { Project } from 'ts-morph';
import { defineConfig as defineServerConfig } from '@eddeee888/gcg-server-config';
import { parseSources } from './parseSources/index.js';
import { parseGraphQLSchema } from './parseGraphQLSchema/index.js';
import {
  type GenerateResolverFilesContext,
  generateResolverFiles,
} from './generateResolverFiles/index.js';
import { generateTypeDefsFiles } from './generateTypeDefsFiles/index.js';
import { getGraphQLObjectTypeResolversToGenerate } from './getGraphQLObjectTypeResolversToGenerate/index.js';
import { addVirtualTypesFileToTsMorphProject } from './addVirtualTypesFileToTsMorphProject/index.js';
import { parseTypeMappers } from './parseTypeMappers/index.js';
import {
  type RawPresetConfig,
  validatePresetConfig,
} from './validatePresetConfig/index.js';
import { validateAndMergeParsedConfigs } from './validateAndMergeParsedConfigs/index.js';
import { normalizeAddConfigPath } from './normalizeAddConfigPath/index.js';
import { logger } from './utils/index.js';

export const presetName = '@eddeee888/gcg-typescript-resolver-files';

let tsMorphProject: Project;

export const preset: Types.OutputPreset<RawPresetConfig> = {
  buildGeneratesSection: async ({
    schema,
    schemaAst,
    presetConfig: rawPresetConfig,
    baseOutputDir,
    config: baseConfig,
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
      mappersRelativeTargetDir: typeMappersRelativeTargetDir,
      mappersFileExtension: typeMappersFileExtension,
      mappersSuffix: typeMappersSuffix,
      resolverMainFile,
      resolverMainFileMode,
      resolverGeneration,
      typeDefsFilePath,
      typeDefsFileMode,
      mergeSchema,
      moduleNamingMode,
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
      importExtension,
    } = validatePresetConfig(rawPresetConfig, baseConfig);

    const resolverTypesPath = path.posix.join(
      baseOutputDir,
      relativeResolverTypesPathFromBaseOutputDir
    );

    const normalizedAdd = normalizeAddConfigPath({ add, baseOutputDir });

    const { sourceMap } = parseSources({
      sources,
      baseOutputDir,
      moduleNamingMode,
    });

    if (!tsMorphProject) {
      tsMorphProject = await profiler.run(
        async () => new Project(tsMorphProjectOptions),
        createProfilerRunName('Initialising ts-morph project')
      );
    } else {
      await profiler.run(async () => {
        tsMorphProject
          .getSourceFiles()
          .forEach((sourceFile) => sourceFile.refreshFromFileSystemSync());
      }, createProfilerRunName('Refreshing ts-morph project files'));
    }

    const typeMappersMap = await profiler.run(
      async () =>
        parseTypeMappers({
          sourceMap,
          resolverTypesPath,
          typeMappersRelativeTargetDir,
          typeMappersFileExtension,
          typeMappersSuffix,
          tsMorphProject,
          emitLegacyCommonJSImports,
          importExtension,
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
        fixObjectTypeResolvers.object === 'disabled'
          ? {}
          : getGraphQLObjectTypeResolversToGenerate({
              mode: fixObjectTypeResolvers.object,
              tsMorphProject,
              typesSourceFile,
              userDefinedSchemaObjectTypeMap:
                mergedConfig.userDefinedSchemaTypeMap.object,
              typeMappersMap,
              generatedTypesFileMeta,
            }),
      createProfilerRunName('getGraphQLObjectTypeResolversToGenerate')
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
        'typescript-resolvers': { plugin: typeScriptResolversPlugin },
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
          // Pass schemaAst so codegen-core reuses the prebuilt schema instead of
          // rebuilding one per output (O(types) each -> O(types^2) overall). This
          // is an `add`-only output, so the schema doesn't affect its content.
          schemaAst,
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
            importExtension,
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
            // Pass schemaAst so codegen-core reuses the prebuilt schema instead of
            // rebuilding one per output (O(types) each -> O(types^2) overall). This
            // is an `add`-only output, so the schema doesn't affect its content.
            schemaAst,
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
