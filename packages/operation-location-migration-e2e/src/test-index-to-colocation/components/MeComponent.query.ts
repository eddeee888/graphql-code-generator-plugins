/* This file has been created on filesystem by src/test-resolvers/auto-wireup/test-setup.js */

import { useMeQuery } from '../generated/hooks.generated';
      
      export const MeComponent = () => {
        useMeQuery({ skip: true });
        return 'Me';
      };