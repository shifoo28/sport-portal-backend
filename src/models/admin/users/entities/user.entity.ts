import { Users } from '@prisma/client';

export class UserEntity implements Users {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}
