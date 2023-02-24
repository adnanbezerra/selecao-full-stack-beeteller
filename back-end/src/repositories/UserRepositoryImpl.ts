import { User } from '@prisma/client';
import { client } from '../database/prisma';
import { IUserRepository } from '../interfaces/UserRepository';
import { NewUserType } from '../types/UserTypes';

export class UserRepositoryImpl implements IUserRepository {
  async createNewUser(newUserInfo: NewUserType) {
    return client.user.create({ data: newUserInfo });
  }

  async getUserFromDatabase(newUserInfo: NewUserType): Promise<void | User> {
    return client.user.findFirst({ where: { email: newUserInfo.email } });
  }
}

export const userRepository = new UserRepositoryImpl();
