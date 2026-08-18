import { BallotState, RoundState } from "../app-context";
import { useState } from "react";
import { SpeechEntry } from "./types";
import { SPEECH_ENTRIES } from "./FakeSpeechBallot";

export type SpeechRound = RoundState<SpeechEntry>;

export function useSpeechRoundState(): SpeechRound {
  const [entries, setEntries] = useState<SpeechEntry[]>(
    SPEECH_ENTRIES.map(
      (e): SpeechEntry => ({
        ...e,
        title: "",
        ranks: "",
        points: "",
      }),
    ),
  );
  const [rfd, setRfd] = useState("");
  const [ballotState, setBallotState] = useState<BallotState>("unstarted");

  return {
    entries,
    setEntries,
    rfd,
    setRfd,
    ballotState,
    setBallotState,
  };
}
