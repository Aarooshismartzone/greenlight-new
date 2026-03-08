import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GreenLight XR | Events | Music",
    description:
        "Explore immersive XR music experiences with GreenLight. Relive concerts, festivals, and performances in interactive 3D.",

    openGraph: {
        title: "GreenLight XR | Music Experiences",
        description:
            "Step inside concerts with GreenLight XR. Relive performances, festivals, and iconic music moments in immersive 3D.",
        url: "https://greenlightxr.com/events/music",
        siteName: "GreenLight XR",
        images: [
            {
                url: "/images/events/music/mf2.jpg",
                width: 1200,
                height: 630,
                alt: "GreenLight XR Music Experiences",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "GreenLight XR | Music Experiences",
        description:
            "Immersive XR concerts, festivals, and performances with GreenLight.",
        images: ["/images/events/music/mf2.jpg"],
    },
};

export default function MusicEventLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col">
            <div>{children}</div>
        </section>
    );
}
