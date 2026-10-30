import { Dispatch, SetStateAction } from "react";
import { BallotState } from "../app-context";

export type CongressEntry = {
  name: string;
  id: number;
  speeches: Speech[];
  rank?: number;
};

export type Speech = {
  name?: string;
  topic?: string;
  comments?: string;
  po?: boolean;
  side?: "1" | "2";
  points?: number;
};

export type CongressRound = {
  entries: CongressEntry[];
};

export type CongressRoundState = {
  round: CongressRound;
  setRound: Dispatch<SetStateAction<CongressRound>>;
  ballotState: BallotState;
  setBallotState: Dispatch<SetStateAction<BallotState>>;
};
