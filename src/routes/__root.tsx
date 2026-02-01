import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../Layout.jsx";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppContext } from "../app-context";
import { useSpeechRoundState } from "../speech/useSpeechRoundState";

import { useDebateRoundState } from "../debate/use-debate-round-state";

function AppRoot() {
  const speechRound = useSpeechRoundState();
  const debateRound = useDebateRoundState();
  return (
    <AppContext value={{ speechRound, debateRound }}>
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
