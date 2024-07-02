import { mergeTypeDefs } from '@graphql-tools/merge';

interface GenerateTypeDefsContentParams {
  mergedSDL: string;
}

export const generateTypeDefsContent = ({
  mergedSDL,
}: GenerateTypeDefsContentParams): string => {
  const documentNode = mergeTypeDefs(mergedSDL, { noLocation: true });
  const documentNodeString = JSON.stringify(documentNode);

  return `import type { DocumentNode } from 'graphql';
  export const typeDefs = ${documentNodeString} as unknown as DocumentNode`;
};
