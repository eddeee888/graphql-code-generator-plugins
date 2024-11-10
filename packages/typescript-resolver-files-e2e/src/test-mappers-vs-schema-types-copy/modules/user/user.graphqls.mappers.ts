import type { UserMapperRole } from './extra';

export type UserMapper = {
  id: number;
  role: UserMapperRole;
  createdAt: string | Date;
};
