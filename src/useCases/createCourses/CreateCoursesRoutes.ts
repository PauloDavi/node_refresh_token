import { Request, Response, Router } from 'express';

import { ensureAuthenticatedMiddleware } from '../../middlewares/ensureAuthenticatedMiddleware';

const createCoursesRoutes = Router();

createCoursesRoutes.get(
  '/courses',
  ensureAuthenticatedMiddleware,
  (request: Request, response: Response) => {
    return response.status(204).send();
  }
);

export { createCoursesRoutes };
