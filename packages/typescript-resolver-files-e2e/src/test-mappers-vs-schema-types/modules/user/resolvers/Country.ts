import type { CountryResolvers } from './../../types.generated';
export const Country: CountryResolvers = {
  /* Implement Country resolver logic here */
  name: async (_parent, _arg, _ctx) => {
    /* Country.name resolver is required because Country.name exists but CountryMapper.name does not */
  },
};
