import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/congress-feedback")({
  component: () => <p>Hello</p>,
});
