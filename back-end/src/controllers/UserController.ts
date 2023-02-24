import { Request, Response } from 'express';
import { userRepository } from '../repositories/UserRepositoryImpl';
import { userServices } from '../services/UserServices';
import { NewUserType, SignInInfo } from '../types/UserTypes';

export async function createNewUser(req: Request, res: Response) {
  const newUserInfo: NewUserType = req.body;

  await userServices.createNewUser(newUserInfo, userRepository);

  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const loginInfo: SignInInfo = req.body;

  const token = await userServices.signIn(loginInfo, userRepository);

  res.status(200).send(token);
}
