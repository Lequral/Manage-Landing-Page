import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@assets": "../src/assets"
    }
  },
  plugins: [sveltekit()]
});
