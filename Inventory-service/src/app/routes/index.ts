import express from "express";
import { ProductInventoryRoutes } from "../modules/ProductInventory/productInventory.routes";
import { ProductTotalQuantityRoutes } from "../modules/ProductTotalQuantity/productTotalQuantity.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/products-quantity",
    routes: ProductTotalQuantityRoutes
  },
  {
    path: "/products-inventory",
    routes: ProductInventoryRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
