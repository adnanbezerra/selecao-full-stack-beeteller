import { Router } from 'express';
import { createNewUser } from '../controllers/UserController';
import { validateSchema } from '../middlewares/ValidateSchema';
import { NewUserSchema } from '../schemas/NewUserSchema';

export const UserRoute = Router();

UserRoute.post('/sign-up', validateSchema(NewUserSchema), createNewUser);
