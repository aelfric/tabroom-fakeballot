import { DebateRound, DebateRoundState } from "./types";
import { useState } from "react";
import { BallotState } from "../app-context";

export const DEBATE_ROUND = {
  rfd: "",
  winningSide: "",
  winningEntry: -1,
  entries: [
    {
      side: "Aff",
      code: "Williams Prep GB",
      comments: "",
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
      side: "Neg",
      code: "Academy NB",
      comments: "",
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
} satisfies DebateRound;

export function useDebateRoundState(): DebateRoundState {
  const [round, setRound] = useState<DebateRound>(DEBATE_ROUND);

  const [ballotState, setBallotState] = useState<BallotState>("unstarted");
  return {
    round,
    setRound,
    ballotState,
    setBallotState,
  };
}
