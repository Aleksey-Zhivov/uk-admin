import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repo = env.VITE_GH_REPO || "";
  const base = repo ? `/${repo}/` : "/";

  return {
    base,
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  };
});
