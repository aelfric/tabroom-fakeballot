import { useContext } from "react";
import Content from "../Content";
import { BallotStartedMenu } from "./BallotStartedMenu";
import { DebateBallotMain } from "./DebateBallotMain";
import { ConfirmBallot } from "./ConfirmBallot";
import { BallotConfirmed } from "./BallotConfirmed";
import { AppContext } from "../app-context";

export function DebateBallotStarted() {
  const { debateRound } = useContext(AppContext);
  const { round, setRound, ballotState, setBallotState } = debateRound!;

  if (ballotState === "confirmed") {
    return (
      <BallotConfirmed
        entries={round.entries}
        winningEntry={round.winningEntry}
        rfd={round.rfd}
      />
    );
  }

  if (ballotState === "entered") {
    return (
      <ConfirmBallot
        entries={round.entries}
        winningEntry={round.winningEntry}
        confirm={() => setBallotState("started")}
        confirmed={() => setBallotState("confirmed")}
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
            onSubmit={() => setBallotState("entered")}
          />
        }
        menu={<BallotStartedMenu />}
      />
    );
  }
}
