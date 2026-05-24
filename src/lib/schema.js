import {z} from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name cannot exceed 50 characters")
      .trim(),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format")
      .toLowerCase()
      .trim(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password is too long"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password")
      .optional(),

    phoneNumber: z
      .string()
      .min(7, "Phone number is too short")
      .max(15, "Phone number is too long")
      .regex(/^\+?[0-9\s\-]+$/, "Invalid phone number format"), // يقبل أرقام اختيارياً تبدأ بـ + ومسافات أو شرطات

    country: z.preprocess(
      (val) => {
        if (typeof val === "string" && val.trim() === "") return undefined;
        return val;
      },
      z
        .string()
        .min(2, "Country name is too short")
        .max(60, "Country name is too long")
        .optional(), // الحقل اختياري، لن يسبب خطأ إذا لم يرسله الفرونت-إند
    ),
  })
  .refine(
    (data) => {
      if (typeof data.confirmPassword === "undefined") return true;
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );
