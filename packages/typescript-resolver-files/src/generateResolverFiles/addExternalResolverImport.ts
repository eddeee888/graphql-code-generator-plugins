import { normalizeRelativePath } from '../utils';
import type { GenerateResolverFilesContext } from './types';

interface AddExternalResolverImportParams {
  moduleName: string;
  relativePathFromBaseToModule: string[];
  normalizedResolverName: string;
  /*
   * configImportSyntax has 2 forms
   * 1. relative import:  <relativePath>#{default as AliasIdentifier|named_import (as AliasIdentifier)}
   * 2. absolute import: ~<absolutePath>#{default as AliasIdentifier|named_import (as AliasIdentifier)}
   */
  configImportSyntax: string;
}

/**
 * addExternalResolverImport
 *
 * External resolvers are resolvers that are not managed by server preset:
 * - unmanaged resolvers e.g. using config.externalResolvers or config.scalarsOverrides
 * - resolvers that come from an external module e.g. `graphql-scalars`
 *
 * 1. parse external resolvers (originally from ) import syntax
 * 2. dedupes any duplicated imports
 * 3. declares the which identifier name to use for GraphQL object or resolver in identifierUsages
 */
export const addExternalResolverImport = (
  params: AddExternalResolverImportParams,
  {
    result,
    config: { emitLegacyCommonJSImports },
  }: GenerateResolverFilesContext
): void => {
  const { importIdentifier, identifierUsage, moduleImport } =
    parseImportSyntax(params);

  let shouldPushIndentifierUsages = false;
  result.externalImports[moduleImport] =
    result.externalImports[moduleImport] ||
    ({
      moduleName: params.moduleName,
      relativePathFromBaseToModule: params.relativePathFromBaseToModule,
      importLineMeta: {
        isTypeImport: false,
        module: moduleImport,
        moduleType: 'preserve',
        namedImports: [],
        defaultImport: undefined,
        emitLegacyCommonJSImports,
      },
      identifierUsages: [],
    } satisfies GenerateResolverFilesContext['result']['externalImports'][number]);

  const { importLineMeta, identifierUsages } =
    result.externalImports[moduleImport];

  switch (importIdentifier.__type) {
    case 'default':
      if (
        importLineMeta.defaultImport &&
        importLineMeta.defaultImport !== importIdentifier.defaultImport
      ) {
        throw new Error(
          `There can be only one default import from '${moduleImport}'. Current: ${importLineMeta.defaultImport}. New: ${importIdentifier.defaultImport}`
        );
      }
      importLineMeta.defaultImport = importIdentifier.defaultImport;
      shouldPushIndentifierUsages = true;
      break;
    case 'named': {
      const foundSameImport = importLineMeta.namedImports.find(
        (existingImport) =>
          typeof existingImport === 'string' &&
          existingImport === importIdentifier.namedImport
      );
      if (!foundSameImport) {
        importLineMeta.namedImports.push(importIdentifier.namedImport);
        shouldPushIndentifierUsages = true;
      }
      break;
    }
    case 'namedWithAlias': {
      const foundSameImport = importLineMeta.namedImports.find(
        (existingImport) =>
          typeof existingImport === 'object' &&
          existingImport.identifierName === importIdentifier.identifierName &&
          existingImport.propertyName === importIdentifier.propertyName
      );
      if (!foundSameImport) {
        importLineMeta.namedImports.push({
          propertyName: importIdentifier.propertyName,
          identifierName: importIdentifier.identifierName,
        });
        shouldPushIndentifierUsages = true;
      }
      break;
    }
    default:
      // importIdentifier is `never` unless new __type is added
      // i.e. this is here for typesafety
      return importIdentifier;
  }

  if (shouldPushIndentifierUsages) {
    identifierUsages.push(identifierUsage);
  }
};

const parseImportSyntax = ({
  configImportSyntax,
  normalizedResolverName,
}: AddExternalResolverImportParams): {
  importIdentifier:
    | { __type: 'default'; defaultImport: string }
    | { __type: 'named'; namedImport: string }
    | {
        __type: 'namedWithAlias';
        propertyName: string;
        identifierName: string;
      };
  identifierUsage: { identifierName: string; normalizedResolverName: string };
  moduleImport: string;
} => {
  const isAbsoluteImport = configImportSyntax[0] === '~';

  const importStringWithoutRelativity = isAbsoluteImport
    ? configImportSyntax.slice(1)
    : configImportSyntax;

  const [rawModuleName, importIdentifier] =
    importStringWithoutRelativity.split('#');

  const moduleImport = isAbsoluteImport
    ? rawModuleName
    : normalizeRelativePath(rawModuleName);

  if (importIdentifier.startsWith('default')) {
    if (!importIdentifier.startsWith('default as ')) {
      throw new Error(
        `Invalid import syntax. "${configImportSyntax}": Default import must include identifier name e.g. moduleName#default as Identifier`
      );
    }
    const [_, defaultImportIdentifier] = importIdentifier.split('default as ');
    return {
      importIdentifier: {
        __type: 'default',
        defaultImport: defaultImportIdentifier,
      },
      identifierUsage: {
        identifierName: defaultImportIdentifier,
        normalizedResolverName,
      },
      moduleImport,
    };
  }

  const namedImportParts = importIdentifier.split(' as ');
  if (namedImportParts.length === 1) {
    return {
      importIdentifier: {
        __type: 'named',
        namedImport: namedImportParts[0],
      },
      identifierUsage: {
        identifierName: namedImportParts[0],
        normalizedResolverName,
      },
      moduleImport,
    };
  }

  return {
    importIdentifier: {
      __type: 'namedWithAlias',
      propertyName: namedImportParts[0],
      identifierName: namedImportParts[1],
    },
    identifierUsage: {
      identifierName: namedImportParts[1],
      normalizedResolverName,
    },
    moduleImport,
  };
};
