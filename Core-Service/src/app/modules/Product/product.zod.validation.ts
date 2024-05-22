import { z } from "zod";

const postValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required"
        }).min(4),
        price: z.string({
            required_error: "Price is required"
        }).min(1).max(10),
        description: z.string().optional(),
        imgUrl: z.string().optional(),
        status: z.enum(["available", "sold out", "coming soon"]).default("available")
    })
});

const updateValidation = z.object({
  body: z.object({
        title: z.string().optional(),
        price: z.string().optional(),
        description: z.string().optional(),
        imgUrl: z.string().optional(),
        status: z.enum(["available", "sold out", "coming soon"]).optional()
  }),
});

export const productValidation = {
    postValidation,
    updateValidation
}