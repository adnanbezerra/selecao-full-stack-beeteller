import { Router } from 'express';
import { createNewUser, signIn } from '../controllers/UserController';
import { validateSchema } from '../middlewares/ValidateSchema';
import { NewUserSchema } from '../schemas/NewUserSchema';
import { SignInSchema } from '../schemas/SignInSchema';

export const UserRoute = Router();

UserRoute.post('/sign-up', validateSchema(NewUserSchema), createNewUser);
UserRoute.post('/sign-in', validateSchema(SignInSchema), signIn);
