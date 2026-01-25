import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { CONGRESS_NAMES, CongressBallotStarted } from "./CongressBallotStarted";
import { userEvent } from "@testing-library/user-event";

describe("Congress Ballot", () => {
  it("renders", async () => {
    render(<CongressBallotStarted />);
    expect(await screen.findByText("Speeches")).toBeInTheDocument();
    expect(await screen.findByText("Rankings")).toBeInTheDocument();
  });

  it("reports ranking errors", async () => {
    const user = userEvent.setup();
    render(<CongressBallotStarted />);
    await user.click(await screen.findByText("Rankings"));
    let alannah = await screen.findByLabelText("Alannah Meadows");
    await user.type(alannah, "1");
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText("Oh, drat. Your ballot had errors."),
    ).toBeInTheDocument();
  });

  it("allows ranking", async () => {
    const user = userEvent.setup();
    render(<CongressBallotStarted />);
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
});
