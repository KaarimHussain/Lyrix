import { Footer } from "@/components/blocks/Footer";
import { DocsNavbar } from "@/components/docs/DocsNavbar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <DocsNavbar />
            <div className="flex flex-1 container mx-auto px-4 md:px-6 gap-8">
                <DocsSidebar />
                <main className="flex-1 min-w-0 py-10">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}