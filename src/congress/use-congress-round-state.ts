import { CongressEntry, CongressRoundState } from "./types";
import { useImmer } from "use-immer";
import { CONGRESS_ENTRIES } from "./CongressBallotStarted";
import { SetStateAction, useState } from "react";
import { BallotState, CongressRound } from "../app-context";

const CONGRESS_ROUND = {
  entries: CONGRESS_ENTRIES,
  setEntries: function (value: SetStateAction<CongressEntry[]>): void {
    throw new Error("Function not implemented.");
  },
  rfd: "",
  setRfd: function (value: SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  ballotState: "unstarted",
  setBallotState: function (value: SetStateAction<BallotState>): void {
    throw new Error("Function not implemented.");
  },
} satisfies CongressRound;

export function useCongressRoundState(): CongressRoundState {
  const [round, setRound] = useState<CongressRound>(CONGRESS_ROUND);

  return {
    ballotState: "unstarted",
    round,
    setBallotState: (value) => {},
    setRound,
  };
}
