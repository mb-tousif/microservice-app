import { z } from "zod";

const postValidation = z.object({
    body: z.object({
        quantity: z.number({
            required_error: `Quantity is required`
        }),
    productId: z.string({
        required_error: `Product Id is required`
    }),
    status: z.enum(["available", "sold out", "coming soon"])
    })
});

const updateValidation = z.object({
    body: z.object({
        quantity: z.number().optional(),
        productId: z.string().optional(),
        status: z.enum(["available", "sold out", "coming soon"]).optional()
    })
});

export const productTotalQuantityValidation = {
    postValidation,
    updateValidation
}