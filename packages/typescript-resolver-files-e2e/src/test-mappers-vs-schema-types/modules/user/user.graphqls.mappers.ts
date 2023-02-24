export interface UserMapper {
  id: number;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER';
  createdAt: Date;
}
