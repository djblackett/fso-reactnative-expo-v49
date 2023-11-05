import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW, ME } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

const Review = ({ review, myReview=false }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.itemBackground,
      marginBottom: 16,
      width: "100%",
      padding: 8,
      paddingBottom: 16,
      height: "auto"

    },
    review: {
      flexDirection: "row",
      width: "100%",
      paddingRight: 8,
      flexWrap: "wrap"

    },
    circle: {
      borderRadius: 25,
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
      justifyContent: "space-between"
    },
    name: {
      marginTop: 8,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.subheading,

    },
    date: {
      color: theme.colors.descriptionText,
      marginBottom: 8
    },
    textWrapper: {
      // flex: 1,
      // flexGrow: 1,
      // flexWrap: "wrap",
      // width: 0
    },
    text: {
      fontFamily: theme.fonts,
      fontSize: theme.fontSizes.body,
      // flex: 1,
      // flexGrow: 1,
      // flexWrap: "wrap"
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginTop: 16,

    },
    viewButton: {
      backgroundColor: theme.colors.primary,
      color: "white",
      borderRadius: 4,
      padding: 8,
      paddingBottom: 10,
      height: theme.buttons.height,
      width: "45%",
      justifyContent: "center"
    },
    deleteButton: {
      backgroundColor: theme.colors.error,
      color: "white",
      borderRadius: 4,
      padding: 8,
      paddingBottom: 10,
      height: theme.buttons.height,
      width: "45%",
      justifyContent: "center"
    },
    buttonText: {
      color: "white",
      textAlign: "center"
    }
  });

  const navigate = useNavigate();
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      ME
    ]
  });

  const handleViewPress = () => {
    navigate("/" + encodeURI(review.repository.id));
  };

  const handleDeleteReview = () => {
    try {
      mutate({ variables: { deleteReviewId: review.id } });
    } catch(error) {
      console.error(error);
    }
  };

  const handleDeleteModal = () => {
    Alert.alert("Delete review", "Are you sure you want to delete this review?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "DELETE", onPress: handleDeleteReview },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.review}>
        <View style={styles.circle}><Text style={styles.rating}>{review.rating}</Text></View>
        <View style={styles.info}>
          {<View><Text style={styles.name} textBreakStrategy={"simple"}>{myReview ? review.repository.fullName : review.user.username}</Text></View>}
          <View><Text style={styles.date} textBreakStrategy={"simple"}>{new Date(review.createdAt).toLocaleString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
          }).replaceAll("/", ".") + "  "}</Text></View>
          <View style={styles.textWrapper}><Text style={styles.text}>{review.text}</Text></View>
        </View>
      </View>
      {myReview && <View style={styles.buttonContainer}>
        <Pressable style={styles.viewButton} onPress={handleViewPress}><Text style={styles.buttonText}>View repository</Text></Pressable>
        <Pressable style={styles.deleteButton} onPress={handleDeleteModal}><Text style={styles.buttonText}>Delete</Text></Pressable>
      </View>}
    </View>
  );
};

export default Review;