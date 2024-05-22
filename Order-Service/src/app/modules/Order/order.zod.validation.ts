import { z } from "zod";

const postValidation = z.object({
  body: z.object({
    productId: z.string({
      required_error: "Product Id is required",
    }),
    quantity: z.number({
      required_error: "Product quantity is required",
    }),
    price: z.number({
      required_error: "Product price is required",
    }),
    status: z.enum(["Pending", "Delivered", "Cancelled"], {
      required_error: "Order Status is required",
    }),
  }),
});

const updateValidation = z.object({
  body: z.object({
    productId: z.string().optional(),
    quantity: z.number().optional(),
    price: z.number().optional(),
    status: z.enum(["Pending", "Delivered", "Cancelled"]).optional(),
  }),
});

export const OrderValidation = {
  postValidation,
  updateValidation,
};
