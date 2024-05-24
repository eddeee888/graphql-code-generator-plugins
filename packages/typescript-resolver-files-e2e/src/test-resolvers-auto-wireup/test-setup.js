const fs = require('fs');
const path = require('path');

try {
  const files = [
    // Exists in the schema, should be filled with content
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/base/resolvers/Error.ts',
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/topic/resolvers/TopicCreatePayload.ts',
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/topic/resolvers/TopicCreateResult.ts',

    // Random file should not be filled
    'packages/typescript-resolver-files-e2e/src/test-resolvers-auto-wireup/schema/topic/resolvers/RandomFile_ShouldHaveEmptyContent.ts',
  ];

  files.forEach((file) => {
    const dir = path.dirname(file);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, '');
  });
} catch (err) {
  console.error(err);
}
