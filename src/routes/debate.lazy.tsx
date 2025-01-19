import { createLazyFileRoute } from "@tanstack/react-router";
import { DebateBallotStarted } from "../debate/DebateBallotStarted";

export const Route = createLazyFileRoute("/debate")({
  component: DebateBallotStarted,
});
