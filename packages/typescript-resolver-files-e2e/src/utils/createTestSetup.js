const fs = require('fs');
const path = require('path');

const createTestSetup = ({ baseDir, files }) => {
  try {
    files.forEach((item) => {
      let filename;
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

module.exports = {
  createTestSetup,
};
