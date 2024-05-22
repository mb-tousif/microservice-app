import { z } from "zod";

const postValidation = z.object({
  body: z.object({
    orderId: z.string({
      required_error: "Order Id is required",
    }),
    paymentId: z.string({
      required_error: "Payment Id is required",
    }),
    userId: z.string({
      required_error: "User Id is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
    status: z.enum(["Deliver processing", "Delivered", "Cancelled"], {
        required_error: "Status is required",
        }),
  }),
});

const updateValidation = z.object({
  body: z.object({
    orderId: z.string().optional(),
    paymentId: z.string().optional(),
    userId: z.string().optional(),
    address: z.string().optional(),
    status: z.enum(["Deliver processing", "Delivered", "Cancelled"]).optional(),
  }),
});

export const shippingValidation = {
  postValidation,
  updateValidation,
};
