import { createContext, Dispatch, SetStateAction } from "react";
import { CongressEntry } from "./congress/types";
import { SpeechRound } from "./speech/useSpeechRoundState";
import { DebateRoundState } from "./debate/types";

export type BallotState = "unstarted" | "started" | "entered" | "confirmed";
export interface RoundState<E> {
  entries: E[];
  setEntries: Dispatch<SetStateAction<E[]>>;
  rfd: string;
  setRfd: Dispatch<SetStateAction<string>>;
  ballotState: BallotState;
  setBallotState: Dispatch<SetStateAction<BallotState>>;
}

export type CongressRound = RoundState<CongressEntry>;
export type Round = SpeechRound | CongressRound;

export const AppContext = createContext<{
  speechRound?: SpeechRound;
  congressRound?: CongressRound;
  debateRound?: DebateRoundState;
}>({});
