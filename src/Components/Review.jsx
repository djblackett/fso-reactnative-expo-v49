import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const Review = ({ review }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      height: "300",
      padding: 8,
      paddingBottom: 16,
      marginTop: 16,
      backgroundColor: theme.colors.itemBackground
    },
    circle: {
      borderRadius: "50%",
      borderWidth: 2,
      borderColor: theme.colors.primary,
      color: theme.colors.primary,
      margin: 8,
      padding: 8,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center"
    },
    rating: {
      color: theme.colors.primary,
      fontWeight: theme.fontWeights.bold,
      marginBottom: 2
    },
    info: {
      flexDirection: "column",
      flex: 1,
      flexWrap: "wrap",
    },
    name: {
      marginTop: 8,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.subheading
    },
    date: {
      color: theme.colors.descriptionText,
      marginBottom: 8
    },
    text: {
      fontFamily: theme.fonts,
      fontSize: theme.fontSizes.body
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}><Text style={styles.rating}>{review.rating}</Text></View>
      <View style={styles.info}>
        <Text style={styles.name}>{review.user.username}</Text>
        <Text style={styles.date}>{new Date(review.createdAt).toLocaleString("en-US", {
          day: "numeric",
          month: "numeric",
          year: "numeric"
        }).replaceAll("/", ".")}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default Review;