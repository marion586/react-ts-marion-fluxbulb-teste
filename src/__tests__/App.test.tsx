import { describe, it, expect, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "@/App";
import userEvent from "@testing-library/user-event";

describe("Renders main page correctly", async () => {
  afterEach(() => {
    cleanup();
  });
  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText("mon premier test");

    // Expectations
    // expect(h1).not.toBeNull();
    expect(h1).toBeInTheDocument();
  });

  it("Should show the button count set to 0", async () => {
    // Setup
    render(<App />);
    const button = await screen.queryByText("count is 0");

    // Expectations
    expect(button).not.toBeNull();
  });

  it("Should show the button count set to 3", async () => {
    // Setup
    render(<App />);
    const user = userEvent.setup();
    const button = await screen.queryByText("count is 0");

    // Pre Expectations
    expect(button).not.toBeNull();

    // Actions
    // fireEvent.click(button as HTMLElement);
    // fireEvent.click(button as HTMLElement);
    // fireEvent.click(button as HTMLElement);

    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);

    // Post Expectations
    expect(button?.innerHTML).toBe("count is 3");
  });
});
