import {z} from "zod";

export const signupSchema = z.object ({
    firstName: z.string().trim().min(2, "First name must be 2 characters"),
    lastName: z.string().trim().min(2, "Last name must be 2 characters"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
})
.refine((a) => a.password === a.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export type SignupForm = z.infer<typeof signupSchema>;