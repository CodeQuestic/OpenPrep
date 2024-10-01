import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "OpenPrep",
      logo: {
        light: "./src/assets/light-logo.svg",
        dark: "./src/assets/dark-logo.svg",
      },
      social: {
        github: "https://github.com/CodeQuestic/OpenPrep",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Getting Started", slug: "get-started" },
            { label: "FAQ", slug: "faq" },
          ],
        },
        {
          label: "React",
          items: [{ label: "Introduction", slug: "react/introduction" }],
        },
        {
          label: "React Components",
          items: [{ label: "Buttons", slug: "react-components/buttons" }],
        },
        {
          label: "Node",
          items: [{ label: "Introduction", slug: "node/introduction" }],
        },
        {
          label: "Mongo DB",
          items: [{ label: "Introduction", slug: "mongodb/introduction" }],
        },
      ],
    }),
  ],
});
