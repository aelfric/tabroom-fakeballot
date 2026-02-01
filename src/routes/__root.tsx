import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../Layout.jsx";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppContext, BallotState, SpeechRound } from "../app-context";
import { useState } from "react";
import { SpeechEntry } from "../speech/types";
import { SPEECH_ENTRIES } from "../speech/FakeSpeechBallot";

function AppRoot() {
  const [entries, setEntries] = useState<SpeechEntry[]>(
    SPEECH_ENTRIES.map((e) => ({
      ...e,
      title: "",
      ranks: "",
      points: "",
    })),
  );
  const [rfd, setRfd] = useState("");
  const [ballotState, setBallotState] = useState<BallotState>("unstarted");

  const speechRound = {
    entries,
    setEntries,
    rfd,
    setRfd,
    ballotState,
    setBallotState,
  } satisfies SpeechRound;
  return (
    <AppContext value={{ speechRound }}>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </AppContext>
  );
}

export const Route = createRootRoute({
  component: AppRoot,
});
