import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GreenLight Experience",
};

export default function GELayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col">
            <div>
                {children}
            </div>
        </section>
    );
}
