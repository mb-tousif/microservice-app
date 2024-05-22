import express from "express";
import { ShippingRoutes } from "../modules/Shipping/shipping.routes";
import { PaymentRoutes } from "../modules/Payment/payment.routes";

const router = express.Router();

const moduleRoutes = [
    {
    path: "/payment",
    routes: PaymentRoutes
    },
  {
    path: "/shipping",
    routes: ShippingRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
