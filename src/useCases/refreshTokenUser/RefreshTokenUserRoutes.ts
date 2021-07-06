import { Router } from 'express';

import { RefreshTokenUserController } from './RefreshTokenUserController';

const refreshTokenUserRoutes = Router();

const refreshTokenUserController = new RefreshTokenUserController();

refreshTokenUserRoutes.post(
  '/refresh-token',
  refreshTokenUserController.handle
);

export { refreshTokenUserRoutes };
