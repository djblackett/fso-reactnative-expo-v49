import { render, fireEvent, screen, act, waitFor } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import FormRender from "../../Components/FormRender";
import { Formik } from "formik";

describe("Form", () => {
  it("calls function provided by onSubmit prop after pressing the submit button", async () => {
    const onSubmit = jest.fn();
    render(
      <Formik initialValues={{ username: "",
        password: "" }} onSubmit={onSubmit}><FormRender onSubmit={onSubmit}/></Formik>);

    act(() => {
      fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Submit"));
    });


    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);


      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});