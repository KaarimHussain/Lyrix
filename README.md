# Lyrix

**Lyrix** is an open-source, code-first visual block editor for Next.js.

Instead of configuring content through a traditional CMS, developers define blocks directly in JavaScript or TypeScript. Pages are then composed visually using those blocks, while remaining fully owned, versioned, and rendered inside your Next.js application.

Lyrix is inspired by the idea of Gutenberg, but designed specifically for modern Next.js workflows and developer-first teams.

---

## Why Lyrix?

Most page builders and headless CMS platforms introduce:
- Complex schemas
- Vendor lock-in
- Indirection between code and content
- Difficult local development

Lyrix takes a different approach.

- **Blocks are code**
- **Pages are data**
- **Rendering is native to Next.js**

No CMS UI abstractions. No proprietary pipelines.

---

## Core Concepts

### Code-First Blocks
Blocks are simple JavaScript or TypeScript definitions:

- Written and versioned in Git
- Typed and reusable
- Rendered using real React components

### Visual Composition
Pages are built visually by arranging blocks, without losing control over code or structure.

### Framework-Native Rendering
Lyrix renders directly inside Next.js:
- App Router–friendly
- No iframe previews
- No runtime hacks

---

## What Lyrix Is Not

- Not a traditional CMS
- Not a low-code website builder
- Not a hosted platform (by default)

Lyrix is a **developer tool**, first and foremost.

---

## Project Status

🚧 **Early development**

Lyrix is currently in active development. APIs and internal structures may change as the project evolves.

---

## Planned Features

- Block registry and runtime renderer
- Visual editor for composing pages
- JSON-based page serialization
- Next.js App Router support
- Optional plugin system
- Playground and examples

---

## Repository Structure (Planned)

```text
lyrix/
 ├─ packages/
 │   ├─ core        # block definitions, schemas, shared types
 │   ├─ renderer    # Next.js runtime renderer
 │   └─ editor      # visual editor (React)
 ├─ apps/
 │   └─ playground  # demo Next.js app
 ├─ docs/
 └─ examples/

```
## Philosophy

Lyrix is built around a simple idea:
> Developers should own their content structure as much as they own their code.
If you believe page building should feel like programming — not configuration — Lyrix is for you.

## License

MIT

## Contributing

Contributions, ideas, and discussions are welcome.
More details coming soon.