import express from 'express';
import { ShippingController } from './shipping.controller';
import RateLimiter from '../../middleware/rate-limiter';
import AuthenticateUser from '../../middleware/authenticateUser';
import ZodValidateRequest from '../../middleware/validateZodReq';
import { ShippingValidation } from './shipping.zod.validation';

const router = express.Router();

router.get(
    '/all-shipping',
    RateLimiter,
    AuthenticateUser(),
    ShippingController.getAllShipping
);

router.post(
    '/create-shipping',
    RateLimiter,
    AuthenticateUser(),
    ZodValidateRequest( ShippingValidation.postValidation ),
    ShippingController.createShipping
);

export const ShippingRoutes = router;

