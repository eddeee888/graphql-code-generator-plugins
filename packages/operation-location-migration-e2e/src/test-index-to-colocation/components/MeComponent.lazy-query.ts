/* This file has been created on filesystem by src/test-resolvers/auto-wireup/test-setup.js */

import { useMeLazyQuery } from '../generated/hooks.generated';
      
      export const MeComponent = () => {
        useMeLazyQuery();
        return 'Me';
      };