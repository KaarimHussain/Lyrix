import { Footer } from "@/components/blocks/Footer";
import { ClosingCta } from "@/components/blocks/ClosingCta";
import { Metadata } from "next";
import {
    Blocks,
    Braces,
    Cpu,
    FileJson,
    GitBranch,
    Globe,
    Layers,
    Paintbrush,
    Plug,
    Puzzle,
    Sparkles,
    Terminal,
    Users,
    Workflow,
    Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Roadmap",
    description: "What's been shipped, what's in progress, and what's coming next for Lyrix.",
};

type Status = "done" | "in-progress" | "planned";

type RoadmapItem = {
    title: string;
    description: string;
    icon: React.ElementType;
    status: Status;
};

const items: RoadmapItem[] = [
    // Done
    {
        title: "Project Scaffolding",
        description: "CLI-based project setup via create-lyrix-app. Bootstraps a full Next.js + Lyrix project in seconds.",
        icon: Terminal,
        status: "done",
    },
    {
        title: "SEO & Metadata System",
        description: "Full OpenGraph, Twitter card, JSON-LD structured data, and sitemap support baked into lyrix-web.",
        icon: Globe,
        status: "done",
    },
    {
        title: "Visual Feature Pages",
        description: "Dedicated pages for Lyrix AI, Visual Editor, Renderer, Plugin Engine, Team Sync, and AI Automation.",
        icon: Paintbrush,
        status: "done",
    },
    {
        title: "Plugin Marketplace UI",
        description: "Searchable, filterable plugin registry with copy-to-install commands and category filtering.",
        icon: Puzzle,
        status: "done",
    },
    {
        title: "Pricing Page",
        description: "Community, Pro, and Enterprise tiers with transparent feature breakdowns and FAQ section.",
        icon: Layers,
        status: "done",
    },
    {
        title: "Docs Site",
        description: "Full docs with sidebar navigation, dynamic slug pages, prev/next navigation, and code blocks.",
        icon: Braces,
        status: "done",
    },

    // In Progress
    {
        title: "Block Registry & Runtime Renderer",
        description: "Core block resolution engine that maps JSON page data to React components at runtime.",
        icon: Cpu,
        status: "in-progress",
    },
    {
        title: "App Router Support",
        description: "Full compatibility with Next.js App Router including React Server Components and streaming.",
        icon: Zap,
        status: "in-progress",
    },
    {
        title: "JSON-Based Page Serialization",
        description: "Stable schema for serializing and deserializing page compositions to and from JSON.",
        icon: FileJson,
        status: "in-progress",
    },

    // Planned
    {
        title: "Visual Page Editor",
        description: "Drag-and-drop block composer with live preview. Build pages visually without leaving your codebase.",
        icon: Blocks,
        status: "planned",
    },
    {
        title: "Plugin System",
        description: "Function-based hook system for extending Lyrix with custom fields, lifecycle hooks, and block presets.",
        icon: Plug,
        status: "planned",
    },
    {
        title: "Lyrix AI Integration",
        description: "AI-assisted block generation, content translation, and inline editing powered by LLMs.",
        icon: Sparkles,
        status: "planned",
    },
    {
        title: "Team Sync & Collaboration",
        description: "Multiplayer editing with presence indicators, granular version history, and role-based permissions.",
        icon: Users,
        status: "planned",
    },
    {
        title: "AI Automation Pipelines",
        description: "Trigger GitHub Actions, cross-post to socials, and auto-generate SEO tags on publish.",
        icon: Workflow,
        status: "planned",
    },
    {
        title: "Playground & Examples",
        description: "Interactive demo environment and a library of real-world block examples to get started fast.",
        icon: GitBranch,
        status: "planned",
    },
];

const columns: { status: Status; label: string; color: string; dot: string; border: string }[] = [
    {
        status: "done",
        label: "Shipped",
        color: "text-primary",
        dot: "bg-primary shadow-[0_0_8px_oklch(0.55_0.12_155_/_0.8)]",
        border: "border-primary/20 hover:border-primary/40",
    },
    {
        status: "in-progress",
        label: "In Progress",
        color: "text-amber-500",
        dot: "bg-amber-500 shadow-[0_0_8px_theme(colors.amber.500/0.8)] animate-pulse",
        border: "border-amber-500/20 hover:border-amber-500/40",
    },
    {
        status: "planned",
        label: "Planned",
        color: "text-muted-foreground",
        dot: "bg-muted-foreground/40",
        border: "border-border hover:border-border/80",
    },
];

export default function RoadmapPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Hero */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center bg-dot-grid overflow-hidden border-b border-border">
                <div className="container-layout relative z-10 flex flex-col items-start max-w-5xl mx-auto w-full">
                    <div className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground bg-muted/20 mb-6">
                        Public Roadmap
                    </div>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tight mb-6">
                        <span className="block font-medium text-foreground">What's coming</span>
                        <span className="block italic">
                            <span className="text-primary underline decoration-1 underline-offset-[10px] sm:underline-offset-[14px]">next.</span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-[40rem] font-sans leading-relaxed">
                        A transparent look at what's been shipped, what's actively being built, and what's on the horizon for Lyrix.
                    </p>
                </div>
            </section>

            {/* Kanban Board */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-layout">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
                        {columns.map((col) => {
                            const colItems = items.filter((i) => i.status === col.status);
                            return (
                                <div key={col.status} className="flex flex-col gap-4">
                                    {/* Column header */}
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className={cn("w-2 h-2 rounded-full flex-shrink-0", col.dot)} />
                                        <span className={cn("text-sm font-mono font-bold uppercase tracking-widest", col.color)}>
                                            {col.label}
                                        </span>
                                        <span className="ml-auto text-xs font-mono text-muted-foreground/60 bg-muted/40 px-2 py-0.5 rounded-full border border-border">
                                            {colItems.length}
                                        </span>
                                    </div>

                                    {/* Cards */}
                                    <div className="flex flex-col gap-3">
                                        {colItems.map((item) => (
                                            <div
                                                key={item.title}
                                                className={cn(
                                                    "group flex flex-col gap-3 p-5 rounded-2xl bg-card border transition-all duration-300",
                                                    col.border
                                                )}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className={cn(
                                                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                                                        col.status === "done" && "bg-primary/10 text-primary",
                                                        col.status === "in-progress" && "bg-amber-500/10 text-amber-500",
                                                        col.status === "planned" && "bg-muted text-muted-foreground",
                                                    )}>
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="font-semibold text-sm text-foreground leading-snug pt-1">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <ClosingCta />
            <Footer />
        </main>
    );
}