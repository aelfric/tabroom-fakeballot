import { createContext, Dispatch, SetStateAction } from "react";
import { SpeechEntry } from "./speech/types";
import { CongressEntry } from "./congress/types";

export type BallotState = "unstarted" | "started" | "entered" | "confirmed";
interface RoundState<E> {
  entries: E[];
  setEntries: Dispatch<SetStateAction<E[]>>;
  rfd: string;
  setRfd: Dispatch<SetStateAction<string>>;
  ballotState: BallotState;
  setBallotState: Dispatch<SetStateAction<BallotState>>;
}

export type SpeechRound = RoundState<SpeechEntry>;
export type CongressRound = RoundState<CongressEntry>;
export type DebateRound = RoundState<TeamDebateEntry>;
export type Round = SpeechRound | CongressRound | DebateRound;

export const AppContext = createContext<{
  speechRound?: SpeechRound;
  congressRound?: CongressRound;
  debateRound?: DebateRound;
}>({});
