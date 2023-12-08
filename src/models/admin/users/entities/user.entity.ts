import { Users } from '@prisma/client';

export enum Role {
  Admin = 'admin',
  Developer = 'dev',
  Athlete = 'athlete',
  Trainer = 'trainer',
  User = 'user',
}

export class UserEntity implements Users {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}
