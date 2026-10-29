import {z} from "zod"

const profileSchema = z.object ({
    firstName: z.string().trim().min(2, "Minimum 2 characters"),
    lastName: z.string().trim().min(2, "Minimum 2 characters"),
    email: z.string().trim().email("Enter a valid email"),
    password: z.string().trim().min(8, "Must be at least 8 characters")
})