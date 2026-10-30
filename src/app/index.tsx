import {View, Text, TextInput, Button, StyleSheet, ScrollView} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signupSchema, SignupForm} from "@/schemas/signupSchema";
import {useRouter} from "expo-router";
export default function SignupScreen() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: {errors},
    } =useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onSubmit",
    });

    const onSubmit = (b: SignupForm) => {
        console.log("First Name:", b.firstName);
        console.log("Last Name:", b.lastName);
        console.log("Email:", b.email);
        router.push({
            pathname: "/confirmation",
            params: {firstName: b.firstName}
        });
    };
    
    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <View style = {styles.form}>
                <Text style = {styles.header}>Create an Account</Text>

                <Text style = {styles.label}>First Name</Text>
                <Controller
                control = {control}
                name = "firstName"
                render = {({field: {onChange, value}}) => (
                    <TextInput
                    value = {value}
                    onChangeText = {onChange}
                    placeholder = "Enter first name"
                    style = {styles.input}
                    />
                )}
                />

                {errors.firstName && (
                    <Text style = {styles.error}>{errors.firstName.message}</Text>
                )}

                <Text style = {styles.label}>Last Name</Text>
                <Controller
                control = {control}
                name = "lastName"
                render = {({field: {onChange, value}}) => (
                    <TextInput
                    value = {value}
                    onChangeText = {onChange}
                    placeholder = "Enter last name"
                    style = {styles.input}
                    />
                )}
                />

                {errors.lastName && (
                    <Text style = {styles.error}>{errors.lastName.message}</Text>
                )}

                <Text style = {styles.label}>Email</Text>
                <Controller
                control = {control}
                name = "email"
                render = {({field: {onChange, value}}) => (
                    <TextInput
                    value = {value}
                    onChangeText = {onChange}
                    placeholder = "Enter email"
                    keyboardType = "email-address"
                    style = {styles.input}
                    />
                )}
                />

                {errors.email && (
                    <Text style = {styles.error}>{errors.email.message}</Text>
                )}

                <Text style = {styles.label}>Password</Text>
                <Controller
                control = {control}
                name = "password"
                render = {({field: {onChange, value}}) => (
                    <TextInput
                    value = {value}
                    onChangeText = {onChange}
                    placeholder = "Enter password"
                    secureTextEntry
                    style = {styles.input}
                    />
                )}
                />

                {errors.password && (
                    <Text style = {styles.error}>{errors.password.message}</Text>
                )}

                <Text style = {styles.label}>Confirm Password</Text>
                <Controller
                control = {control}
                name = "confirmPassword"
                render = {({field: {onChange, value}}) => (
                    <TextInput
                    value = {value}
                    onChangeText = {onChange}
                    placeholder = "Confirm password"
                    secureTextEntry
                    style = {styles.input}
                    />
                )}
                />

                {errors.confirmPassword && (
                    <Text style = {styles.error}>{errors.confirmPassword.message}</Text>
                )}

                <View style = {styles.button}>
                    <Button
                    title = "Sign Up"
                    onPress = {handleSubmit(onSubmit)}/>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  form: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginBottom: 5,
  },

  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 12,
  },

  button: {
    marginTop: 10,
  },
});
