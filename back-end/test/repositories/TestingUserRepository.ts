import { User } from '@prisma/client';
import { IUserRepository } from '../../src/interfaces/UserRepository';
import { NewUserType } from '../../src/types/UserTypes';

class TestingUserRepository implements IUserRepository {
  private usersArray: Array<User> = [];

  async createNewUser(newUserInfo: NewUserType): Promise<User> {
    const index = this.usersArray.length - 1;
    const payload = {
      id: index,
      email: newUserInfo.email,
      password: newUserInfo.password,
    };

    this.usersArray.push(payload);
    return payload;
  }

  async getUserFromDatabase(newUserInfo: NewUserType): Promise<User> {
    const user = this.usersArray.filter(
      (user) => user.email === newUserInfo.email,
    );

    return user[0];
  }

  deleteUsers() {
    this.usersArray = [];
  }

  testIfArrayLengthEqualsTo(desiredSize: number): boolean {
    return this.usersArray.length === desiredSize;
  }
}

export const testingUserRepository = new TestingUserRepository();
