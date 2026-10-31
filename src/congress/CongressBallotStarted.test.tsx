import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { CONGRESS_NAMES, CongressBallotStarted } from "./CongressBallotStarted";
import { userEvent } from "@testing-library/user-event";
import {
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterHistory,
  RouterProvider,
} from "@tanstack/react-router";
import { AppContext } from "../app-context";
import { useCongressRoundState } from "./use-congress-round-state";
import { routeTree } from "../routeTree.gen";

describe("Congress Ballot", () => {
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
        const congressRound = useCongressRoundState();
        return (
          <AppContext.Provider value={{ congressRound }}>
            <CongressBallotStarted />
          </AppContext.Provider>
        );
      },
    });

    const routeTree = rootRoute.addChildren([indexRoute]);
    const router = createRouter({ routeTree, history });

    render(<RouterProvider router={router} />);
  }

  type User = ReturnType<typeof userEvent.setup>;

  // The new speech/PO form is always the first form in #new;
  // saved speeches follow it in order.
  function speechForms() {
    return Array.from(document.querySelectorAll<HTMLFormElement>("#new form"));
  }

  async function savePoints(user: User, form: HTMLFormElement, points: string) {
    const input = within(form).getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, points);
    await user.click(within(form).getByRole("button", { name: "Save" }));
  }

  async function selectLegislator(user: User, name: string) {
    await user.selectOptions(
      document.querySelector<HTMLSelectElement>('select[name="entry_id"]')!,
      name,
    );
  }

  function rankingCells(name: string) {
    const row = screen.getByLabelText(name).closest("tr")!;
    const [, points, average] = Array.from(row.cells);
    return { points, average };
  }

  async function rankFirstEight(user: User) {
    await user.click(await screen.findByText("Rankings"));
    for (let i = 0; i < 8; i++) {
      await user.type(
        await screen.findByLabelText(CONGRESS_NAMES[i]),
        String(i + 1),
      );
    }
    await user.click(screen.getByText("Submit Ballot"));
  }

  it("renders", async () => {
    renderComponent();
    expect(await screen.findByText("Speeches")).toBeInTheDocument();
    expect(await screen.findByText("Rankings")).toBeInTheDocument();
  });

  it("reports ranking errors", async () => {
    const user = userEvent.setup();
    renderComponent();
    await user.click(await screen.findByText("Rankings"));
    await user.type(await screen.findByLabelText("Alannah Meadows"), "1");
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText("Oh, drat. Your ballot had errors."),
    ).toBeInTheDocument();
  });

  it("allows ranking", async () => {
    const user = userEvent.setup();
    renderComponent();
    await user.click(await screen.findByText("Rankings"));

    await user.type(await screen.findByLabelText(CONGRESS_NAMES[0]), "1");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[1]), "2");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[2]), "3");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[3]), "4");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[4]), "5");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[5]), "6");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[6]), "7");
    await user.type(await screen.findByLabelText(CONGRESS_NAMES[7]), "8");
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText(/YES! CORRECT! CONFIRM IT/i),
    ).toBeInTheDocument();
  });

  it("numbers speeches across legislators and shows their points", async () => {
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText("Per-Speech Points");

    await savePoints(user, speechForms()[0], "4");
    expect(await screen.findByText("Speech #1")).toBeInTheDocument();
    await savePoints(user, speechForms()[0], "6");
    expect(await screen.findByText("Speech #2")).toBeInTheDocument();

    await selectLegislator(user, CONGRESS_NAMES[1]);
    await savePoints(user, speechForms()[0], "5");
    expect(await screen.findByText("Speech #3")).toBeInTheDocument();

    await user.click(screen.getByText("Rankings"));
    expect(rankingCells(CONGRESS_NAMES[0]).points).toHaveTextContent("4,6");
    expect(rankingCells(CONGRESS_NAMES[0]).average).toHaveTextContent("5");
    expect(rankingCells(CONGRESS_NAMES[1]).points).toHaveTextContent("5");
  });

  it("updates an existing speech", async () => {
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText("Per-Speech Points");

    await savePoints(user, speechForms()[0], "4");
    await screen.findByText("Speech #1");
    await savePoints(user, speechForms()[1], "2");
    expect(screen.getByText("Speech #1")).toBeInTheDocument();

    await user.click(screen.getByText("Rankings"));
    await waitFor(() =>
      expect(rankingCells(CONGRESS_NAMES[0]).points).toHaveTextContent("2"),
    );
  });

  it("adds and updates a PO session without renaming the legislator", async () => {
    const user = userEvent.setup();
    renderComponent();
    await screen.findByText("Per-Speech Points");

    await user.click(screen.getByRole("checkbox"));
    await screen.findByText("New PO rating:");
    await savePoints(user, speechForms()[0], "5");
    expect(await screen.findByText("PO Session #1")).toBeInTheDocument();

    await savePoints(user, speechForms()[1], "3");
    expect(
      await screen.findByRole("heading", { name: CONGRESS_NAMES[0] }),
    ).toBeInTheDocument();
    expect(screen.getByText("PO Session #1")).toBeInTheDocument();

    await user.click(screen.getByText("Rankings"));
    await waitFor(() =>
      expect(rankingCells(CONGRESS_NAMES[0]).points).toHaveTextContent("3"),
    );
  });

  it("returns to the ballot with ranks kept when re-entering", async () => {
    const user = userEvent.setup();
    renderComponent();
    await rankFirstEight(user);

    await user.click(await screen.findByText("NO! RE-ENTER BALLOT"));

    await user.click(await screen.findByText("Rankings"));
    for (let i = 0; i < 8; i++) {
      expect(screen.getByLabelText(CONGRESS_NAMES[i])).toHaveValue(i + 1);
    }
  });

  it("returns home with the round under past ballots when confirmed", async () => {
    const user = userEvent.setup();
    history.push("/congress");
    render(<RouterProvider router={createRouter({ routeTree, history })} />);
    await rankFirstEight(user);

    await user.click(await screen.findByText("YES! CORRECT! CONFIRM IT"));

    expect(await screen.findByText("Current Assignments")).toBeInTheDocument();
    await user.click(screen.getByText("Past scores and feedback"));
    expect(await screen.findByText("Past Ballots")).toBeInTheDocument();
    expect(screen.getByText(CONGRESS_NAMES[0])).toBeInTheDocument();
  });
});
