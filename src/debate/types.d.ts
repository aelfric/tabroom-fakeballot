import { Dispatch, SetStateAction } from "react";
import { BallotState } from "../app-context";

type TeamDebateEntry = {
  code: string;
  side: "Aff" | "Neg";
  speakers: {
    name: string;
    last: string;
    points?: number;
  }[];
  comments: string;
};

export type DebateRound = {
  entries: TeamDebateEntry[];
  winningEntry: number;
  winningSide: "Aff" | "Neg" | "";
  rfd: string;
};

export type DebateRoundState = {
  round: DebateRound;
  setRound: Dispatch<SetStateAction<DebateRound>>;
  ballotState: BallotState;
  setBallotState: Dispatch<SetStateAction<BallotState>>;
};
