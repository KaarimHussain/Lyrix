import { notFound } from "next/navigation";
import { docs } from "@/lib/docs";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
    return Object.keys(docs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const doc = docs[slug];
    if (!doc) return {};
    return { title: doc.title };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const doc = docs[slug];
    if (!doc) notFound();

    return (
        <article className="max-w-3xl">
            <div className="mb-10">
                {doc.badge && (
                    <span className="inline-flex items-center text-[11px] font-mono font-bold uppercase tracking-widest text-primary mb-3">
                        {doc.badge}
                    </span>
                )}
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    {doc.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {doc.description}
                </p>
            </div>

            <hr className="border-border mb-10" />

            <div className="flex flex-col gap-12">
                {doc.sections.map((section, i) => (
                    <div key={i}>
                        <h2 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                            {section.heading}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            {section.body}
                        </p>
                        {section.code && (
                            <div className="rounded-xl border border-border overflow-hidden">
                                <div
                                    className="flex items-center justify-between px-4 py-2 border-b border-border"
                                    style={{ backgroundColor: "oklch(0.15 0.01 85)" }}
                                >
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-white/10" />
                                        <div className="w-3 h-3 rounded-full bg-white/10" />
                                        <div className="w-3 h-3 rounded-full bg-white/10" />
                                    </div>
                                    <span className="text-[11px] font-mono text-white/40">
                                        {section.lang ?? "tsx"}
                                    </span>
                                    <div className="w-12" />
                                </div>
                                <pre
                                    className="p-5 overflow-x-auto text-sm font-mono text-white/80 leading-relaxed"
                                    style={{ backgroundColor: "oklch(0.13 0.01 85)" }}
                                >
                                    <code>{section.code}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {(doc.prev || doc.next) && (
                <div className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
                    {doc.prev ? (
                        <Link
                            href={`/docs/${doc.prev.slug}`}
                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">Previous</span>
                                <span className="font-medium">{doc.prev.label}</span>
                            </div>
                        </Link>
                    ) : <div />}

                    {doc.next && (
                        <Link
                            href={`/docs/${doc.next.slug}`}
                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
                        >
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">Next</span>
                                <span className="font-medium">{doc.next.label}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    )}
                </div>
            )}
        </article>
    );
}