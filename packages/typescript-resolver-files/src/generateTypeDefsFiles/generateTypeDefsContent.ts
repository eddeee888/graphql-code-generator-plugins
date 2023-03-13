import { parse } from 'graphql';

interface GenerateTypeDefsContentParams {
  mergedSDL: string;
}

export const generateTypeDefsContent = ({
  mergedSDL,
}: GenerateTypeDefsContentParams): string => {
  const documentNode = parse(mergedSDL);
  const documentNodeString = JSON.stringify(documentNode);

  return `import type { DocumentNode } from 'graphql';
  export const typeDefs = ${documentNodeString} as unknown as DocumentNode`;
};
