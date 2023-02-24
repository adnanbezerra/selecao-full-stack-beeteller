import { IUserRepository } from '../interfaces/UserRepository';
import { NewUserType, SignInInfo } from '../types/UserTypes';
import { conflictError, unauthorizedError } from '../utils/errorUtils';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { EXPIRATION, SECRET_KEY } from '../utils/jwt';

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

  async signIn(signInInfo: SignInInfo, userRepository: IUserRepository) {
    const user = await userRepository.getUserFromDatabase(signInInfo);
    const verify = bcrypt.compareSync(signInInfo.password, user.password);

    if (!verify) throw unauthorizedError('Wrong email or password!');

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: EXPIRATION,
    });

    return token;
  }
}

export const userServices = new UserService();
