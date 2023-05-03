import { describe, expect, it, vitest } from "vitest";
import { cleanup, render, fireEvent } from "@testing-library/react";
import CardItemUniversity from "./index";
import userEvent from "@testing-library/user-event";

describe("test the card item university", () => {
  const data = {
    name: "Test University",
    alpha_two_code: "US",
    web_pages: ["https://testuniversity.edu"],
    domains: ["testuniversity.edu"],
    country: "United States",
    "state-province": "California",
  };
  it("renders correctly", async () => {
    const { getByText } = await render(<CardItemUniversity data={data} />);
    expect(getByText(data.name)).toBeInTheDocument();
    expect(getByText(data.alpha_two_code)).toBeInTheDocument();
    expect(getByText(/United States/i)).toBeInTheDocument();
    expect(getByText(/California/i)).toBeInTheDocument();
  });
});
