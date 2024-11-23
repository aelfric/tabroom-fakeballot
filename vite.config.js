import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    base: "/ballot-example",
    build: {
      outDir: "build",
    },
    plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./setup-tests.js",
    },
  };
});
