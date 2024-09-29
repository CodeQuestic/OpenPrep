import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "OpenPrep",
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
      },
      social: {
        github: "https://github.com/CodeQuestic/OpenPrep",
      },
      sidebar: [
        {
          label: "React",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Theory Concepts", slug: "react/theory-concepts" },
          ],
        },
        {
          label: "Node",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Theory Concepts", slug: "node/theory-concepts" },
          ],
        },
        {
          label: "Mongo DB",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Theory Concepts", slug: "mongodb/theory-concepts" },
          ],
        },
      ],
    }),
  ],
});
