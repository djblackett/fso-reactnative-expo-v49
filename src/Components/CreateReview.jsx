import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/queries";
import ReviewForm from "./ReviewForm";

const CreateReview = () => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      alignItems: "center"
    },
  });

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required("Repository owner name is required"),
    repositoryName: yup
      .string()
      .required("Repository name is required"),
    rating: yup
      .number()
      .min(0)
      .max(100)
      .typeError("Must be a number")
      .required("Rating is required"),
    review: yup
      .string()

  });

  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: ""
  };

  const [mutate, result] = useMutation(CREATE_REVIEW);

  const onSubmit = () => {};


  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm mutate={mutate} result={result} onSubmit={handleSubmit}/>}
      </Formik>
    </View>
  );
};

export default CreateReview;