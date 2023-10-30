import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";
import useSignIn from "../utils/useSignIn";

const SignIn = ({ setLoggedIn }) => {

  const initialValues = {
    username: "",
    password: ""
  };

  const onSubmit = () => {
    console.log();
  };

  const [signIn] = useSignIn();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Username must be at least 8 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be 6 or more characters")
      .required("Password is required"),
  });

  return (
    <Formik initialValues={ initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} setLoggedIn={setLoggedIn} signIn={signIn}/>}
    </Formik>
  );
};

export default SignIn;