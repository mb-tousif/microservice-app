import express from 'express';
import RateLimiter from '../../middleware/rate-limiter';
import AuthenticateUser from '../../middleware/authenticateUser';
import { productTotalQuantityController } from './productTotalQuantity.controller';
import ZodValidateRequest from '../../middleware/validateZodReq';
import { ProductTotalQuantityValidation } from './productTotalQuantity.zod.validation';

const router = express.Router();

router.get(
    '/all-product-quantity',
    RateLimiter,
    AuthenticateUser(),
    productTotalQuantityController.getAllProductTotalQuantity
);

router.post(
    '/create-product-quantity',
    RateLimiter,
    AuthenticateUser(),
    ZodValidateRequest(ProductTotalQuantityValidation.postValidation),
    productTotalQuantityController.createProductTotalQuantity
);

export const ProductTotalQuantityRoutes = router;

