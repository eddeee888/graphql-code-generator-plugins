export type RootObjectType = 'Query' | 'Mutation' | 'Subscription';

export const isRootObjectType = (
  typeName: string
): typeName is RootObjectType =>
  typeName === 'Query' ||
  typeName === 'Mutation' ||
  typeName === 'Subscription';
