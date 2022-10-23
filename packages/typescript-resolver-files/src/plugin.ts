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

interface BaseVirtualFile {
  __filetype: string;
  content: string;
  mainImportIdentifier: string;
}
interface VirtualFile extends BaseVirtualFile {
  __filetype: 'file';
  content: string;
}

interface ResolverFile extends BaseVirtualFile {
  __filetype: 'resolver';
  meta: {
    belongsToRootObject: RootObjectType | null;
  };
}

interface Result {
  dirs: string[];
  files: Record<string, VirtualFile | ResolverFile>;
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

  // Put all resolvers into a barrel file
  addResolversIndexFile({ baseOutputDir, resolverTypesPath }, result);

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
  const typeName = type.name;
  if (!isRootObjectType(typeName)) {
    return;
  }

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
      __filetype: 'resolver',
      content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
      export const ${fieldName}: ${resolverTypeName}['${fieldName}'] = async (_parent, _arg, _ctx) => {
        /* Implement ${typeName}.${fieldName} resolver logic here */
      };`,
      mainImportIdentifier: fieldName,
      meta: { belongsToRootObject: typeName },
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
    __filetype: 'resolver',
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
      export const ${typeName}: ${resolverTypeName} = { 
        /* Implement ${typeName} resolver logic here */ 
      };`,
    mainImportIdentifier: typeName,
    meta: { belongsToRootObject: null },
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
    __filetype: 'resolver',
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
    export const ${typeName}: ${resolverTypeName} = { __resolveType: (parent) => parent.__typename };`,
    mainImportIdentifier: typeName,
    meta: { belongsToRootObject: null },
  };
};

interface AddResolversIndexFileParams {
  baseOutputDir: string;
  resolverTypesPath: string;
}
const addResolversIndexFile = (
  { baseOutputDir, resolverTypesPath }: AddResolversIndexFileParams,
  result: Result
): void => {
  const filename = path.join(baseOutputDir, 'index.ts');

  const relativePathToResolverTypes = relativeModulePath(
    baseOutputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);

  const resolversDetails = Object.entries(result.files).reduce<{
    importLines: string[];
    queryFields: string[];
    mutationFields: string[];
    subscriptionFields: string[];
    objectTypes: string[];
  }>(
    (res, [filepath, file]) => {
      if (file.__filetype === 'file') {
        return res;
      }

      const pathToModule = printImportModule(
        relativeModulePath(baseOutputDir, filepath)
      );
      res.importLines.push(
        `import { ${file.mainImportIdentifier} } from '${pathToModule}'`
      );

      if (!file.meta.belongsToRootObject) {
        res.objectTypes.push(file.mainImportIdentifier);
        return res;
      }
      const rootObjectMap: Record<RootObjectType, () => void> = {
        Query: () => res.queryFields.push(file.mainImportIdentifier),
        Mutation: () => res.mutationFields.push(file.mainImportIdentifier),
        Subscription: () =>
          res.subscriptionFields.push(file.mainImportIdentifier),
      };
      rootObjectMap[file.meta.belongsToRootObject]();

      return res;
    },
    {
      importLines: [],
      queryFields: [],
      mutationFields: [],
      subscriptionFields: [],
      objectTypes: [],
    }
  );

  const resolversIdentifier = 'resolvers';
  const resolversTypeName = 'Resolvers'; // Generated type from typescript-resolvers plugin

  const queries =
    resolversDetails.queryFields.length > 0
      ? `Query: { ${resolversDetails.queryFields
          .map((field) => field)
          .join(',\n')} },`
      : '';
  const mutations =
    resolversDetails.mutationFields.length > 0
      ? `Mutation: { ${resolversDetails.mutationFields
          .map((field) => field)
          .join(',\n')} },`
      : '';
  const suscriptions =
    resolversDetails.subscriptionFields.length > 0
      ? `Subscription: { ${resolversDetails.subscriptionFields
          .map((field) => field)
          .join(',\n')} },`
      : '';

  result.files[filename] = {
    __filetype: 'file',
    content: `/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type { ${resolversTypeName} } from '${pathToResolverModule}';
    ${resolversDetails.importLines.map((line) => line).join(';\n')}
    export const ${resolversIdentifier}: ${resolversTypeName} = {
      ${queries}
      ${mutations}
      ${suscriptions}
      ${resolversDetails.objectTypes.map((type) => type).join(',\n')}
    }`,
    mainImportIdentifier: 'resolvers',
  };
};

/* Utils */
const printImportModule = (moduleName: string) => {
  if (moduleName.endsWith('.ts')) {
    return moduleName.split('.').slice(0, -1).join('.');
  }
  return moduleName;
};

type RootObjectType = 'Query' | 'Mutation' | 'Subscription';
const isRootObjectType = (typeName: string): typeName is RootObjectType =>
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
