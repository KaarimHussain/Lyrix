import { Footer } from "@/components/blocks/Footer";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitBranch, GitPullRequest, Bug, Lightbulb, MessageSquare, Heart } from "lucide-react";

export const metadata: Metadata = {
    title: "Contributing",
    description: "Help build the future of developer-first CMS tooling.",
};

const ways = [
    {
        icon: Bug,
        title: "Report a Bug",
        description: "Found something broken? Open an issue on GitHub with steps to reproduce and we'll get it fixed.",
        href: "https://github.com/KaarimHussain/Lyrix/issues/new",
        label: "Open Issue ↗",
    },
    {
        icon: Lightbulb,
        title: "Suggest a Feature",
        description: "Have an idea that would make Lyrix better? Start a discussion and let the community weigh in.",
        href: "https://github.com/KaarimHussain/Lyrix/discussions/new",
        label: "Start Discussion ↗",
    },
    {
        icon: GitPullRequest,
        title: "Submit a PR",
        description: "Fix a bug, add a feature, or improve docs. All pull requests are welcome — big or small.",
        href: "https://github.com/KaarimHussain/Lyrix/pulls",
        label: "View Open PRs ↗",
    },
    {
        icon: MessageSquare,
        title: "Improve the Docs",
        description: "Notice a gap in the documentation? Every improvement helps developers get up and running faster.",
        href: "https://github.com/KaarimHussain/Lyrix",
        label: "Edit on GitHub ↗",
    },
];

const steps = [
    { step: "01", text: "Fork the repository on GitHub" },
    { step: "02", text: "Clone your fork and create a new branch" },
    { step: "03", text: "Make your changes and commit with a clear message" },
    { step: "04", text: "Push your branch and open a pull request" },
];

export default function ContributingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Hero */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center bg-dot-grid overflow-hidden border-b border-border">
                <div className="container-layout relative z-10 flex flex-col items-start max-w-5xl mx-auto w-full">
                    <div className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground bg-muted/20 mb-6">
                        Open Source
                    </div>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tight mb-6">
                        <span className="block font-medium text-foreground">Built by the</span>
                        <span className="block italic">
                            <span className="text-primary underline decoration-1 underline-offset-[10px] sm:underline-offset-[14px]">community.</span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-[40rem] font-sans leading-relaxed mb-8">
                        Lyrix is MIT-licensed and open to contributions from everyone. Whether you write code, fix docs, or report bugs — every bit helps.
                    </p>
                    <Link href="https://github.com/KaarimHussain/Lyrix" target="_blank">
                        <Button size="lg" className="font-sans px-8 h-12 text-base">
                            <GitBranch className="w-4 h-4" />
                            View on GitHub ↗
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Ways to contribute */}
            <section className="py-16 md:py-24 bg-background border-b border-border">
                <div className="container-layout max-w-5xl mx-auto">
                    <div className="mb-12">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">01 / Ways to Help</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                            Every contribution counts.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {ways.map((way) => (
                            <Link
                                key={way.title}
                                href={way.href}
                                target="_blank"
                                className="group flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:glow-shadow transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <way.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1.5">{way.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{way.description}</p>
                                </div>
                                <span className="text-xs font-medium text-primary mt-auto">{way.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PR Flow */}
            <section className="py-16 md:py-24 bg-muted/30 border-b border-border">
                <div className="container-layout max-w-5xl mx-auto">
                    <div className="mb-12">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">02 / The Flow</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                            How to submit a PR.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-0">
                        {steps.map((s, i) => (
                            <div key={s.step} className="flex items-start gap-6 group">
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center font-mono text-sm font-bold text-primary group-hover:border-primary/40 transition-colors">
                                        {s.step}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-px h-10 bg-border mt-1" />
                                    )}
                                </div>
                                <p className="text-foreground/80 font-sans leading-relaxed pt-2.5">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thank you note */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-layout max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <Heart className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
                        Thank you for helping build Lyrix.
                    </h2>
                    <p className="text-muted-foreground max-w-md leading-relaxed">
                        Lyrix exists because developers believe content tooling should be open, code-first, and community-owned. You're part of that.
                    </p>
                    <Link href="https://github.com/KaarimHussain/Lyrix" target="_blank">
                        <Button variant="outline" size="lg" className="font-sans px-8 h-12 text-base">
                            Star the repo ↗
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}