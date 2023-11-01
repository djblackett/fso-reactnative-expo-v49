import { render, fireEvent, screen, act, waitFor } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import FormRender from "../../Components/FormRender";
import { Formik } from "formik";

describe("Form", () => {
  it("calls function provided by onSubmit prop after pressing the submit button", async () => {
    const onSubmit = jest.fn();
    const initialValues = {
      username: "",
      password: ""
    };

    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, errors, touched }) => {
          return <FormRender onSubmit={handleSubmit} errors={errors} touched={touched}/>;
        }}
      </Formik>
    );

    await act(async () => {
      await fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      await fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      await fireEvent.press(screen.getByText("Submit"));
    });

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      console.log(onSubmit.mock.calls[0][0]);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});