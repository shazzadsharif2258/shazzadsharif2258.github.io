// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const REPO_NAME = "shazzadsharif2258"; // your repo name

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    base: isProd ? `/${REPO_NAME}/` : "/",
    server: { host: "::", port: 8080 },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  };
});
