import { IUserRepository } from '../interfaces/UserRepository';
import { NewUserType } from '../types/UserTypes';
import { conflictError } from '../utils/errorUtils';
import bcrypt from 'bcrypt';

class UserService {
  async createNewUser(
    newUserInfo: NewUserType,
    userRepository: IUserRepository,
  ) {
    const existingUser = await userRepository.getUserFromDatabase(newUserInfo);
    if (existingUser) throw conflictError('Email already in use!');

    const hashedPassword = bcrypt.hashSync(newUserInfo.password, 10);
    const payload: NewUserType = {
      email: newUserInfo.email,
      password: hashedPassword,
    };

    await userRepository.createNewUser(payload);
  }
}

export const userServices = new UserService();
