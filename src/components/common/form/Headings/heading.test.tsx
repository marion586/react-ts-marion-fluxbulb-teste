import { describe, expect, it, vitest, afterEach } from "vitest";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import Heading from "@/components/common/form/Headings";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { Theme } from "@/themes/fluxbulb.theme";
describe("Heading component", () => {
  it("renders the title with the correct level and text", () => {
    render(<Heading level={1} title="Test Heading" />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Test Heading");
  });

  it("renders the title with an icon", () => {
    render(<Heading level={2} title="Test Heading" icon={<span>Icon</span>} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Icon Test Heading");
  });

  it("renders the title with the cardTitle style when cardTitle prop is true", () => {
    render(<Heading level={3} title="Test Heading" cardTitle={true} />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveStyle({ fontWeight: "600", fontFamily: "inter" });
  });
});
