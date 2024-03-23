import type { DogResolvers } from './../../types.generated';
export const Dog: DogResolvers = {
  /* Implement Dog resolver logic here */
  name: async (_parent, _arg, _ctx) => {
    /* Dog.name resolver is required because Dog.name exists but DogMapper.name does not */
  },
};
