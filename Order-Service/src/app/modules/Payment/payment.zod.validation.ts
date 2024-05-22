import { z } from "zod";

const postValidation = z.object({
  body: z.object({
    orderId: z.string({
      required_error: "Order Id is required",
    }),
    userId: z.string({
      required_error: "User Id is required",
    }),
    amount: z.number({
      required_error: "Payment Amount is required",
    }),
    status: z.enum(["Pending", "Paid", "Failed"], {
      required_error: "Payment Status is required",
    }),
  }),
});

const updateValidation = z.object({
  body: z.object({
    orderId: z.string().optional(),
    userId: z.string().optional(),
    amount: z.number().optional(),
    status: z.enum(["Pending", "Paid", "Failed"]).optional(),
  }),
});

export const paymentValidation = {
  postValidation,
  updateValidation,
};
