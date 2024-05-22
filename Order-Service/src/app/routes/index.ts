import express from "express";
import { ShippingRoutes } from "../modules/Shipping/shipping.routes";
import { PaymentRoutes } from "../modules/Payment/payment.routes";
import { OrderRoutes } from "../modules/Order/order.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/orders",
    routes: OrderRoutes
  },
    {
    path: "/payments",
    routes: PaymentRoutes
    },
  {
    path: "/shippings",
    routes: ShippingRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
