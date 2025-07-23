import * as fs from 'fs';
import * as path from 'path';

export const createTestSetup = ({
  baseDir,
  files,
}: {
  baseDir: string;
  files: (string | { file: string; content: string })[];
}) => {
  try {
    files.forEach((item) => {
      let filename: string;
      let content = '';

      if (typeof item === 'string') {
        filename = path.join(baseDir, item);
      } else {
        filename = path.join(baseDir, item.file);
        content = item.content;
      }

      const dir = path.dirname(filename);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(
        filename,
        `/* This file has been created on filesystem by src/test-resolvers/auto-wireup/test-setup.js */\n\n${content}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};
