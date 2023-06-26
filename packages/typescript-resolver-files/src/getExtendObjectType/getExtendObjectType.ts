import { Location, visit } from 'graphql';
import { ParsedSource } from '../parseSources';

/**
 * ```ts
 * Record<TypeName, Set<FieldName>>
 * ```
 */
export type ExtendObjectType = Record<
  string,
  {
    extendedFields: Set<string>;
    realLocation?: Location;
  }
>;

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
            result[typeName] = {
              extendedFields: new Set(),
            };
          }
          result[typeName].extendedFields.add(field.name.value);
        });
      },
      ObjectTypeDefinition: (node) => {
        const typeName = node.name.value;
        if (!result[typeName]) {
          result[typeName] = {
            extendedFields: new Set(),
          };
        }
        result[typeName].realLocation = node.loc;
      },
    });
  });

  return result;
};
