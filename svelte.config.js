import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const githubPages = !process.argv.includes("dev") && !process.argv.includes("preview");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],
  kit: {
    alias: {
      "@assets": "./src/assets",
    },
    adapter: adapter(),
    paths: {
      base: githubPages ? "/Manage-Landing-Page" : "",
    },
  },
};

export default config;
