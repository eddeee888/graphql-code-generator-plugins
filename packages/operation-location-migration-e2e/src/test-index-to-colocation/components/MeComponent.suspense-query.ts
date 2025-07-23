/* This file has been created on filesystem by src/test-resolvers/auto-wireup/test-setup.js */

import {
        useMeQuery,
        useMeLazyQuery,
        useMeSuspenseQuery,
        useUpdateUserMutation,
      } from '../generated/hooks.generated';
      
      export const UserComponent = () => {
        useMeQuery({ onCompleted: () => {} });
        const res = useMeSuspenseQuery();
        useUpdateUserMutation();
        return 'User';
      };
      