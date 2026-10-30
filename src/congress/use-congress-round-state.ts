import { CongressRound, CongressRoundState } from "./congress.types";
import { CONGRESS_ENTRIES } from "./CongressBallotStarted";
import { useState } from "react";
import { BallotState } from "../app-context";

const CONGRESS_ROUND = {
  entries: CONGRESS_ENTRIES,
} satisfies CongressRound;

export function useCongressRoundState(): CongressRoundState {
  const [round, setRound] = useState<CongressRound>(CONGRESS_ROUND);
  const [ballotState, setBallotState] = useState<BallotState>("unstarted");

  return {
    ballotState,
    round,
    setBallotState,
    setRound,
  };
}
