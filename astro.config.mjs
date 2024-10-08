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
            { label: "Code Of Conduct", slug: "code-of-conduct" },
            { label: "Naming Conventions", slug: "naming-conventions" },
          ],
        },
        {
          label: "React",
          items: [{ label: "Introduction", slug: "react/introduction" }],
        },
        {
          label: "React Components",
          items: [
            {
              label: "Basic Components",
              items: [
                {
                  label: "Accordion",
                  slug: "react-components/basics/accordion",
                },
                { label: "Alerts", slug: "react-components/basics/alert" },
                {
                  label: "Breadcrumb",
                  slug: "react-components/basics/breadcrumb",
                },
                {
                  label: "Button Group",
                  slug: "react-components/basics/button-group",
                },
                { label: "Buttons", slug: "react-components/basics/buttons" },
                { label: "Chips", slug: "react-components/basics/chips" },
                {
                  label: "Dropdowns",
                  slug: "react-components/basics/dropdown",
                },
                { label: "Input", slug: "react-components/basics/input" },
                { label: "Lightbox", slug: "react-components/basics/lightbox" },
                { label: "Modal", slug: "react-components/basics/modal" },
                {
                  label: "Navigation Bar",
                  slug: "react-components/basics/navbar",
                },
                { label: "Popovers", slug: "react-components/basics/popover" },
                {
                  label: "Social Buttons",
                  slug: "react-components/basics/social-buttons",
                },
                {
                  label: "Star Rating",
                  slug: "react-components/basics/star-rating",
                },
                { label: "Tabs", slug: "react-components/basics/tabs" },
                {
                  label: "Testimonials",
                  slug: "react-components/basics/testimonials",
                },
                { label: "Toast", slug: "react-components/basics/toast" },
                { label: "Tooltip", slug: "react-components/basics/tooltip" },
              ],
            },
            {
              label: "Advanced Components",
              items: [
                {
                  label: "Advance",
                  slug: "react-components/advance/advance",
                },
              ],
            },
          ],
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
