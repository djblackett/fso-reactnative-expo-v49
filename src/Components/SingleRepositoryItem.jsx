import { RepositoryItem } from "./RepositoryItem";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";
import theme from "../theme";
import { useParams } from "react-router-native";
import { A } from "@expo/html-elements";
import Review from "./Review";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 16,
    marginBottom: 16
    // alignItems: "center",
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 10,
    paddingTop: 8,
    marginTop: 8,
    backgroundColor: theme.colors.primary,
    height: theme.buttons.height,
    width: "90%",
    borderRadius: 4,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",

  },
  link: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    flexWrap: "nowrap"
  }
});

const SingleRepositoryItem = ({ repository }) => {


  if (repository) {

    return (
      <View style={styles.container}>
        <RepositoryItem item={repository}/>
        <Pressable style={styles.button}><View><A href={repository.url} style={styles.link}><Text style={styles.text}>View on
          GitHub</Text></A></View></Pressable>
      </View>
    );
  }

  return null;

};
export default SingleRepositoryItem;