import { z } from "zod";

const dateString = z
  .string()
  .refine((val) => !Number.isNaN(Date.parse(val)), {
    message: "Invalid date format",
  });
export const newSubscriptionSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  price: z.number().positive("Invalid price"),
  currency: z.enum(["USD", "MXN", "YEN"]),
  billing_cycle: z.enum(["monthly", "yearly"]),
  start_date: dateString,
  next_payment_date: dateString,
  active: z.boolean(),
});

export type NewSubscriptionInput = z.infer<typeof newSubscriptionSchema>;
