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
          items: [
            { label: "Introduction", slug: "react/introduction" },
            { label: "JSX (Javascript XML)", slug: "react/jsx" },
            { label: "Components in React", slug: "react/components" },
            { label: "Hooks in React", slug: "react/hooks" },
            { label: "State & Props", slug: "react/state-and-props" },
            { label: "Component Lifecycle", slug: "react/component-lifecycle" },
            { label: "Event Handling", slug: "react/event-handling" },
            { label: "Forms in React", slug: "react/forms" },
          ],
        },
        {
          label: "React Components",
          items: [
            {
              label: "Using Tailwind",
              items: [
                {
                  label: "Accordion",
                  slug: "react-components/tailwind/accordion",
                },
                {
                  label: "Alerts",
                  slug: "react-components/tailwind/alert",
                },
                {
                  label: "Breadcrumb",
                  slug: "react-components/tailwind/breadcrumb",
                },
                {
                  label: "Button Group",
                  slug: "react-components/tailwind/button-group",
                },
                {
                  label: "Buttons",
                  slug: "react-components/tailwind/buttons",
                },
                {
                  label: "Chips",
                  slug: "react-components/tailwind/chips",
                },
                {
                  label: "Dropdowns",
                  slug: "react-components/tailwind/dropdown",
                },
                {
                  label: "Input",
                  slug: "react-components/tailwind/input",
                },
                {
                  label: "Lightbox",
                  slug: "react-components/tailwind/lightbox",
                },
                {
                  label: "Modal",
                  slug: "react-components/tailwind/modal",
                },
                {
                  label: "Navigation Bar",
                  slug: "react-components/tailwind/navbar",
                },
                {
                  label: "Popovers",
                  slug: "react-components/tailwind/popover",
                },
                {
                  label: "Social Buttons",
                  slug: "react-components/tailwind/social-buttons",
                },
                {
                  label: "Star Rating",
                  slug: "react-components/tailwind/star-rating",
                },
                {
                  label: "Tabs",
                  slug: "react-components/tailwind/tabs",
                },
                {
                  label: "Testimonials",
                  slug: "react-components/tailwind/testimonials",
                },
                {
                  label: "Toast",
                  slug: "react-components/tailwind/toast",
                },
                {
                  label: "Tooltip",
                  slug: "react-components/tailwind/tooltip",
                },
              ],
            },
            {
              label: "Using CSS Modules",
              items: [
                {
                  label: "CSS Modules",
                  slug: "react-components/css-modules/css-module",
                },
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
          items: [
            { label: "Introduction", slug: "mongodb/introduction" },
            {
              label: "Indexing Strategies",
              slug: "mongodb/indexing-strategies",
            },
            {
              label: "Replication and Sharding",
              slug: "mongodb/replication-and-sharding",
            },
            {
              label: "Schema Design Best Practices",
              slug: "mongodb/schema-design-best-practices",
            },
            {
              label: "Advanced Aggregation Pipelines",
              slug: "mongodb/advanced-aggregation-pipelines",
            },
          ],
        },
      ],
    }),
  ],
});
