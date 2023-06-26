import { visit } from 'graphql';
import { ParsedSource } from '../parseSources';

/**
 * ```ts
 * Record<TypeName, Set<FieldName>>
 * ```
 */
export type ExtendObjectType = Record<string, Set<string>>;

export const getExtendObjectType = (
  parsedSources: ParsedSource[]
): ExtendObjectType => {
  const result: ExtendObjectType = {};

  parsedSources.forEach((source) => {
    if (!source.source.document) return;

    visit(source.source.document, {
      ObjectTypeExtension: (node) => {
        const typeName = node.name.value;
        node.fields?.forEach((field) => {
          if (!result[typeName]) {
            result[typeName] = new Set();
          }
          result[typeName].add(field.name.value);
        });
      },
    });
  });

  return result;
};
