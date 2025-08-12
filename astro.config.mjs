import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["web", "email", "close"],
        "fa6-brands": [
          "discord",
          "youtube",
          "x-twitter",
          "reddit-alien",
          "github",
          "twitch",
          "steam",
          "bluesky",
        ],
        "simple-icons": ["anilist", "myanimelist", "kitsu"],
        twemoji: ["paw-prints", "snowflake"],
      },
    }),
  ],

  image: {
    domains: ["cdn.snoyw.net"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
