import { createTestSetup } from '@workspace/testing-utils';

createTestSetup({
  baseDir: __dirname,
  files: [
    {
      file: 'components/Me/Me.ts',
      content: `import { useMeQuery } from './Me.generated';
export const Me = () => {
  useMeQuery();
};`,
      disableDefaultComment: true,
    },
    {
      file: 'components/User/User.ts',
      content: `import { useUserSuspenseQuery } from './User.generated';

export const Me = () => {
  useUserSuspenseQuery();
};`,
    },
  ],
});
