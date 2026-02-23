"use client"

import Logo from "./logo";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, Box, Code2, FileText, Github, Layout, Map, Megaphone, Menu, Server, Terminal, Users, X } from "lucide-react";

const NAV_MENU = [
    {
        label: "Features",
        items: [
            { href: "/products/core", title: "Lyrix Core", icon: <Box className="h-5 w-5" />, description: "The foundational engine for your content architecture." },
            { href: "/products/visual-editor", title: "Visual Editor", icon: <Layout className="h-5 w-5" />, description: "Drag, drop, and design with real-time previews." },
            { href: "/products/renderer", title: "Renderer", icon: <Server className="h-5 w-5" />, description: "High-performance global edge delivery network." },
            { href: "/products/core", title: "Lyrix Core", icon: <Box className="h-5 w-5" />, description: "The foundational engine for your content architecture." },
            { href: "/products/visual-editor", title: "Visual Editor", icon: <Layout className="h-5 w-5" />, description: "Drag, drop, and design with real-time previews." },
            { href: "/products/renderer", title: "Renderer", icon: <Server className="h-5 w-5" />, description: "High-performance global edge delivery network." }
        ],
        gridClass: "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]",
    },
    {
        label: "Use Cases",
        items: [
            { href: "/use-cases/marketing", title: "Marketing Pages", icon: <Megaphone className="h-5 w-5" />, description: "Launch campaigns faster with pre-built blocks." },
            { href: "/use-cases/docs", title: "Docs Sites", icon: <FileText className="h-5 w-5" />, description: "Beautiful, versioned documentation out of the box." },
            { href: "/use-cases/internal-tools", title: "Internal Tools", icon: <Server className="h-5 w-5" />, description: "Secure portals and dashboards for your team." },
        ],
        gridClass: "w-[400px]",
    },
    {
        label: "Developers",
        items: [
            { href: "/docs", title: "Documentation", icon: <BookOpen className="h-5 w-5" />, description: "Guides, tutorials, and integration steps." },
            { href: "/docs/api", title: "API Reference", icon: <Terminal className="h-5 w-5" />, description: "Detailed endpoint specifications and SDKs." },
            { href: "/examples", title: "Examples", icon: <Code2 className="h-5 w-5" />, description: "Cloneable starter kits for Next.js, Remix, and Nuxt.", className: "md:col-span-2" },
        ],
        gridClass: "w-[400px] md:grid-cols-2",
    },
    {
        label: "Open Source",
        items: [
            { href: "/github", title: "GitHub", icon: <Github className="h-5 w-5" />, description: "View our source code and star the repo." },
            { href: "/roadmap", title: "Roadmap", icon: <Map className="h-5 w-5" />, description: "See what we are building next." },
            { href: "/contributing", title: "Contributing", icon: <Users className="h-5 w-5" />, description: "Guidelines for submitting PRs and issues." },
        ],
        gridClass: "w-[300px]",
    },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    const DesktopNav = useMemo(() => (
        <NavigationMenu>
            <NavigationMenuList className="gap-2">
                {NAV_MENU.map((section) => (
                    <NavigationMenuItem key={section.label}>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-stone-100 data-[state=open]:bg-stone-100">
                            {section.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={cn("grid gap-3 bg-[#FCFCFA]", section.gridClass)}>
                                {section.items.map((item, index) => (
                                    <ListItem key={index} href={item.href} title={item.title} icon={item.icon} className={item.className}>
                                        {item.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    ), []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-transparent backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center">
                    <Logo height={70} width={70} text="Lyrix" textClassName="text-3xl font-bold" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    {DesktopNav}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button variant="outline">Login</Button>
                    <Button>Register</Button>
                    <button
                        className="md:hidden p-2 text-stone-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 top-16 z-40 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-8 md:hidden bg-[#FCFCFA]",
                    isMobileMenuOpen ? "block" : "hidden"
                )}
            >
                <div className="relative z-20 grid gap-6 rounded-md p-4 text-popover-foreground">
                    {NAV_MENU.map((section) => (
                        <div key={section.label} className="grid gap-4">
                            <h4 className="font-medium leading-none text-stone-900">{section.label}</h4>
                            <div className="grid gap-2 pl-4 border-l border-stone-200">
                                {section.items.map((item, index) => (
                                    <MobileLink key={index} href={item.href}>{item.title}</MobileLink>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="mt-4 flex flex-col gap-3 border-t border-stone-200 pt-6">
                        <Link href="/pricing" className="text-sm font-medium text-stone-600">Pricing</Link>
                        <Link href="/signup" className="inline-flex w-full h-10 items-center justify-center rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-[#FCFCFA]">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: React.ReactNode; className?: string; children?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 hover:text-stone-900 focus:bg-stone-100 focus:text-stone-900",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-3">
                        {icon && <div className="text-stone-500">{icon}</div>}
                        <div className="text-sm font-medium leading-none text-stone-900">{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-stone-500 mt-1 pl-8">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

// Helper for mobile menu links
const MobileLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-sm text-stone-600 hover:text-stone-900 py-1">
        {children}
    </Link>
)