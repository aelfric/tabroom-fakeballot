import { createLazyFileRoute } from "@tanstack/react-router";
import CurrentBallots from "../CurrentBallots";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <CurrentBallots />;
}
