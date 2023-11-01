import { RepositoryItem } from "./RepositoryItem";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";
import theme from "../theme";
import { useParams } from "react-router-native";
import { A } from "@expo/html-elements";
import Review from "./Review";


const SingleRepositoryItem = ({ data, loading }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: "white",
      paddingBottom: 16
    },
    button: {
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: 10,
      paddingTop: 8,
      marginTop: 8,
      backgroundColor: theme.colors.primary,
      color: "white",
      width: "100%",
      borderRadius: 4,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",

    },
    link: {
      justifyContent: "center",
      alignSelf: "center",
      width: "90%",
      backgroundColor: "white"
    }
  });


  console.log(data?.repository);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (data) {

    return (
      <View style={styles.container}>
        <RepositoryItem item={data.repository}/>
        <A href={data.repository.url} style={styles.link}><Pressable style={styles.button}><Text>View on
          GitHub</Text></Pressable></A>
      </View>
    );
  }

  return null;
  
};
export default SingleRepositoryItem;