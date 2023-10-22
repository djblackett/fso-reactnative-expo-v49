import {Formik} from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";

const SignIn = () => {

    const initialValues = {
        username: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(8, "Username must be at least 8 characters")
            .required('Username is required'),
        password: yup
            .string()
            .min(6, 'Password must be 6 or more characters')
            .required('Password is required'),
    });

    return (
        <Formik initialValues={ initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignIn;




