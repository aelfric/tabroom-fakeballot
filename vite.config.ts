/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tanstackRouter from "@tanstack/router-plugin/vite";

export default defineConfig({
  base: "/ballot-example",
  build: {
    outDir: "build",
  },
  tsconfigPaths: true,
  plugins: [react(), tanstackRouter()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup-tests.js",
    coverage: {
        exclude: ["./build/**/*"],
        reporter: ["text", "lcov"],
    },
  },
});
