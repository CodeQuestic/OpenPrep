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
              label: "Accordion",
              slug: "react-components/accordion",
            },
            {
              label: "Alerts",
              slug: "react-components/alert",
            },
            {
              label: "Button Group",
              slug: "react-components/button-group",
            },
            {
              label: "Buttons",
              slug: "react-components/buttons",
            },
            {
              label: "Modal",
              slug: "react-components/modal",
            },
            {
              label: "Star Rating",
              slug: "react-components/star-rating",
            },
            {
              label: "Testimonials",
              slug: "react-components/testimonials",
            },
            {
              label: "Toast",
              slug: "react-components/toast",
            },
            {
              label: "Tooltip",
              slug: "react-components/tooltip",
            },
          ],
        },
        {
          label: "Node",
          items: [
            { label: "Introduction", slug: "node/introduction" },
            { label: "Cluster Module", slug: "node/cluster-module" },
            { label: "Microservices", slug: "node/microservices" },
            { label: "Streams", slug: "node/streams" },
            {
              label: "Event Loop",
              slug: "node/event-loop",
            },
          ],
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
