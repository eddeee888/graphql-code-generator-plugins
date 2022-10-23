import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { mkdir, writeFile } from 'fs/promises';
import {
  GraphQLObjectType,
  GraphQLUnionType,
  isObjectType,
  isUnionType,
} from 'graphql';
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
  _documents,
  config,
  info
) => {
  // TODO: check if there's a better way to handle output dir
  const baseOutputDir = info?.outputFile;
  if (!baseOutputDir) {
    throw new Error('Output folder is invalid');
  }
  const { resolverTypesPath: relativeResolverTypesPathFromBaseOutputDir } =
    config;
  const resolverTypesPath = path.join(
    baseOutputDir,
    relativeResolverTypesPathFromBaseOutputDir
  );

  const result: Result = {
    dirs: [],
    files: {},
  };

  // DEBUG
  result.files['packages/typescript-resolver-files-e2e/src/graphql/test.json'] =
    { content: '' };

  // Handle GraphQL types
  Object.entries(schema.getTypeMap())
    .filter(([schemaType]) => !schemaType.startsWith('__')) // There are a few internal types with `__` prefixes. We don't want them.
    .forEach(([schemaType, namedType]) => {
      if (isObjectType(namedType)) {
        switch (schemaType) {
          case 'Query':
          case 'Mutation':
          case 'Subscription':
            parseRootObjectType(
              {
                baseOutputDir,
                resolverTypesPath,
                type: namedType,
              },
              result
            );
            break;
          default:
            parseObjectType(
              {
                baseOutputDir,
                resolverTypesPath,
                type: namedType,
              },
              result
            );
            break;
        }
      } else if (isUnionType(namedType)) {
        parseUnionType(
          { baseOutputDir, resolverTypesPath, type: namedType },
          result
        );
      }
    });

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
interface ParseGraphQLTypeParams<T> {
  baseOutputDir: string;
  resolverTypesPath: string;
  type: T;
}

type ParseGraphQLType<T> = (
  params: ParseGraphQLTypeParams<T>,
  result: Result
) => void;
const parseRootObjectType: ParseGraphQLType<GraphQLObjectType> = (
  { type, baseOutputDir, resolverTypesPath },
  result
) => {
  if (!isRootObjectType(type.name)) {
    return;
  }

  const typeName = type.name;
  const fields = type.getFields();
  const outputDir = path.join(baseOutputDir, typeName);

  result.dirs.push(outputDir);

  Object.keys(fields).forEach((fieldName) => {
    const fieldFilePath = path.join(outputDir, `${fieldName}.ts`);
    if (result.files[fieldFilePath]) {
      throw new Error(
        `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
      );
    }

    const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
    const relativePathToResolverTypes = relativeModulePath(
      outputDir,
      resolverTypesPath
    );
    const pathToResolverModule = printImportModule(relativePathToResolverTypes);

    result.files[fieldFilePath] = {
      content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
      export const ${fieldName}: ${resolverTypeName}['${fieldName}'] = async (_parent, _arg, _ctx) => {
        /* Implement ${typeName}.${fieldName} resolver logic here */
      };`,
    };
  });
};

const parseObjectType: ParseGraphQLType<GraphQLObjectType> = (
  { type, baseOutputDir, resolverTypesPath },
  result
) => {
  if (isRootObjectType(type.name)) {
    return;
  }

  const typeName = type.name;
  const fieldFilePath = path.join(baseOutputDir, `${typeName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
  const relativePathToResolverTypes = relativeModulePath(
    baseOutputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);

  result.files[fieldFilePath] = {
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
      export const ${typeName}: ${resolverTypeName} = { 
        /* Implement ${typeName} resolver logic here */ 
      };`,
  };
};

const parseUnionType: ParseGraphQLType<GraphQLUnionType> = (
  { baseOutputDir, resolverTypesPath, type },
  result
) => {
  const typeName = type.name;
  const fieldFilePath = path.join(baseOutputDir, `${typeName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
  const relativePathToResolverTypes = relativeModulePath(
    baseOutputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);

  result.files[fieldFilePath] = {
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
    export const ${typeName}: ${resolverTypeName} = { __resolveType: (parent) => parent.__typename };`,
  };
};

/* Utils */
const printImportModule = (moduleName: string) => {
  if (moduleName.endsWith('.ts')) {
    return moduleName.split('.').slice(0, -1).join('.');
  }
  return moduleName;
};

const isRootObjectType = (
  typeName: string
): typeName is 'Query' | 'Mutation' | 'Subscription' =>
  typeName === 'Query' ||
  typeName === 'Mutation' ||
  typeName === 'Subscription';

const relativeModulePath = (from: string, to: string) => {
  const rawPath = path.relative(from, to);

  if (!rawPath.startsWith('../') || !rawPath.startsWith('./')) {
    return `./${rawPath}`;
  }

  return rawPath;
};
