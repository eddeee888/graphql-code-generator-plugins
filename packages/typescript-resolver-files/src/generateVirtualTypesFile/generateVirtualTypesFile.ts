import * as typeScriptPlugin from '@graphql-codegen/typescript';
import * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { GraphQLSchema } from 'graphql';

export interface VirtualTypesFile {
  filePath: string;
  content: string;
}

/**
 * getVirtualTypesFile generates a virtual types.generated.ts file
 * This is used to statically detect and compare types in the parse and post-process steps
 */
export const generateVirtualTypesFile = async ({
  schemaAst,
  resolverTypesPath,
  resolverTypesConfig,
}: {
  schemaAst: GraphQLSchema;
  resolverTypesPath: string;
  resolverTypesConfig: Record<string, unknown>;
}): Promise<VirtualTypesFile> => {
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
