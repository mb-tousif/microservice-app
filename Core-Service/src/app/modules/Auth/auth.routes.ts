import express from 'express';
import { AuthController } from './auth.controller';
import ZodValidateRequest from '../../middleware/validateZodReq';
import { AuthValidation } from './auth.zod.validation';
import RateLimiter from '../../middleware/rate-limiter';

const router = express.Router();

router.post(
  "/login",
  ZodValidateRequest(AuthValidation.postValidation),
  AuthController.loginUser
);

router.get("/logout", RateLimiter, (req, res) => {
  res.send("Logout")});

router.post(
  "/reset-password",
  ZodValidateRequest(AuthValidation.postValidation),
  AuthController.resetPassword
);

export const AuthRoutes = router;

