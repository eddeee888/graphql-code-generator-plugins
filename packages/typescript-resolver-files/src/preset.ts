import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';
import { Project } from 'ts-morph';
import { defineServerConfig } from '@eddeee888/gcg-server-config';
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
import { RawPresetConfig, validatePresetConfig } from './validatePresetConfig';
import { validateAndMergeParsedConfigs } from './validateAndMergeParsedConfigs';

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
      resolverTypesPath: relativeResolverTypesPathFromBaseOutputDir,
      resolverRelativeTargetDir,
      mappersFileExtension: typeMappersFileExtension,
      mappersSuffix: typeMappersSuffix,
      resolverMainFile,
      resolverMainFileMode,
      resolverGeneration,
      typeDefsFilePath,
      typeDefsFileMode,
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

    const { sourceMap } = parseSources(sources);

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
          shouldCollectPropertyMap: fixObjectTypeResolvers !== 'disabled',
          emitLegacyCommonJSImports,
        }),
      createProfilerRunName('parseTypeMappers')
    );

    const generatesSection: Types.GenerateOptions[] = [];

    const parsedGraphQLSchemaMeta = await parseGraphQLSchema({
      schemaAst,
      sourceMap,
      scalarsModule,
      scalarsOverrides,
      typeMappersMap,
      whitelistedModules,
      blacklistedModules,
    });

    const mergedConfig = validateAndMergeParsedConfigs({
      externalResolvers,
      parsedGraphQLSchemaMeta,
    });

    // typescript and typescript-resolvers plugins config
    const resolverTypesConfig = defineServerConfig({
      emitLegacyCommonJSImports,
      ...typesPluginsConfig,
      scalars: {
        ...mergedConfig.scalarTypes,
      },
      mappers: {
        ...mergedConfig.typeMappers,
        ...typesPluginsConfig.mappers,
      },
    });

    // typesSourceFile is the virtual `types.generated.ts`
    // This is useful when we need to do static analysis as most types come from this file
    // e.g. comparing mappers field type vs schema object field type
    const typesSourceFile = await profiler.run(
      () =>
        addVirtualTypesFileToTsMorphProject({
          tsMorphProject,
          schemaAst,
          resolverTypesConfig,
          resolverTypesPath,
        }),
      createProfilerRunName('addVirtualTypesFileToTsMorphProject')
    );

    const graphQLObjectTypeResolversToGenerate = await profiler.run(
      async () =>
        getGraphQLObjectTypeResolversToGenerate({
          typesSourceFile,
          userDefinedSchemaObjectTypeMap:
            mergedConfig.userDefinedSchemaTypeMap.object,
          typeMappersMap,
        }),
      createProfilerRunName('graphQLObjectTypeResolversToGenerate')
    );
    const resolverTypesFile: Types.GenerateOptions = {
      filename: resolverTypesPath,
      pluginMap: {
        typescript: typeScriptPlugin,
        'typescript-resolvers': typeScriptResolversPlugin,
      },
      plugins: [{ typescript: {} }, { ['typescript-resolvers']: {} }],
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

    // resolver files
    const result: GenerateResolverFilesContext['result'] = {
      files: {},
      externalImports: {},
    };
    await profiler.run(
      async () =>
        generateResolverFiles({
          config: {
            schema: schemaAst,
            sourceMap,
            baseOutputDir,
            resolverTypesPath,
            resolverRelativeTargetDir,
            resolverMainFile,
            resolverMainFileMode,
            resolverGeneration,
            graphQLObjectTypeResolversToGenerate,
            tsMorph: {
              project: tsMorphProject,
              typesSourceFile,
            },
            fixObjectTypeResolvers,
            mode,
            whitelistedModules,
            blacklistedModules,
            externalResolvers: {
              ...mergedConfig.externalResolvers,
            },
            emitLegacyCommonJSImports,
          },
          result,
        }),
      createProfilerRunName('generateResolverFiles')
    );
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

const createProfilerRunName = (traceName: string): string =>
  `[${presetName}]: ${traceName}`;
