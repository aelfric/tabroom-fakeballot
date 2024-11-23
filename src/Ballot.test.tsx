// @ts-nocheck
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Landing Page", () => {
  it("can open a speech ballot", () => {
    render(<App />);
    const startButtons = screen.getAllByText("ON MY WAY!");
    fireEvent.click(startButtons[0]);

    expect(
      screen.queryByText("OBT Round 1 Ballot for Riccobono")
    ).toBeInTheDocument();
  });
});
