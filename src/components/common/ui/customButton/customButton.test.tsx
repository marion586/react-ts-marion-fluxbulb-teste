import { describe, expect, it, vitest } from "vitest";
import { cleanup, render, fireEvent } from "@testing-library/react";
import CustomButton from "@/components/common/ui/customButton";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import "@testing-library/jest-dom";
describe("Render a customed button ", async () => {
  const handleClick = vitest.fn();

  it("renders ButtonCustom component without errors", async () => {
    await render(
      <CustomButton
        onClick={handleClick}
        content="Click me"
        type={{ borderRadius: 20 }}
      />
    );
  });

  it("dispalys correct content", async () => {
    const { getByText } = await render(
      <CustomButton
        onClick={handleClick}
        content="Click me"
        type={{ borderRadius: 20 }}
      />
    );
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("call on click function on called", async () => {
    const user = userEvent.setup();
    const { getByText } = await render(
      <CustomButton
        type={{ borderRadius: 20 }}
        content="Click me"
        onClick={handleClick}
      />
    );
    await user.click(getByText("Click me"));

    expect(handleClick).toHaveBeenCalled();
  });

  it("has correct size", async () => {
    const { getByRole } = await render(
      <CustomButton
        type={{ borderRadius: 20 }}
        content="Click me"
        onClick={handleClick}
        size="small"
      />
    );
    expect(getByRole("button")).toHaveClass("ant-btn-sm");
  });
  it("has correct width", async () => {
    const { getByRole } = await render(
      <CustomButton
        type={{ borderRadius: 20, backgroundColor: "blue" }}
        content="Click me"
        onClick={handleClick}
        size="small"
        width="100px"
      />
    );
    expect(getByRole("button")).toHaveStyle("width: 100px");
    expect(getByRole("button")).toHaveStyle("background-color: blue");
  });
});
