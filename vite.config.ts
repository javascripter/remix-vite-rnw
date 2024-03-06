import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

import { vercelPreset } from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  // For Vercel deployment, we need to use the Vercel preset:
  // https://github.com/vercel/vercel/pull/11031
  plugins: [remix({ presets: [vercelPreset()] }), tsconfigPaths()],
});
