import { Footer } from "@/components/blocks/Footer";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import {
    Blocks, Braces, Cpu, FileJson, Globe, Layers, Paintbrush, Puzzle, Terminal, Zap,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Changelog",
    description: "Every update, improvement, and fix shipped to Lyrix.",
};

type ChangeType = "new" | "improved" | "fixed" | "infra";

type Change = {
    type: ChangeType;
    text: string;
};

type Release = {
    version: string;
    date: string;
    tag?: string;
    icon: React.ElementType;
    summary: string;
    changes: Change[];
};

const releases: Release[] = [
    {
        version: "v0.1.0",
        date: "March 2025",
        tag: "Latest",
        icon: Zap,
        summary: "Initial public release of lyrix-web. Full marketing site, docs, and plugin marketplace shipped.",
        changes: [
            { type: "new", text: "Landing page with Hero, Problem, Solution, Code Showcase, Philosophy, Roadmap Teaser, and CTA sections" },
            { type: "new", text: "Full docs site with sidebar navigation, dynamic slug pages, and prev/next navigation" },
            { type: "new", text: "Plugin marketplace with search, category filtering, and copy-to-install commands" },
            { type: "new", text: "Pricing page with Community, Pro, and Enterprise tiers plus FAQ" },
            { type: "new", text: "Login and Register pages with GitHub OAuth UI, password strength indicator" },
            { type: "new", text: "404 page with terminal-style error display" },
            { type: "new", text: "Roadmap page with Kanban-style Shipped / In Progress / Planned columns" },
            { type: "new", text: "Sticky navbar with Features megamenu, Plugins, Docs, and Pricing links" },
            { type: "new", text: "Full SEO metadata, OpenGraph, Twitter card, and JSON-LD structured data" },
            { type: "new", text: "site.webmanifest for PWA support" },
            { type: "infra", text: "Route group (main) layout refactor to isolate Docs navbar from main navbar" },
            { type: "infra", text: "LyrixInput custom component with default, password, and search variants" },
        ],
    },
    {
        version: "v0.0.4",
        date: "February 2025",
        icon: Paintbrush,
        summary: "Feature detail pages and footer ecosystem grid shipped.",
        changes: [
            { type: "new", text: "Lyrix AI feature page with purple accent theme" },
            { type: "new", text: "Visual Editor feature page with blue accent theme" },
            { type: "new", text: "Native Renderer feature page with green accent theme" },
            { type: "new", text: "Plugin Engine feature page with amber accent theme" },
            { type: "new", text: "Team Sync feature page with slate accent theme" },
            { type: "new", text: "AI Automation feature page with orange accent theme" },
            { type: "new", text: "Footer with product ecosystem grid, animated LYRIX watermark wordmark" },
        ],
    },
    {
        version: "v0.0.3",
        date: "February 2025",
        icon: Braces,
        summary: "Design system, fonts, and global layout established.",
        changes: [
            { type: "new", text: "Inter Tight + Geist Mono font setup via next/font" },
            { type: "new", text: "Full Tailwind CSS v4 + shadcn/ui integration with oklch color tokens" },
            { type: "new", text: "Custom globals.css with bg-dot-grid, bg-noise, radial-glow, and glow-shadow utilities" },
            { type: "new", text: "Dark mode CSS variable system via .dark class" },
            { type: "new", text: "container-layout utility class for consistent page padding" },
            { type: "improved", text: "Button component customized with 3D press shadow effect and bounce animation" },
        ],
    },
    {
        version: "v0.0.2",
        date: "January 2025",
        icon: Globe,
        summary: "SEO infrastructure and metadata system set up.",
        changes: [
            { type: "new", text: "metadataBase, title template, OpenGraph, and Twitter card configured in root layout" },
            { type: "new", text: "JSON-LD WebSite and SoftwareApplication schema added" },
            { type: "new", text: "Robots config with googleBot directives" },
            { type: "new", text: "Favicon and icon config for App Router (/app directory)" },
        ],
    },
    {
        version: "v0.0.1",
        date: "January 2025",
        icon: Terminal,
        summary: "Repo initialized. lyrix-web project scaffolded.",
        changes: [
            { type: "new", text: "Next.js 16 App Router project bootstrapped" },
            { type: "new", text: "Separate repo structure decided: lyrix-cli and lyrix-web as independent repos" },
            { type: "infra", text: "ESLint, TypeScript, Tailwind CSS, and PostCSS configured" },
        ],
    },
];

const typeConfig: Record<ChangeType, { label: string; className: string }> = {
    new: { label: "New", className: "bg-primary/10 text-primary border-primary/20" },
    improved: { label: "Improved", className: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    fixed: { label: "Fixed", className: "bg-destructive/10 text-destructive border-destructive/20" },
    infra: { label: "Infra", className: "bg-muted text-muted-foreground border-border" },
};

export default function ChangelogPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Hero */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center bg-dot-grid overflow-hidden border-b border-border">
                <div className="container-layout relative z-10 flex flex-col items-start max-w-5xl mx-auto w-full">
                    <div className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground bg-muted/20 mb-6">
                        Changelog
                    </div>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tight mb-6">
                        <span className="block font-medium text-foreground">Every update,</span>
                        <span className="block italic">
                            <span className="text-primary underline decoration-1 underline-offset-[10px] sm:underline-offset-[14px]">documented.</span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-[40rem] font-sans leading-relaxed">
                        A full history of everything shipped to Lyrix — newest first.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-layout max-w-4xl mx-auto">
                    <div className="relative flex flex-col gap-0">
                        {/* Vertical line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

                        {releases.map((release, i) => (
                            <div key={release.version} className="relative flex flex-col md:flex-row gap-6 md:gap-10 pb-16 last:pb-0">
                                {/* Dot */}
                                <div className="hidden md:flex flex-col items-center pt-1 shrink-0">
                                    <div className={cn(
                                        "w-4 h-4 rounded-full border-2 z-10",
                                        i === 0
                                            ? "bg-primary border-primary shadow-[0_0_10px_oklch(0.55_0.12_155_/_0.6)]"
                                            : "bg-background border-border"
                                    )} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Release header */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <release.icon className="w-4 h-4" />
                                            </div>
                                            <span className="font-mono font-bold text-lg text-foreground tracking-tight">
                                                {release.version}
                                            </span>
                                        </div>
                                        {release.tag && (
                                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {release.tag}
                                            </span>
                                        )}
                                        <span className="text-xs font-mono text-muted-foreground ml-auto">
                                            {release.date}
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                                        {release.summary}
                                    </p>

                                    {/* Changes */}
                                    <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-card border border-border">
                                        {release.changes.map((change, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <span className={cn(
                                                    "text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border shrink-0 mt-0.5",
                                                    typeConfig[change.type].className
                                                )}>
                                                    {typeConfig[change.type].label}
                                                </span>
                                                <span className="text-sm text-foreground/80 leading-relaxed">
                                                    {change.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}