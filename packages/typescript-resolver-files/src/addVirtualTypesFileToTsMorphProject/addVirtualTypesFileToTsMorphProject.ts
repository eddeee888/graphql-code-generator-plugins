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
}: {
  tsMorphProject: Project;
  schemaAst: GraphQLSchema;
  resolverTypesPath: string;
  resolverTypesConfig: ServerConfig;
}): Promise<SourceFile> => {
  const typesFile = await generateVirtualTypesFile({
    schemaAst,
    resolverTypesPath,
    resolverTypesConfig,
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
}: {
  schemaAst: GraphQLSchema;
  resolverTypesPath: string;
  resolverTypesConfig: ServerConfig;
}): Promise<{
  filePath: string;
  content: string;
}> => {
  const [typescriptResult, typescriptResolversResult] = await Promise.all([
    typeScriptPlugin.plugin(schemaAst, [], resolverTypesConfig),
    typeScriptResolversPlugin.plugin(schemaAst, [], resolverTypesConfig),
  ]);

  return {
    filePath: resolverTypesPath,
    content: `
    ${typescriptResult.prepend?.join('\n')}
    ${typescriptResolversResult.prepend?.join('\n')}
    ${typescriptResult.content}${typescriptResolversResult.content}`,
  };
};
