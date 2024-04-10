/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../../types.generated';
import { Cat } from './resolvers/Cat';
import { Dog } from './resolvers/Dog';
import { Pet } from './resolvers/Pet';
import { PetCode } from './resolvers/PetCode';
import { PetError } from './resolvers/PetError';
import { PetOk } from './resolvers/PetOk';
import { PetResult } from './resolvers/PetResult';
import { pet as Query_pet } from './resolvers/Query/pet';
export const resolvers: Resolvers = {
  Query: { pet: Query_pet },

  Cat: Cat,
  Dog: Dog,
  Pet: Pet,
  PetCode: PetCode,
  PetError: PetError,
  PetOk: PetOk,
  PetResult: PetResult,
};
