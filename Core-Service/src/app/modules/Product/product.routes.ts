import express from 'express';
import { productValidation } from './product.zod.validation';
import ZodValidateRequest from '../../middleware/validateZodReq';
import AuthenticateUser from '../../middleware/authenticateUser';
import { ProductController } from './product.controller';
import RateLimiter from '../../middleware/rate-limiter';

const router = express.Router();

router.get(
    "/all-products",
    RateLimiter,
    AuthenticateUser(),
    ProductController.getAllProducts
)

router.get(
    "/product/:id",
    RateLimiter,
    AuthenticateUser(),
    ProductController.getProductById
)

router.post(
    "/create-product",
    AuthenticateUser(),
    ZodValidateRequest(productValidation.postValidation),
    ProductController.createProduct
)

router.patch(
    "/update-product/:id",
    RateLimiter,
    AuthenticateUser(),
    ZodValidateRequest(productValidation.updateValidation),
    ProductController.createProduct
)

router.delete(
    "/delete-product/:id",
    AuthenticateUser(),
    ProductController.deleteProduct
)

export const ProductRoutes = router;