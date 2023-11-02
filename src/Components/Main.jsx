import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import { useState } from "react";
import useSignIn from "../hooks/useSignIn";
import SingleRepositoryItem from "./SingleRepositoryItem";
import SingleRepositoryView from "./SingleRepositoryView";
import CreateReview from "./CreateReview";
import CreateUser from "./CreateUser";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    alignContent: "center",
    backgroundColor: theme.colors.mainBackground,
    fontFamily: theme.fonts,
  },
});

const Main = () => {

  const [loggedIn, setLoggedIn] = useState(null);
  const [signIn] = useSignIn();

  return (
    <View style={styles.container}>
      <AppBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<RepositoryList />}/>
        <Route path="/:id" element={<SingleRepositoryView />} />
        <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} signIn={signIn}/>}/>
        <Route path={"/create-review"} element={<CreateReview />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </View>
  );
};

export default Main;