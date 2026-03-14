export type DocPage = {
    title: string;
    badge?: string;
    description: string;
    sections: {
        heading: string;
        body: string;
        code?: string;
        lang?: string;
    }[];
    prev?: { label: string; slug: string };
    next?: { label: string; slug: string };
};

export const docs: Record<string, DocPage> = {
    introduction: {
        title: "Introduction",
        badge: "Getting Started",
        description:
            "Lyrix is an open-source, code-first CMS and visual block editor built natively for Next.js. No lock-in, no black boxes.",
        sections: [
            {
                heading: "What is Lyrix?",
                body: "Lyrix lets you define reusable content blocks directly in TypeScript or JavaScript. Pages are composed visually using those blocks while staying fully owned, versioned, and rendered inside your Next.js app.",
            },
            {
                heading: "Why not just use another headless CMS?",
                body: "Most headless CMS platforms introduce complex schemas, vendor lock-in, and an abstraction layer between your code and your content. Lyrix removes all of that — your blocks are React components, your pages are JSON, and rendering is 100% yours.",
            },
            {
                heading: "Core Philosophy",
                body: "Developers should own their content structure as much as they own their code. If you can build a React component, you can build a Lyrix block.",
                code: `// A Lyrix block is just a component
export const HeroBlock = defineBlock({
  name: "Hero",
  schema: {
    title: { type: "string", required: true },
    subtitle: { type: "string" },
  },
  render: ({ title, subtitle }) => (
    <section className="py-24">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  ),
});`,
                lang: "tsx",
            },
        ],
        next: { label: "Installation", slug: "installation" },
    },
    installation: {
        title: "Installation",
        badge: "Getting Started",
        description: "Get Lyrix up and running in your Next.js project in under 5 minutes.",
        sections: [
            {
                heading: "Requirements",
                body: "Lyrix requires Node.js 18+, Next.js 14+ with App Router, and TypeScript (recommended).",
            },
            {
                heading: "Create a new Lyrix project",
                body: "The fastest way to get started is using the Lyrix CLI scaffolder. This sets up a full Next.js project with Lyrix pre-configured.",
                code: `npx create-lyrix-app my-project
cd my-project
npm run dev`,
                lang: "bash",
            },
            {
                heading: "Add to an existing project",
                body: "You can also install Lyrix into an existing Next.js app manually.",
                code: `npm install @lyrix/core @lyrix/renderer`,
                lang: "bash",
            },
        ],
        prev: { label: "Introduction", slug: "introduction" },
        next: { label: "Quick Start", slug: "quick-start" },
    },
    "quick-start": {
        title: "Quick Start",
        badge: "Getting Started",
        description: "Build and render your first Lyrix block in minutes.",
        sections: [
            {
                heading: "Define your first block",
                body: "Create a new file in your blocks directory and define a block using defineBlock().",
                code: `// blocks/hero.tsx
import { defineBlock } from "@lyrix/core";

export const HeroBlock = defineBlock({
  name: "Hero",
  schema: {
    title: { type: "string", required: true },
  },
  render: ({ title }) => (
    <section className="py-24 text-center">
      <h1 className="text-6xl font-bold">{title}</h1>
    </section>
  ),
});`,
                lang: "tsx",
            },
            {
                heading: "Render a page",
                body: "Use LyrixRenderer to render a page from JSON data in any Next.js route.",
                code: `// app/page.tsx
import { LyrixRenderer } from "@lyrix/renderer";
import { HeroBlock } from "@/blocks/hero";

const page = {
  blocks: [
    { type: "Hero", props: { title: "Hello, Lyrix!" } },
  ],
};

export default function Home() {
  return <LyrixRenderer page={page} blocks={[HeroBlock]} />;
}`,
                lang: "tsx",
            },
        ],
        prev: { label: "Installation", slug: "installation" },
        next: { label: "What are Blocks?", slug: "blocks" },
    },
    blocks: {
        title: "What are Blocks?",
        badge: "Core Concepts",
        description: "Blocks are the fundamental building unit of every Lyrix page.",
        sections: [
            {
                heading: "Blocks are just components",
                body: "A block is a typed, reusable React component with a declared schema. The schema defines what props the block accepts, which drives the visual editor's UI automatically.",
            },
            {
                heading: "Block anatomy",
                body: "Every block has three parts: a name, a schema, and a render function.",
                code: `export const CardBlock = defineBlock({
  name: "Card",
  schema: {
    title: { type: "string", required: true },
    body: { type: "string" },
    image: { type: "image" },
  },
  render: ({ title, body, image }) => (
    <div className="rounded-xl border p-6">
      {image && <img src={image.url} alt={title} />}
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  ),
});`,
                lang: "tsx",
            },
        ],
        prev: { label: "Quick Start", slug: "quick-start" },
        next: { label: "Pages & Composition", slug: "pages" },
    },
    pages: {
        title: "Pages & Composition",
        badge: "Core Concepts",
        description: "Pages in Lyrix are serializable JSON structures composed of blocks.",
        sections: [
            {
                heading: "A page is just data",
                body: "Lyrix pages are plain JSON arrays of block references. This makes them easy to store, version, and transfer between environments.",
                code: `{
  "slug": "home",
  "blocks": [
    { "type": "Hero", "props": { "title": "Welcome" } },
    { "type": "Features", "props": { "items": [...] } },
    { "type": "CTA", "props": { "label": "Get Started" } }
  ]
}`,
                lang: "json",
            },
        ],
        prev: { label: "What are Blocks?", slug: "blocks" },
        next: { label: "Rendering Pipeline", slug: "rendering" },
    },
    rendering: {
        title: "Rendering Pipeline",
        badge: "Core Concepts",
        description: "Lyrix renders pages natively inside Next.js — no iframes, no proxies.",
        sections: [
            {
                heading: "How rendering works",
                body: "LyrixRenderer takes your page JSON and your block registry, maps each block type to its React component, and renders the tree. It's fully compatible with React Server Components and App Router.",
            },
            {
                heading: "Server vs Client blocks",
                body: "By default, blocks are server components. If a block needs interactivity, add 'use client' at the top of the file just like any Next.js component.",
                code: `"use client";

import { defineBlock } from "@lyrix/core";
import { useState } from "react";

export const CounterBlock = defineBlock({
  name: "Counter",
  schema: {},
  render: () => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
  },
});`,
                lang: "tsx",
            },
        ],
        prev: { label: "Pages & Composition", slug: "pages" },
        next: { label: "create-lyrix-app", slug: "cli-create" },
    },
    "cli-create": {
        title: "create-lyrix-app",
        badge: "CLI Reference",
        description: "Scaffold a new Lyrix project from scratch.",
        sections: [
            {
                heading: "Usage",
                body: "Run the following command to bootstrap a new project. You will be prompted for a project name and optional configuration.",
                code: `npx create-lyrix-app [project-name]`,
                lang: "bash",
            },
            {
                heading: "Flags",
                body: "--typescript (default true), --tailwind (default true), --app-router (default true), --no-install (skip npm install).",
            },
        ],
        prev: { label: "Rendering Pipeline", slug: "rendering" },
        next: { label: "lyrix add", slug: "cli-add" },
    },
    "cli-add": {
        title: "lyrix add",
        badge: "CLI Reference",
        description: "Add a block or plugin to your project from the Lyrix registry.",
        sections: [
            {
                heading: "Usage",
                body: "The add command pulls a block or plugin from the official registry and drops it into your project.",
                code: `lyrix add block hero-section
lyrix add plugin @lyrix/auth-supabase`,
                lang: "bash",
            },
        ],
        prev: { label: "create-lyrix-app", slug: "cli-create" },
        next: { label: "lyrix build", slug: "cli-build" },
    },
    "cli-build": {
        title: "lyrix build",
        badge: "CLI Reference",
        description: "Validate and compile your block registry before production.",
        sections: [
            {
                heading: "Usage",
                body: "Run lyrix build before next build to typecheck all blocks and validate schemas.",
                code: `lyrix build`,
                lang: "bash",
            },
        ],
        prev: { label: "lyrix add", slug: "cli-add" },
        next: { label: "Plugin Overview", slug: "plugins-overview" },
    },
    "plugins-overview": {
        title: "Plugin System Overview",
        badge: "Plugin System",
        description: "Lyrix's plugin system lets you extend the editor and renderer with zero friction.",
        sections: [
            {
                heading: "How plugins work",
                body: "A plugin is a plain TypeScript module that exports hooks, custom field types, or block presets. No proprietary DSL — just functions.",
            },
            {
                heading: "Plugin types",
                body: "There are three kinds of plugins: Block plugins (add new blocks), Field plugins (add new schema field types), and Hook plugins (tap into lifecycle events like save and publish).",
            },
        ],
        prev: { label: "lyrix build", slug: "cli-build" },
        next: { label: "Creating a Plugin", slug: "plugins-create" },
    },
    "plugins-create": {
        title: "Creating a Plugin",
        badge: "Plugin System",
        description: "Build your own Lyrix plugin in minutes.",
        sections: [
            {
                heading: "Basic structure",
                body: "A plugin is just an object with a name and optional hooks.",
                code: `// my-plugin/index.ts
import { definePlugin } from "@lyrix/core";

export default definePlugin({
  name: "my-plugin",
  onBeforeSave: async (page) => {
    console.log("Saving page:", page.slug);
    return page;
  },
});`,
                lang: "ts",
            },
        ],
        prev: { label: "Plugin Overview", slug: "plugins-overview" },
        next: { label: "Publishing", slug: "plugins-publish" },
    },
    "plugins-publish": {
        title: "Publishing a Plugin",
        badge: "Plugin System",
        description: "Share your plugin with the Lyrix community via npm.",
        sections: [
            {
                heading: "Package naming",
                body: "Follow the convention @lyrix/your-plugin-name for official-style packages, or lyrix-plugin-your-name for community packages.",
            },
            {
                heading: "Publishing",
                body: "Lyrix plugins are just npm packages. Publish normally.",
                code: `npm publish --access public`,
                lang: "bash",
            },
        ],
        prev: { label: "Creating a Plugin", slug: "plugins-create" },
        next: { label: "defineBlock()", slug: "api-define-block" },
    },
    "api-define-block": {
        title: "defineBlock()",
        badge: "API Reference",
        description: "The core function for registering a Lyrix block.",
        sections: [
            {
                heading: "Signature",
                body: "defineBlock accepts a config object and returns a typed block definition.",
                code: `function defineBlock<T extends Schema>(config: {
  name: string;
  schema: T;
  render: (props: InferSchema<T>) => React.ReactNode;
}): BlockDefinition<T>`,
                lang: "ts",
            },
        ],
        prev: { label: "Publishing", slug: "plugins-publish" },
        next: { label: "useLyrix()", slug: "api-use-lyrix" },
    },
    "api-use-lyrix": {
        title: "useLyrix()",
        badge: "API Reference",
        description: "A React hook for accessing Lyrix context inside client blocks.",
        sections: [
            {
                heading: "Usage",
                body: "useLyrix() gives you access to the current page, editor state, and dispatch functions inside any client block.",
                code: `"use client";
import { useLyrix } from "@lyrix/core";

export function EditableBlock() {
  const { page, isEditing } = useLyrix();
  return <div>{isEditing ? "Editing..." : page.slug}</div>;
}`,
                lang: "tsx",
            },
        ],
        prev: { label: "defineBlock()", slug: "api-define-block" },
        next: { label: "LyrixRenderer", slug: "api-renderer" },
    },
    "api-renderer": {
        title: "LyrixRenderer",
        badge: "API Reference",
        description: "The top-level component that renders a Lyrix page from JSON.",
        sections: [
            {
                heading: "Props",
                body: "LyrixRenderer accepts a page object and a blocks array (your block registry).",
                code: `<LyrixRenderer
  page={pageJson}
  blocks={[HeroBlock, CardBlock, CtaBlock]}
/>`,
                lang: "tsx",
            },
        ],
        prev: { label: "useLyrix()", slug: "api-use-lyrix" },
    },
};