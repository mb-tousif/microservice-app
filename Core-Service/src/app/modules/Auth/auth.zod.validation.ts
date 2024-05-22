
import { z } from "zod";

const postValidation = z.object({
    body: z.object({
        email: z
            .string({
                required_error: "Email is required",
            })
            .email(),
        password: z
            .string({
                required_error: "Password is required",
            })
            .min(4)
            .max(15)
    })
});

export const AuthValidation = {
    postValidation
}