import { createLazyFileRoute } from "@tanstack/react-router";

import EditFeedback from "../EditFeedback";

export const Route = createLazyFileRoute("/speech-feedback")({
  component: EditFeedback,
});
