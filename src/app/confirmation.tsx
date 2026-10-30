import {View, Text, StyleSheet} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function ConfirmationScreen() {
    const {firstName} = useLocalSearchParams();
    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Sign Up Successful!</Text>
            <Text style = {styles.message}>Account created for {firstName}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },

    header: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
    },

    message: {
        fontSize: 20,
        marginBottom: 10,
    },
});