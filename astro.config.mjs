import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
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
        ],
        "simple-icons": ["anilist"],
        twemoji: ["paw-prints", "snowflake"],
      },
    }),
  ],
  image: {
    domains: ["cdn.snoyw.net"],
  },
});
