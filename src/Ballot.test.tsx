// @ts-nocheck
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CurrentBallots from "./CurrentBallots";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterContextProvider,
  RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

describe("Landing Page", () => {
  it("can open a speech ballot", async () => {
    const rootRoute = createRootRoute();
    let router = createRouter({ routeTree: rootRoute });
    render(
      <RouterProvider router={router} defaultComponent={CurrentBallots} />,
    );
    const startButtons = await screen.findAllByText("ON MY WAY!");
    fireEvent.click(startButtons[0]);

    expect(screen.queryByText("OBT Round 1")).toBeInTheDocument();
  });
});
