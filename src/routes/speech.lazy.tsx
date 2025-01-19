import { createLazyFileRoute } from "@tanstack/react-router";
import { CongressBallotStarted } from "../congress/CongressBallotStarted";
import { SpeechBallot } from "../speech/SpeechBallot";

import FakeSpeechBallot from "../speech/FakeSpeechBallot";

export const Route = createLazyFileRoute("/speech")({
  component: FakeSpeechBallot,
});
