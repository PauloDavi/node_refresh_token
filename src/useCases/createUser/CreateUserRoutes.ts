import { Router } from 'express';

import { CreateUserController } from './CreateUserController';

const createUserRoutes = Router();

const createUserController = new CreateUserController();

createUserRoutes.post('/users', createUserController.handle);

export { createUserRoutes };
