import { User } from '@prisma/client';
import { NewUserType } from '../types/UserTypes';

export interface IUserRepository {
  createNewUser(newUserInfo: NewUserType): Promise<User>;

  getUserFromDatabase(newUserInfo: NewUserType): Promise<void | User>;
}
