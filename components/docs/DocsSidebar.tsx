"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
    {
        section: "Getting Started",
        items: [
            { label: "Introduction", slug: "introduction" },
            { label: "Installation", slug: "installation" },
            { label: "Quick Start", slug: "quick-start" },
        ],
    },
    {
        section: "Core Concepts",
        items: [
            { label: "What are Blocks?", slug: "blocks" },
            { label: "Pages & Composition", slug: "pages" },
            { label: "Rendering Pipeline", slug: "rendering" },
        ],
    },
    {
        section: "CLI Reference",
        items: [
            { label: "create-lyrix-app", slug: "cli-create" },
            { label: "lyrix add", slug: "cli-add" },
            { label: "lyrix build", slug: "cli-build" },
        ],
    },
    {
        section: "Plugin System",
        items: [
            { label: "Overview", slug: "plugins-overview" },
            { label: "Creating a Plugin", slug: "plugins-create" },
            { label: "Publishing", slug: "plugins-publish" },
        ],
    },
    {
        section: "API Reference",
        items: [
            { label: "defineBlock()", slug: "api-define-block" },
            { label: "useLyrix()", slug: "api-use-lyrix" },
            { label: "LyrixRenderer", slug: "api-renderer" },
        ],
    },
];

export function DocsSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

    const toggle = (section: string) =>
        setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));

    return (
        <aside className="w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-border py-8 pr-4 hidden md:block">
            <nav className="flex flex-col gap-6">
                {nav.map(({ section, items }) => {
                    const isCollapsed = collapsed[section];
                    const hasActive = items.some(
                        (i) => pathname === `/docs/${i.slug}`
                    );

                    return (
                        <div key={section}>
                            <button
                                onClick={() => toggle(section)}
                                className="flex items-center justify-between w-full text-left mb-2 group"
                            >
                                <span
                                    className={cn(
                                        "text-[11px] font-bold uppercase tracking-widest transition-colors",
                                        hasActive
                                            ? "text-primary"
                                            : "text-muted-foreground group-hover:text-foreground"
                                    )}
                                >
                                    {section}
                                </span>
                                <ChevronRight
                                    className={cn(
                                        "w-3 h-3 text-muted-foreground transition-transform duration-200",
                                        !isCollapsed && "rotate-90"
                                    )}
                                />
                            </button>

                            {!isCollapsed && (
                                <div className="flex flex-col gap-0.5 border-l border-border pl-3">
                                    {items.map((item) => {
                                        const isActive =
                                            pathname === `/docs/${item.slug}`;
                                        return (
                                            <Link
                                                key={item.slug}
                                                href={`/docs/${item.slug}`}
                                                className={cn(
                                                    "text-sm py-1.5 px-2 rounded-md transition-colors",
                                                    isActive
                                                        ? "text-primary font-medium bg-primary/8"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}