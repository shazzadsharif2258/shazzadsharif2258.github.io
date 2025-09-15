import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 🚨 IMPORTANT: set this to your repo name (e.g. "my-portfolio")
const REPO_NAME = "shazzadsharif2258";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    // On GitHub Pages for a project site:
    // https://<user>.github.io/<REPO_NAME>/
    // For user/organization site (username.github.io), set base: "/" instead.
    base: isProd ? `/${REPO_NAME}/` : "/",

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
