import React, { useState } from "react";
import Content from "../Content";
import { BallotStartedMenu } from "../congress/BallotStartedMenu";
import { DebateBallotMain } from "./DebateBallotMain";
import {ConfirmBallot} from "./ConfirmBallot";

export function DebateBallotStarted() {
  const [round, setRound] = useState<DebateRound>({
    entries: [
      {
        code: "Williams Prep GB",
        speakers: [
          {
            name: "Kiersten Buzbee",
            last: "Buzbee"
          },
          {
            name: "Teegin Groves",
            last: "Groves"
          },
        ],
      },
      {
        code: "Academy NB",
        speakers: [
          {
            name: "Ross Brown",
            last: "Brown"
          },
          {
            name: "Jackie Nguyen",
            last: "Nguyen"
          },
        ],
      },
    ],
  });

  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <ConfirmBallot
        entries={round.entries}
        winningEntry={round.winningEntry}
        confirm={() => setConfirming(false)}
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
