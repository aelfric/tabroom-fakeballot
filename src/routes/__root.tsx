import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../Layout.jsx";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </>
  ),
});
