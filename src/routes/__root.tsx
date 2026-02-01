import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../Layout.jsx";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppContext } from "../app-context";
import { useSpeechRoundState } from "../speech/useSpeechRoundState";

function AppRoot() {
  const speechRound = useSpeechRoundState();
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
