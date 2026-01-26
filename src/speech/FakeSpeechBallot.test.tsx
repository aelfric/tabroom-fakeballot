import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { SPEECH_ENTRIES } from "./FakeSpeechBallot";
import { userEvent } from "@testing-library/user-event";
import FakeSpeechBallot from "./FakeSpeechBallot";

describe("Speech Ballot", () => {
  it("renders", async () => {
    render(<FakeSpeechBallot />);
    expect(await screen.findByText("Submit Ballot")).toBeInTheDocument();
  });

  it("reports ranking errors", async () => {
    const user = userEvent.setup();
    render(<FakeSpeechBallot />);
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[0].code}_ranks`),
      "1",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[0].code}_points`),
      "99",
    );
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText("Oh, drat. Your ballot had errors."),
    ).toBeInTheDocument();
  });

  it("allows ranking", async () => {
    const user = userEvent.setup();
    render(<FakeSpeechBallot />);

    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[0].code}_ranks`),
      "1",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[0].code}_points`),
      "99",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[1].code}_ranks`),
      "2",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[1].code}_points`),
      "98",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[2].code}_ranks`),
      "3",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[2].code}_points`),
      "97",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[3].code}_ranks`),
      "4",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[3].code}_points`),
      "96",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[4].code}_ranks`),
      "5",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[4].code}_points`),
      "95",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[5].code}_ranks`),
      "6",
    );
    await user.type(
      await screen.findByLabelText(`${SPEECH_ENTRIES[5].code}_points`),
      "94",
    );
    await user.click(screen.getByText("Submit Ballot"));
    expect(
      await screen.findByText(/YES! CORRECT! CONFIRM IT/i),
    ).toBeInTheDocument();
  });
});
