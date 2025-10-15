import {
  paramCase,
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  lowerCase,
  noCase,
  pathCase,
  sentenceCase,
  snakeCase,
  titleCase,
  upperCase
} from 'change-case-all';
import type { FileOutputCasing } from '../validatePresetConfig';

/**
 * Transforms a resolver name to the appropriate filename based on casing configuration
 * @param resolverName - The original resolver name (typically a GraphQL type name like "User", "Profile")
 * @param fileOutputCasing - The desired file naming case format
 * @returns The transformed filename without extension
 */
export const transformResolverFileName = (
  resolverName: string,
  fileOutputCasing: FileOutputCasing
): string => {
  switch (fileOutputCasing) {
    case 'param-case':
    case 'kebab-case':
      return paramCase(resolverName);
    case 'camel-case':
      return camelCase(resolverName);
    case 'capital-case':
      return capitalCase(resolverName);
    case 'constant-case':
      return constantCase(resolverName);
    case 'dot-case':
      return dotCase(resolverName);
    case 'header-case':
      return headerCase(resolverName);
    case 'lower-case':
      return lowerCase(resolverName);
    case 'no-case':
      return noCase(resolverName);
    case 'path-case':
      return pathCase(resolverName);
    case 'sentence-case':
      return sentenceCase(resolverName);
    case 'snake-case':
      return snakeCase(resolverName);
    case 'title-case':
      return titleCase(resolverName);
    case 'upper-case':
      return upperCase(resolverName);
    case 'pascal-case':
    default:
      return resolverName;
  }
};
