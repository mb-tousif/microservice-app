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
      .min(6)
      .max(15),
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3)
      .max(50)
      .optional(),
    profilePic: z.string().optional(),
    role: z.enum(["user", "admin", "superAdmin"]).optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    booking: z.array(z.string()).optional(),
  }),
});

const updateValidation = z.object({
  body: z.object({
    name: z.string().min(3).max(50).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).max(15).optional(),
    role: z.enum(["user", "admin", "superAdmin"]).optional(),
    profilePic: z.string().optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    booking: z.array(z.string()).optional(),
  }),
});

export const UserValidation = {
  postValidation,
  updateValidation,
};
