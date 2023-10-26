import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { useFormikContext } from "formik";
import useSignIn from "../utils/useSignIn";
import { useNavigate } from "react-router-native";

const SignInForm = ({ onSubmit, setLoggedIn }) => {

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
  });

  const navigate = useNavigate();
  const { errors, values } = useFormikContext();
  const hasErrors = Object.keys(errors).length > 0;

  const [signIn] = useSignIn();


  const handleSubmit = async () => {
    if (!hasErrors) {
      const { username, password } = values;
      try {
        // Use the returned data from signIn
        const data = await signIn({ username, password });
        console.log(data);
        const token = data.authenticate.accessToken;
        if (token) {
          navigate("/");
          setLoggedIn(true);
        }
        console.log(token);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username"/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <Pressable style={styles.submit} onPress={handleSubmit}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>

  );

};

export default SignInForm;