import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "At least 9 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
