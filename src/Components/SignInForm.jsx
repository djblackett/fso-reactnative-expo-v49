import {Pressable, View, StyleSheet} from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const SignInForm = ({onSubmit}) => {

    const styles = StyleSheet.create({
        container: {
          justifyContent: "space-between",
          alignItems: "center"
        },
        submit: {
            width: "90%",
            padding: 8,
            backgroundColor: "#0165d4",
            borderRadius: 2,
            marginTop: 5
        },
        text: {
            color: "white",
            textAlign: "center"
        }
    })
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username"/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
            <Pressable style={styles.submit} onPress={onSubmit}>
                <Text style={styles.text}>Submit</Text>
            </Pressable>
        </View>

    )

};

export default SignInForm;