import express from 'express';
import { ProductInventoryController } from './productInventory.controller';
import ZodValidateRequest from '../../middleware/validateZodReq';
import { ProductInventoryValidation } from './productInventory.zod.validation';
import AuthenticateUser from '../../middleware/authenticateUser';
import RateLimiter from '../../middleware/rate-limiter';

const router = express.Router();

router.get(
    '/all-product-inventory',
    RateLimiter,
    AuthenticateUser(),
    ProductInventoryController.getAllProductInventory
);

router.get(
    '/product-inventory/:id',
    RateLimiter,
    AuthenticateUser(),
    ProductInventoryController.getProductInventoryById
);

router.post(
  "/create-product-inventory",
  AuthenticateUser(),
  ZodValidateRequest(ProductInventoryValidation.postValidation),
  ProductInventoryController.createProductInventory
);

router.patch(
  "/update-product-inventory/:id",
  AuthenticateUser(),
  ZodValidateRequest(ProductInventoryValidation.updateValidation),
  ProductInventoryController.updateProductInventory
);

export const ProductInventoryRoutes = router;

