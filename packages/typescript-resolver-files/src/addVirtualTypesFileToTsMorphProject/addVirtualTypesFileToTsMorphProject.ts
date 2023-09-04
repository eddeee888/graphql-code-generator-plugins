import type { Types } from '@graphql-codegen/plugin-helpers';
import * as addPlugin from '@graphql-codegen/add';
import type { AddPluginConfig } from '@graphql-codegen/add/typings/config';
import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { GraphQLSchema } from 'graphql';
import { type SourceFile, Project } from 'ts-morph';
import type { ServerConfig } from '@eddeee888/gcg-server-config';

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
}): Promise<SourceFile> => {
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

  return typesSourceFile;
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
}> => {
  const [typescriptResult, typescriptResolversResult, addResult] =
    await Promise.all([
      typeScriptPlugin.plugin(schemaAst, [], resolverTypesConfig),
      typeScriptResolversPlugin.plugin(schemaAst, [], resolverTypesConfig),
      addConfig ? addPlugin.plugin(schemaAst, [], addConfig) : '',
    ]);

  const addResultAsComplextOutput =
    convertPluginOutputToComplextPluginOutput(addResult);

  return {
    filePath: resolverTypesPath,
    content: `
    ${addResultAsComplextOutput.prepend?.join('\n')}
    ${typescriptResult.prepend?.join('\n')}
    ${typescriptResolversResult.prepend?.join('\n')}
    ${typescriptResult.content}
    ${typescriptResolversResult.content}
    ${addResultAsComplextOutput.content}
    ${addResultAsComplextOutput.append?.join('\n')}
    `,
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
