import { useFormikContext } from "formik";
import { useNavigate } from "react-router-native";
import FormRender from "./FormRender";


const SignInForm = ({ setLoggedIn, signIn }) => {
  const navigate = useNavigate();
  const { errors, values } = useFormikContext();
  const hasErrors = Object.keys(errors).length > 0;


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

  return <FormRender setLoggedIn={setLoggedIn} signIn={signIn} onSubmit={handleSubmit}/>;
};

export default SignInForm;