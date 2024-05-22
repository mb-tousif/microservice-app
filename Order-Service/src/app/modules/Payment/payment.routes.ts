import express from 'express';
import RateLimiter from '../../middleware/rate-limiter';
import AuthenticateUser from '../../middleware/authenticateUser';
import { PaymentController } from './payment.controller';
import ZodValidateRequest from '../../middleware/validateZodReq';
import { paymentValidation } from './payment.zod.validation';

const router = express.Router();

router.get(
    '/all-payments',
    RateLimiter,
    AuthenticateUser(),
    PaymentController.getAllPayments
);

router.post(
    '/create-payment',
    RateLimiter,
    AuthenticateUser(),
    ZodValidateRequest(paymentValidation.postValidation),
    PaymentController.createPayment
);

export const PaymentRoutes = router;

