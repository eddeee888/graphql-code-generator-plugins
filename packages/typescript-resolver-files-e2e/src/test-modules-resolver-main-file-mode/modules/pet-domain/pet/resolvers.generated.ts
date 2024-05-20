/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../../types.generated';
import { pet as Query_pet } from './resolvers/Query/pet';
import { Cat } from './resolvers/Cat';
import { Dog } from './resolvers/Dog';
import { PetError } from './resolvers/PetError';
import { PetOk } from './resolvers/PetOk';
import { PetCode } from './resolvers/PetCode';
import { Pet } from './resolvers/Pet';
import { PetResult } from './resolvers/PetResult';
import petResolver from './addPet';
export const resolvers: Resolvers = {
  Query: { pet: Query_pet },
  Mutation: { addPet: petResolver },

  Cat: Cat,
  Dog: Dog,
  PetError: PetError,
  PetOk: PetOk,
  PetCode: PetCode,
  Pet: Pet,
  PetResult: PetResult,
};
