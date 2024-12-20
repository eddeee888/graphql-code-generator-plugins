import type { Types } from '@graphql-codegen/plugin-helpers';
import * as addPlugin from '@graphql-codegen/add';
import type { AddPluginConfig } from '@graphql-codegen/add/typings/config';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { GraphQLSchema } from 'graphql';
import type { SourceFile, Project } from 'ts-morph';
import type { ServerConfig } from '@eddeee888/gcg-server-config';
import type { GeneratedTypesFileMeta } from '../generateResolverFiles';

export const addVirtualTypesFileToTsMorphProject = async ({
  tsMorphProject,
  schemaAst,
  resolverTypesPath,
  resolverTypesConfig,
  addConfig,
}: {
  tsMorphProject: Project;
  schemaAst: GraphQLSchema;
  resolverTypesPath: string;
  resolverTypesConfig: ServerConfig;
  addConfig?: AddPluginConfig;
}): Promise<{
  typesSourceFile: SourceFile;
  meta: GeneratedTypesFileMeta;
}> => {
  const typesFile = await generateVirtualTypesFile({
    schemaAst,
    resolverTypesPath,
    resolverTypesConfig,
    addConfig,
  });

  const typesSourceFile = tsMorphProject.createSourceFile(
    typesFile.filePath,
    typesFile.content,
    { overwrite: true }
  );

  return { typesSourceFile, meta: typesFile.meta };
};

/**
 * getVirtualTypesFile generates a virtual types.generated.ts file
 * This is used to statically detect and compare types in the parse and post-process steps
 */
const generateVirtualTypesFile = async ({
  schemaAst,
  resolverTypesPath,
  resolverTypesConfig,
  addConfig,
}: {
  schemaAst: GraphQLSchema;
  resolverTypesPath: string;
  resolverTypesConfig: ServerConfig;
  addConfig?: AddPluginConfig;
}): Promise<{
  filePath: string;
  content: string;
  meta: GeneratedTypesFileMeta;
}> => {
  const [typescriptResult, typescriptResolversResult, addResult] =
    await Promise.all([
      typeScriptPlugin.plugin(schemaAst, [], resolverTypesConfig),
      typeScriptResolversPlugin.plugin(schemaAst, [], resolverTypesConfig),
      addConfig ? addPlugin.plugin(schemaAst, [], addConfig) : '',
    ]);

  const addResultAsComplextOutput =
    convertPluginOutputToComplextPluginOutput(addResult);

  const print = (value: string[] | undefined): string =>
    value ? value.join('\n') : '';

  return {
    filePath: resolverTypesPath,
    content: `
    ${print(addResultAsComplextOutput.prepend)}
    ${print(typescriptResult.prepend)}
    ${print(typescriptResolversResult.prepend)}
    ${typescriptResult.content}
    ${typescriptResolversResult.content}
    ${addResultAsComplextOutput.content}
    ${print(addResultAsComplextOutput.append)}
    `,
    meta: {
      generatedResolverTypes: typescriptResolversResult.meta
        ?.generatedResolverTypes || {
        resolversMap: { name: 'Resolvers' },
        userDefined: {},
      },
    },
  };
};

const convertPluginOutputToComplextPluginOutput = (
  output: Types.PluginOutput
): Types.ComplexPluginOutput => {
  if (typeof output === 'string') {
    return {
      content: output || '',
    };
  }

  if (Array.isArray(output.content)) {
    output.content = output.content.join('\n');
  }
  return output;
};
