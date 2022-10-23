import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { mkdir, writeFile } from 'fs/promises';
import { GraphQLObjectType, isObjectType } from 'graphql';
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
  const { resolverTypesPath } = config;
  const completeResolverTypesPath = path.join(baseOutputDir, resolverTypesPath);

  const result: Result = {
    dirs: [],
    files: {},
  };

  // DEBUG
  result.files['packages/typescript-resolver-files-e2e/src/graphql/test.json'] =
    { content: '' };

  //Handle all other types
  Object.entries(schema.getTypeMap())
    .filter(([schemaType]) => !schemaType.startsWith('__')) // There are a few internal types with `__` prefixes. We don't want them.
    .forEach(([schemaType, namedType]) => {
      if (isObjectType(namedType)) {
        const params: ParseObjectTypeParams = {
          baseOutputDir,
          completeResolverTypesPath,
          objectType: namedType,
        };
        switch (schemaType) {
          case 'Query':
          case 'Mutation':
          case 'Subscription':
            parseRootObjectType(params, result);
            break;
          default:
            parseObjectType(params, result);
            break;
        }
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
interface ParseObjectTypeParams {
  baseOutputDir: string;
  completeResolverTypesPath: string;
  objectType?: GraphQLObjectType | null;
}
type ParseObjectType = (params: ParseObjectTypeParams, result: Result) => void;
const parseRootObjectType: ParseObjectType = (
  { objectType, baseOutputDir, completeResolverTypesPath },
  result
) => {
  if (!objectType || !isRootObjectType(objectType.name)) {
    return;
  }

  const typeName = objectType.name;
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

    const relativePathToResolverTypes = relativeModulePath(
      outputDir,
      completeResolverTypesPath
    );
    const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin

    result.files[fieldFilePath] = {
      content: `import type { ${resolverTypeName} } from '${printImportModule(
        relativePathToResolverTypes
      )}';
      export const ${fieldName}: ${resolverTypeName}['${fieldName}'] = async (_parent, _arg, _ctx) => {
        /* Implement ${typeName}.${fieldName} resolver logic here */
      };`,
    };
  });
};

const parseObjectType: ParseObjectType = (
  { objectType, baseOutputDir, completeResolverTypesPath },
  result
) => {
  if (!objectType || isRootObjectType(objectType.name)) {
    return;
  }

  const typeName = objectType.name;
  const fieldFilePath = path.join(baseOutputDir, `${typeName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  const relativePathToResolverTypes = relativeModulePath(
    baseOutputDir,
    completeResolverTypesPath
  );
  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin

  result.files[fieldFilePath] = {
    content: `import type { ${resolverTypeName} } from '${printImportModule(
      relativePathToResolverTypes
    )}';
      export const ${typeName}: ${resolverTypeName} = { 
        /* Implement ${typeName} resolver logic here */ 
      };`,
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
