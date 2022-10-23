import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { mkdir, writeFile } from 'fs/promises';
import type { GraphQLObjectType } from 'graphql';
import * as path from 'path';

interface PluginConfig {
  resolverTypesPath: string;
}

interface File {
  content: string;
}

interface Result {
  dirs: string[];
  files: Record<string, File>;
}

export const plugin: PluginFunction<PluginConfig> = async (
  schema,
  documents,
  config,
  info
) => {
  // TODO: check if there's a better way to handle output dir
  const baseOutputDir = info?.outputFile;
  if (!baseOutputDir) {
    throw new Error('Output folder is invalid');
  }
  const { resolverTypesPath } = config;
  const completeResolverTypesPath = path.join(baseOutputDir, resolverTypesPath);

  const result: Result = {
    dirs: [],
    files: {},
  };

  // Handle Query fields
  parseRootGraphQLType(
    {
      baseOutputDir,
      completeResolverTypesPath,
      objectType: schema.getQueryType(),
    },
    result
  );

  // Handle Mutation fields
  parseRootGraphQLType(
    {
      baseOutputDir,
      completeResolverTypesPath,
      objectType: schema.getMutationType(),
    },
    result
  );

  // Handle Subscription fields
  parseRootGraphQLType(
    {
      baseOutputDir,
      completeResolverTypesPath,
      objectType: schema.getSubscriptionType(),
    },
    result
  );

  // Write dirs and files
  await Promise.all(
    result.dirs.map(async (dir) => await mkdir(dir, { recursive: true }))
  );
  await Promise.all(
    Object.entries(result.files).map(
      async ([filePath, file]) => await writeFile(filePath, file.content)
    )
  );

  return { content: '' };
};

/* GraphQL stuff */
type ParseRootGraphQLType = (
  params: {
    baseOutputDir: string;
    completeResolverTypesPath: string;
    objectType?: GraphQLObjectType | null;
  },
  result: Result
) => void;
const parseRootGraphQLType: ParseRootGraphQLType = (
  { objectType, baseOutputDir, completeResolverTypesPath },
  result
) => {
  if (!objectType) {
    return;
  }

  const typeName = objectType.name; // Query, Mutation, Subscription
  const fields = objectType.getFields();
  const outputDir = path.join(baseOutputDir, typeName);

  result.dirs.push(outputDir);

  Object.keys(fields).forEach((fieldName) => {
    const fieldFilePath = path.join(outputDir, `${fieldName}.ts`);
    if (result.files[fieldFilePath]) {
      throw new Error(
        `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
      );
    }

    const relativePathToResolverTypes = path.relative(
      outputDir,
      completeResolverTypesPath
    );
    const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin

    result.files[fieldFilePath] = {
      content: `import type { ${resolverTypeName} } from '${printImportModule(
        relativePathToResolverTypes
      )}';
        export const ${fieldName}: ${resolverTypeName}['${fieldName}'] = async (_parent, _arg, _ctx) => {
          /* Implement ${typeName}.${fieldName} logic here */
        };`,
    };
  });
};

/* File Utils */
const printImportModule = (moduleName: string) => {
  if (moduleName.endsWith('.ts')) {
    return moduleName.split('.').slice(0, -1).join('.');
  }
  return moduleName;
};
