import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

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
        "ph": ["matrix-logo"],
        "simple-icons": ["anilist", "myanimelist", "kitsu"],
        twemoji: ["paw-prints", "snowflake", "blue-heart", "pink-heart", "ribbon", "chocolate-bar", "kitchen-knife", "white-heart", "rice-ball"],
      },
    }),
  ],

  image: {
    domains: ["cdn.snoyw.net"],
    remotePatterns: [{ protocol: "https" }],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),
});
