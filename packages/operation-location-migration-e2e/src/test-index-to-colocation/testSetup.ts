import { createTestSetup } from '@workspace/testing-utils';

createTestSetup({
  baseDir: __dirname,
  files: [
    {
      file: 'components/MeComponent.lazy-query.ts',
      content: `import { useMeLazyQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeLazyQuery();
  return 'Me';
};\n`,
    },
    {
      file: 'components/MeComponent.query.ts',
      content: `import { useMeQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeQuery({ skip: true });
  return 'Me';
};\n`,
    },
    {
      file: 'components/MeComponent.suspense-query.ts',
      content: `import { useMeSuspenseQuery } from '../generated/hooks.generated';

export const MeComponent = () => {
  useMeSuspenseQuery();
  return 'Me';
};\n`,
    },
    {
      file: 'components/UserComponent.ts',
      content: `import { useMeQuery, useMeLazyQuery, useMeSuspenseQuery, useUpdateUserMutation } from '../generated/hooks.generated';

export const UserComponent = () => {
  useMeQuery({ onCompleted: () => {} });
  const res = useMeSuspenseQuery();
  useUpdateUserMutation();
  return 'User';
};\n`,
    },
    {
      file: 'components/UserSubscription.ts',
      content: `import { useUserChangesSubscription } from '../generated/hooks.generated';

export const UserSubscription = () => {
  useUserChangesSubscription({});
};\n`,
    },
  ],
});
