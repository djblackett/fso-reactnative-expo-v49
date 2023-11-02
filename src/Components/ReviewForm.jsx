import FormikTextInput from "./FormikTextInput";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormikContext } from "formik";
import { useNavigate } from "react-router-native";

const ReviewForm = ({ mutate }) => {

  const styles = StyleSheet.create({
    submit: {
      width: "90%",
      padding: 8,
      backgroundColor: "#0165d4",
      borderRadius: 2,
      marginTop: 5
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
    <>
      <FormikTextInput name="ownerName" placeholder="Username"/>
      <FormikTextInput name="repositoryName" placeholder="Repo name"/>
      <FormikTextInput name="rating" placeholder="Rating"/>
      <FormikTextInput name="text" placeholder="Write your review" multiline={true}/>
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text style={styles.text}>Create a review</Text>
      </Pressable>
    </>
  );
};

export default ReviewForm;