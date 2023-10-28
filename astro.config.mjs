import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_mixin.scss", "src/styles/_tokens.scss";`,
        },
      },
    },
  },
});
