import FormikTextInput from "./FormikTextInput";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import { useFormikContext } from "formik";
import { useNavigate } from "react-router-native";

const ReviewForm = ({ mutate }) => {

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      marginTop: 16
    },
    submit: {
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      padding: 8,
      backgroundColor: "#0165d4",
      borderRadius: 2,
      marginTop: 16
    },
    text: {
      color: "white",
      textAlign: "center"
    }
  });

  const { values, errors } = useFormikContext();
  const navigate = useNavigate();
  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = async () => {
    console.log("submit button pressed");
    if (!hasErrors) {
      const { ownerName, repositoryName, rating, text } = values;
      try {
        const review = { review: { ownerName, repositoryName, rating: Number(rating), text } };
        console.log(review);
        const { data } = await mutate({ variables: review });
        console.log(data);
        navigate("/" + data.createReview.repositoryId);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name"/>
      <FormikTextInput name="repositoryName" placeholder="Repository name"/>
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
      <FormikTextInput name="text" placeholder="Write your review" multiline={true}/>
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text style={styles.text}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;