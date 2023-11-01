import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { Link, useNavigate } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ME } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    paddingTop: 32,
    color: theme.colors.appBar,
    backgroundColor: theme.colors.appBarBackground
  },
});

const AppBar = ( { setLoggedIn }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  const handleSignOut = async () => {
    console.log(token);
    setToken(null);
    setLoggedIn(false);
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);


  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <AppBarTab title={"Repositories"} />
      </Link>
      { data?.me && <Link to={"create-review"}>
        <AppBarTab title={"Create a review"} />
      </Link> }
      { !data?.me && <Link to="/signin">
        <AppBarTab title={"Sign in"} />
      </Link> }
      { data?.me && <Pressable onPress={handleSignOut}>
        <AppBarTab title={"Sign out"}/>
      </Pressable>
      }
    </ScrollView>
  </View>;
};



export default AppBar;