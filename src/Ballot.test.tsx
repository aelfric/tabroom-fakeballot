import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import type { RouterHistory } from "@tanstack/react-router";
import {
  createBrowserHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import "@testing-library/jest-dom/vitest";
import { routeTree } from "./routeTree.gen";
import { userEvent } from "@testing-library/user-event";

describe("Landing Page", () => {
  let history: RouterHistory;

  beforeEach(() => {
    history = createBrowserHistory();
    expect(window.location.pathname).toBe("/");
  });

  afterEach(() => {
    history.destroy();
    window.history.replaceState(null, "root", "/");
    cleanup();
  });

  it("can open a speech ballot", async () => {
    const user = userEvent.setup();
    const router = createRouter({
      routeTree,
    });
    render(<RouterProvider router={router} />);
    const startButtons = await screen.findAllByText("ON MY WAY!");
    await user.click(startButtons[0]);

    expect(await screen.findByText("General Feedback")).toBeInTheDocument();
  });
});
