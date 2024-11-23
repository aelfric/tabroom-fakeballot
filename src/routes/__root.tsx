import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";
import Layout from "../Layout.jsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <b>blah</b>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </>
  ),
});
