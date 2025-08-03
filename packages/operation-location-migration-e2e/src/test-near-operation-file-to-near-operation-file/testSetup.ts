import { createTestSetup } from '@workspace/testing';

createTestSetup({
  baseDir: __dirname,
  files: [
    {
      file: 'components/Me/Me.ts',
      content: `import { useMeQuery } from './Me.generated';
export const Me = () => {
  useMeQuery();
};\n`,
      disableDefaultComment: true,
    },
    {
      file: 'components/User/User.ts',
      content: `import { useUserSuspenseQuery, useUserQuery, useUserLazyQuery, useUpdateUserMutation } from './User.generated';
import { useRootUserQuery } from '../../RootUser.generated';

export const User = () => {
  useRootUserQuery()
  useUserSuspenseQuery();
  useUserQuery({ skip: true })
  useUpdateUserMutation({ onCompleted: () => {} })
};\n`,
    },
  ],
});
