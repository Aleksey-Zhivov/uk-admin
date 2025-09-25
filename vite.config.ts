import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const repo = process.env.VITE_GH_REPO;
const base = repo ? `/${repo}/` : "/";

export default defineConfig({
  base: base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
