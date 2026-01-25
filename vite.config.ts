/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import tanstackRouter from "@tanstack/router-plugin/vite";

export default defineConfig({
  base: "/ballot-example",
  build: {
    outDir: "build",
  },
  plugins: [react(), tsconfigPaths(), tanstackRouter()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup-tests.js",
  },
});
