import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    base: "/ballot-example",
    build: {
      outDir: "build",
    },
    plugins: [react()],
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: './setup-tests.js'
    },
  };
});
