const fs = require('fs');
const path = require('path');

try {
  const files = [
    // Exists in the schema, should be filled with content
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/base/resolvers/Error.ts',
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/topic/resolvers/TopicCreatePayload.ts',
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/topic/resolvers/TopicCreateResult.ts',
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/pet/resolvers/User.ts',

    // Existing Scalar file, must not re-import GraphQLScalarType
    {
      file: 'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/base/resolvers/CustomLogicScalar.ts',
      content: `import { DateResolver} from 'graphql-scalars'
      DateResolver.description = undefined;
      export const CustomLogicScalar = DateResolver;
      `,
    },

    // Files in blacklisted modules should not be filled or added to resolvers.generated.ts
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/user/resolvers/User.ts',

    // Should handle `extend type` correctly if the extension happens _after_ the initial type definition in a blacklisted module
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/zoo/resolvers/Profile.ts',

    // Random file should not be filled
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/topic/resolvers/RandomFile_ShouldHaveEmptyContent.ts',
  ];

  files.forEach((item) => {
    let filename;
    let content = '';

    if (typeof item === 'string') {
      filename = item;
    } else {
      filename = item.file;
      content = item.content;
    }

    const dir = path.dirname(filename);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filename, content);
  });
} catch (err) {
  console.error(err);
}
