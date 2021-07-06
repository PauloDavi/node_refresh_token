import { Router } from 'express';

import { authenticateUSerRoutes } from './useCases/authenticateUser/AuthenticateUSerRoutes';
import { createCoursesRoutes } from './useCases/createCourses/CreateCoursesRoutes';
import { createUserRoutes } from './useCases/createUser/CreateUserRoutes';
import { refreshTokenUserRoutes } from './useCases/refreshTokenUser/RefreshTokenUserRoutes';

const router = Router();

router.use(authenticateUSerRoutes);
router.use(createUserRoutes);
router.use(createCoursesRoutes);
router.use(refreshTokenUserRoutes);

export { router };
