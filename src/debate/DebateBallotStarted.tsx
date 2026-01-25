import { useState } from "react";
import Content from "../Content";
import { BallotStartedMenu } from "./BallotStartedMenu";
import { DebateBallotMain } from "./DebateBallotMain";
import { ConfirmBallot } from "./ConfirmBallot";
import { BallotConfirmed } from "./BallotConfirmed";

export function DebateBallotStarted() {
  const [round, setRound] = useState<DebateRound>({
    entries: [
      {
        code: "Williams Prep GB",
        speakers: [
          {
            name: "Kiersten Buzbee",
            last: "Buzbee",
          },
          {
            name: "Teegin Groves",
            last: "Groves",
          },
        ],
      },
      {
        code: "Academy NB",
        speakers: [
          {
            name: "Ross Brown",
            last: "Brown",
          },
          {
            name: "Jackie Nguyen",
            last: "Nguyen",
          },
        ],
      },
    ],
  });

  const [confirming, setConfirming] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <BallotConfirmed
        entries={round.entries}
        winningEntry={round.winningEntry}
        rfd={round.rfd}
      />
    );
  }

  if (confirming) {
    return (
      <ConfirmBallot
        entries={round.entries}
        winningEntry={round.winningEntry}
        confirm={() => setConfirming(false)}
        confirmed={() => setConfirmed(true)}
        rfd={round.rfd}
      />
    );
  } else {
    return (
      <Content
        main={
          <DebateBallotMain
            round={round}
            setRound={setRound}
            onSubmit={() => setConfirming(true)}
          />
        }
        menu={<BallotStartedMenu />}
      />
    );
  }
}
