// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import * as fs from "fs";              // <— change to namespace import
import { componentTagger } from "lovable-tagger";

const ghPagesExtras = () => ({
  name: "gh-pages-extras",
  closeBundle() {
    const outDir = path.resolve(__dirname, "docs");
    const index = path.join(outDir, "index.html");
    if (fs.existsSync(index)) {
      fs.copyFileSync(index, path.join(outDir, "404.html"));   // SPA fallback
    }
    fs.writeFileSync(path.join(outDir, "CNAME"), "adorycreatives.com\n"); // custom domain
  },
});

export default defineConfig(({ mode }) => ({
  base: "/",                         // custom domain at root
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger(), ghPagesExtras()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "docs", emptyOutDir: true }, // outputs to /docs (GH Pages branch deploy)
}));
