import { Pressable, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { useNavigate } from "react-router-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/queries";

const CreateUserForm = () => {
  const styles = StyleSheet.create({
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

  const [mutate, result] = useMutation(CREATE_USER,);

  const { values, errors } = useFormikContext();
  const navigate = useNavigate();
  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = async () => {
    console.log("submit button pressed");
    if (!hasErrors) {
      const { username, password, confirmPassword } = values;
      try {
        if (password === confirmPassword) {
          const user = { user: { username, password } };
          console.log(user);
          const { data } = await mutate({ variables: user });
          console.log(data);
          navigate("/signin");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <FormikTextInput name="username" placeholder="Username"/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <FormikTextInput name="confirmPassword" placeholder="Confirm password" secureTextEntry/>
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text style={styles.text}>Create user</Text>
      </Pressable>
    </>
  );
};

export default CreateUserForm;