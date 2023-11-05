import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,

  },
  inputBox: {
    height: 50,
    width: "90%",
    padding: 8,
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.colors.descriptionText,
    borderBottomColor: theme.colors.descriptionText,
    borderTopColor: theme.colors.descriptionText
  },
  errorStyle: {
    width: "90%",
    padding: 8,
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.colors.error,
    borderBottomColor: theme.colors.error,
    borderTopColor: theme.colors.error
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;


  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.errorStyle : styles.inputBox }
        placeholderTextColor={theme.colors.descriptionText}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;