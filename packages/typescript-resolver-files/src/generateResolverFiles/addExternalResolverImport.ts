import { normalizeRelativePath } from '../utils';
import type { GenerateResolverFilesContext } from './types';

interface AddExternalResolverImportParams {
  normalizedResolverName: string;
  /*
   * configImportSyntax has 2 forms
   * 1. relative import:  <relativePath>#{default as AliasIdentifier|named_import (as AliasIdentifier)}
   * 2. absolute import: ~<absolutePath>#{default as AliasIdentifier|named_import (as AliasIdentifier)}
   */
  configImportSyntax: string;
}

export const addExternalResolverImport = (
  params: AddExternalResolverImportParams,
  { result }: GenerateResolverFilesContext
): void => {
  const { importIdentifier, identifierUsage, moduleImport } =
    parseImportSyntax(params);

  result.externalImports[moduleImport] =
    result.externalImports[moduleImport] ||
    ({
      importLineMeta: {
        isTypeImport: false,
        module: moduleImport,
        namedImports: [],
        defaultImport: undefined,
      },
      identifierUsages: [],
    } as GenerateResolverFilesContext['result']['externalImports'][number]);

  const externalImport = result.externalImports[moduleImport];

  switch (importIdentifier.__type) {
    case 'default':
      if (
        externalImport.importLineMeta.defaultImport &&
        externalImport.importLineMeta.defaultImport !==
          importIdentifier.defaultImport
      ) {
        throw new Error(
          `There can be only one default import from '${moduleImport}'. Current: ${externalImport.importLineMeta.defaultImport}. New: ${importIdentifier.defaultImport}`
        );
      }
      externalImport.importLineMeta.defaultImport =
        importIdentifier.defaultImport;
      break;
    case 'named':
      externalImport.importLineMeta.namedImports.push(
        importIdentifier.namedImport
      );
      break;
    case 'namedWithAlias':
      externalImport.importLineMeta.namedImports.push({
        propertyName: importIdentifier.propertyName,
        identifierName: importIdentifier.identifierName,
      });
      break;
    default:
      // importIdentifier is `never` unless new __type is added
      // i.e. this is here for typesafety
      return importIdentifier;
  }

  externalImport.identifierUsages.push(identifierUsage);
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
