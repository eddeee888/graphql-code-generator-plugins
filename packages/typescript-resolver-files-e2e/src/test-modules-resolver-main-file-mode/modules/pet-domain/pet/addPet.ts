import type { MutationResolvers } from '../../types.generated';

const addPet: MutationResolvers['addPet'] = () => ({
  __typename: 'Cat',
  id: 'cat-001',
  code: 'catcat',
  scratchy: true,
});

export default addPet;
