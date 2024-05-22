import express from 'express';
import AuthenticateUser from '../../middleware/authenticateUser';
import { UserController } from './user.controller';
import { UserValidation } from './user.zod.validation';
import ZodValidateRequest from '../../middleware/validateZodReq';
import RateLimiter from '../../middleware/rate-limiter';

const router = express.Router();

router.get(
    '/all-users',
    RateLimiter,
    AuthenticateUser(),
    UserController.getAllUsers
);

router.post(
  "/create-user",
  ZodValidateRequest(UserValidation.postValidation),
  UserController.createUser
);

export const UserRoutes = router;

