import {View, Text, TextInput, Button, Stylesheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {z} from "zod";

const signupSchema = z.object({
    firstName: z.string().min(1, "First Name required"),
    lastName: z.string().min(1, "Last Name required"),
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password is at least 8 characters"),
    confirmPassword: z.string().refine((a) => a.password === a.confirmPassword, {
        message: "Password dont match",
        path: ["confirmPassword"],
    })
})