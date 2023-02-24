import { Request, Response } from 'express';
import { userRepository } from '../repositories/UserRepositoryImpl';
import { userServices } from '../services/UserServices';
import { NewUserType } from '../types/UserTypes';

export async function createNewUser(req: Request, res: Response) {
  const newUserInfo: NewUserType = req.body;

  await userServices.createNewUser(newUserInfo, userRepository);

  res.sendStatus(201);
}
