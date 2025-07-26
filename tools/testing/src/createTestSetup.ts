import * as fs from 'fs';
import * as path from 'path';

export const createTestSetup = ({
  baseDir,
  files,
}: {
  baseDir: string;
  files: (
    | string
    | { file: string; content: string; disableDefaultComment?: boolean }
  )[];
}) => {
  try {
    files.forEach((item) => {
      let filename: string;
      let content = '';
      let disableDefaultComment = false;

      if (typeof item === 'string') {
        filename = path.join(baseDir, item);
      } else {
        filename = path.join(baseDir, item.file);
        content = item.content;
        disableDefaultComment = item.disableDefaultComment;
      }

      const dir = path.dirname(filename);
      fs.mkdirSync(dir, { recursive: true });
      if (!disableDefaultComment) {
        fs.writeFileSync(
          filename,
          `/* This file has been created on filesystem by @workspace/testing#createTestSetup */\n\n${content}`
        );
      }
    });
  } catch (err) {
    console.error(err);
  }
};
