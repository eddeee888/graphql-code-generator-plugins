import type { BaseNode } from './node.mappers';

interface NodeIndentifier {
  fullName: string;
}

interface Pet extends BaseNode, NodeIndentifier {
  age: number;
}

export interface CatMapper extends Pet {
  scratches: boolean;
}

export interface DogMapper extends Pet {
  likesToDig: boolean;
}
