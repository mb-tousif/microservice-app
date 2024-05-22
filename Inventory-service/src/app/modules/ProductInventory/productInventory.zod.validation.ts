
import { z } from "zod";

const postValidation = z.object({
    body: z.object({
        productId: z.string({
            required_error: `Product Id is required`
        }),
        soldQuantity: z.number().default(0),
        shippedQuantity: z.number().default(0),
        availableQuantity: z.number().default(0),
        productTotalQuantityId: z.string({
            required_error: `Product Total Quantity Id is required`
        }),
    })
});

const updateValidation = z.object({
    body: z.object({
        productId: z.string().optional(),
        soldQuantity: z.number().optional(),
        shippedQuantity: z.number().optional(),
        availableQuantity: z.number().optional(),
        productTotalQuantityId: z.string().optional(),
    })
});

export const ProductInventoryValidation = {
    postValidation,
    updateValidation
}