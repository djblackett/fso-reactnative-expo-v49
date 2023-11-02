import * as yup from "yup";
import { Formik } from "formik";
import CreateUserForm from "./CreateUserForm";
import { StyleSheet, View } from "react-native";
import { ref } from "yup";


const CreateUser = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16
    }
  });



  const initialValues = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  const onSubmit = () => {
    console.log();
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "Username must be at least 5 characters")
      .max(30, "Username cannot be more than 30 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Password must be 5 or more characters")
      .max(50, "Password cannot be more than 50 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([ref("password")], "Passwords must match")
  });

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ handleSubmit }) => <CreateUserForm onSubmit={handleSubmit}/>}
      </Formik>
    </View>
  );
};
export default CreateUser;