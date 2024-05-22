import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { UserRoutes } from "../modules/User/user.routes";
import { ProductRoutes } from "../modules/Product/product.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes,
  },
  {
    path: "/users",
    routes: UserRoutes,
  },
  {
    path: "/products",
    routes: ProductRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;