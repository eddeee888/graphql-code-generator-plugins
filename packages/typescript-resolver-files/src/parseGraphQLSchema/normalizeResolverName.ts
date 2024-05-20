import type { RootObjectType } from '../utils';

export interface NormalizedResolverName {
  base: string;
  withModule: string;
}

/**
 * Function to get format resolver name based on its definition in the schema
 * - Root object type resolver e.g Query.me, Mutation.updateUser
 * - Object type e.g. User, Profile
 *
 * Returns an object with 2 key/value pairs:
 *   - base: resolver name without module. This is used by to match up with config.externalResolvers.
 *   - withModule: resolver name with module. This is used to identify the resolver INTERNAL unique path used in main resolver files.
 */
export const normalizeResolverName = (
  moduleName: string,
  name: string,
  rootObject: RootObjectType | null
): NormalizedResolverName => {
  const baseResolverName = !rootObject ? name : `${rootObject}.${name}`;

  return {
    base: baseResolverName,
    withModule: `${moduleName}.${baseResolverName}`,
  };
};
