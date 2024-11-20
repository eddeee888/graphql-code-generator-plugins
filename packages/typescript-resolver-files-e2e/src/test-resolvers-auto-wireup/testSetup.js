const { createTestSetup } = require('../utils/createTestSetup');

createTestSetup({
  baseDir:
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/',
  files: [
    // Exists in the schema, should be filled with content
    'schema/base/resolvers/Error.ts',
    'schema/topic/resolvers/TopicCreatePayload.ts',
    'schema/topic/resolvers/TopicCreateResult.ts',
    'schema/pet/resolvers/User.ts',

    // Exisiting empty object type file and mapper causing comment + variable to be added, should successfully fill with content
    // https://github.com/eddeee888/graphql-code-generator-plugins/pull/297
    'schema/topic/resolvers/TopicEditResult.ts',

    // Object types with `Pick` type with a correct type but differently formatted should not be re-generated
    {
      file: 'schema/pet/resolvers/Zoo.ts',
      content: `import type { ZooResolvers } from './../../types.generated';
export const Zoo: Pick<
  ZooResolvers,
  | 'favouritePet'
  | 'pets'
  | 'rating'
  | '__isTypeOf'
> = { /* Custom */ };
`,
    },

    // Existing object type file with wrong type and no type import, should import type and replace wrong type
    {
      file: 'schema/pet/resolvers/Pet.ts',
      content: `export const Pet: Record<string,never> = {};`,
    },

    // Existing object type file with no type and no type import, should import type and add type
    {
      file: 'schema/pet/resolvers/PetToy.ts',
      content: `export const PetToy = {};`,
    },

    // Existing Scalar file, must not re-import GraphQLScalarType
    {
      file: 'schema/base/resolvers/CustomLogicScalar.ts',
      content: `import { DateResolver} from 'graphql-scalars'
      DateResolver.description = undefined;
      export const CustomLogicScalar = DateResolver;
      `,
    },
    // If there's custom Scalar definition, use it instead of importing from scalars module (e.g. graphql-scalars)
    {
      file: 'schema/base/resolvers/JSON.ts',
      content: `import { JSONResolver} from 'graphql-scalars'
      export const JSON = JSONResolver;
      `,
    },

    // Empty Enum file should be filled with content
    'schema/base/resolvers/ErrorType.ts',

    // Existing Enum File should be edited:
    // - Add missing import line
    // - Add missing export
    // - Do not add missing enum allowed values
    {
      file: 'schema/base/resolvers/SortOrder.ts',
      content: `const SortOrder = {
        ASC: 'ASCENDING',
      }
      `,
    },

    // `externalOverrides` gives full control to user
    {
      file: 'schema/pet/resolvers/PetHouse.ts',
      content: `export const PetHouseResolvers = {};`,
    },

    // `scalarOverrides` must give full control to user
    // https://github.com/eddeee888/graphql-code-generator-plugins/issues/306
    {
      file: 'schema/base/resolvers/Date.ts',
      content: `export const DateResolver = {}`,
    },

    // Files in blacklisted modules should not be filled or added to resolvers.generated.ts
    'schema/user/resolvers/User.ts',

    // Should handle `extend type` correctly if the extension happens _after_ the initial type definition in a blacklisted module
    'schema/zoo/resolvers/Profile.ts',

    // Random file should not be filled
    'schema/topic/resolvers/RandomFile_ShouldHaveEmptyContent.ts',
  ],
});
