import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/debate-feedback")({
  component: () => <p>Hello</p>,
});
