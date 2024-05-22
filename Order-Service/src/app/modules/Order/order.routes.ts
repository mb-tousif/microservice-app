import express from 'express';
import { OrderController } from './order.controller';
import RateLimiter from '../../middleware/rate-limiter';
import AuthenticateUser from '../../middleware/authenticateUser';
import ZodValidateRequest from '../../middleware/validateZodReq';
import { OrderValidation } from './order.zod.validation';

const router = express.Router();

router.get(
    '/all-orders',
    RateLimiter,
    AuthenticateUser(),
    OrderController.getAllOrders
);

router.post(
    '/create-order',
    RateLimiter,
    AuthenticateUser(),
    ZodValidateRequest( OrderValidation.postValidation ),
    OrderController.createOrder
);

export const OrderRoutes = router;

