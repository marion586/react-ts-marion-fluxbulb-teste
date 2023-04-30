import { describe, expect, it, vitest, afterEach } from "vitest";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import InputSearch from "@/components/common/form/inputSearch";
import userEvent from "@testing-library/user-event";
describe("Render a customed button ", async () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the input element", async () => {
    await render(
      <InputSearch placeholder="Rechercher" onChange={() => {}} value="" />
    );

    const inputElement = screen.getByPlaceholderText("Rechercher");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls the onChange function when the input value changes", async () => {
    const onChangeMock = vitest.fn();
    await render(
      <InputSearch placeholder="Rechercher" onChange={onChangeMock} value="" />
    );
    const inputElement = screen.getByPlaceholderText("Rechercher");
    await fireEvent.change(inputElement, { target: { value: "test" } });
    expect(onChangeMock).toHaveBeenCalledWith("test");
  });

  it("shows the clear icon when the input is focused", () => {
    const { getByTestId, getByRole } = render(
      <InputSearch onChange={() => {}} value="" />
    );
    const input = getByRole("textbox");
    fireEvent.focus(input);
    expect(getByTestId("close-icon")).toBeInTheDocument();
  });

  it("hides the clear icon when the input is not focused", () => {
    const { queryByTestId, getByRole } = render(
      <InputSearch onChange={() => {}} value="test" />
    );
    const input = getByRole("textbox");
    fireEvent.blur(input);
    expect(queryByTestId("close-icon")).not.toBeInTheDocument();
  });

  //   it("clears the input value when the clear icon is clicked", async () => {
  //     const onChange = vitest.fn();
  //     const { getByTestId, getByRole } = await render(
  //       <InputSearch onChange={onChange} value="test" />
  //     );

  //     const input = getByRole("textbox");
  //     const clearIcon = getByTestId("close-icon");

  //     fireEvent.click(clearIcon);
  //     expect(onChange).toHaveBeenCalledWith("");
  //     expect(input).toHaveValue("");
  //   });
});
