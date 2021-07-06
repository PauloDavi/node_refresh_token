import { Router } from 'express';

import { AuthenticateUserController } from './AuthenticateUserController';

const authenticateUSerRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateUSerRoutes.post('/login', authenticateUserController.handle);

export { authenticateUSerRoutes };
