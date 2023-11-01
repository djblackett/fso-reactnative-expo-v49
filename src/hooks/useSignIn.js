import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ variables: { username, password } });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      await apolloClient.resetStore();
      return data;
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;