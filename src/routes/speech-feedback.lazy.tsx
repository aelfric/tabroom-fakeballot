import { createLazyFileRoute } from "@tanstack/react-router";

import EditFeedback from "../speech/EditFeedback";

export const Route = createLazyFileRoute("/speech-feedback")({
  component: EditFeedback,
});
