import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterHistory,
  RouterProvider,
} from "@tanstack/react-router";
import { cleanup, render, screen } from "@testing-library/react";
import { AppContext } from "../app-context";
import { userEvent } from "@testing-library/user-event/dist/cjs/index.js";
import { DebateBallotStarted } from "./DebateBallotStarted";
import { DEBATE_ROUND, useDebateRoundState } from "./use-debate-round-state";

describe("Debate Ballot", () => {
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

  function renderComponent() {
    const rootRoute = createRootRoute();
    const indexRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/",
      component: () => {
        const debateRound = useDebateRoundState();
        return (
          <AppContext.Provider value={{ debateRound }}>
            <DebateBallotStarted />
          </AppContext.Provider>
        );
      },
    });

    const routeTree = rootRoute.addChildren([indexRoute]);
    const router = createRouter({ routeTree, history });

    render(<RouterProvider router={router} />);
  }

  it("renders", async () => {
    renderComponent();
    expect(await screen.findByText("Submit Ballot")).toBeInTheDocument();
  });

  it("reports ranking errors", async () => {
    const user = userEvent.setup();
    renderComponent();
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[0].code}_0_points`),
      "29",
    );
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[0].code}_1_points`),
      "28",
    );
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[1].code}_0_points`),
      "27",
    );
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[1].code}_1_points`),
      "27",
    );
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText("Oh, drat. Your ballot had errors."),
    ).toBeInTheDocument();
  });

  it("allows ranking", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[0].code}_0_points`),
      "29",
    );
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[0].code}_1_points`),
      "28",
    );
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[1].code}_0_points`),
      "27",
    );
    await user.type(
      await screen.findByLabelText(`${DEBATE_ROUND.entries[1].code}_1_points`),
      "27",
    );

    await user.selectOptions(
      screen.getByLabelText("Winner"),
      "Williams Prep GB",
    );

    await user.click(screen.getByLabelText("Aff"));
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText(/YES! CORRECT! CONFIRM!/i),
    ).toBeInTheDocument();
  });
});
