import { SyntaxKind, type SourceFile } from 'ts-morph';
import type { EnumResolverFile } from './types';
import { getVariableStatementWithExpectedIdentifier } from './getVariableStatementWithExpectedIdentifier';

export const ensureEnumTypeResolversAreGenerated = (
  sourceFile: SourceFile,
  resolverFile: EnumResolverFile
): void => {
  const { variableStatement } = getVariableStatementWithExpectedIdentifier(
    sourceFile,
    resolverFile
  );

  if (!variableStatement) {
    throw new Error(
      'Missing variableStatement in ensureEnumTypeResolversAreGenerated.'
    );
  }

  const allowedValuesMap = resolverFile.meta.allowedValues.reduce<
    Record<string, { implemented: boolean }>
  >((res, allowedValue) => {
    res[allowedValue] = { implemented: false };
    return res;
  }, {});

  // Mark allowed value as implemented if found
  variableStatement
    .getDescendantsOfKind(SyntaxKind.PropertyAssignment)
    .forEach((propertyAssignment) => {
      const propertyName = propertyAssignment.getName();
      if (allowedValuesMap[propertyName]) {
        allowedValuesMap[propertyName].implemented = true;
      }
    });

  // Add unimplemented allowed values
  Object.entries(allowedValuesMap).forEach(
    ([allowedValue, { implemented }]) => {
      if (!implemented) {
        variableStatement
          .getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)[0]
          .addPropertyAssignment({
            name: allowedValue,
            initializer: `'${allowedValue}'`,
          });
      }
    }
  );
};
