import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GreenLight XR | Events | Sports",
    description:
        "GreenLight XR transforms sports viewing with immersive replay and spatial experiences. Explore tennis, combat sports, Formula 1, Supercross, volleyball, and coaching insights through interactive XR environments.",

    openGraph: {
        title: "GreenLight XR | Sports Experiences",
        description:
            "Experience sports beyond the broadcast. GreenLight XR reveals the strategy, positioning, and defining moments behind every rally, race, and match through immersive XR viewing.",
        url: "https://greenlightxr.com/events/sports",
        siteName: "GreenLight XR",
        images: [
            {
                url: "/images/events/sports/sportsbanner.jpg",
                width: 1200,
                height: 630,
                alt: "GreenLight XR Sports Experiences",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "GreenLight XR | Sports Experiences",
        description:
            "Explore sports through immersive XR. Analyze rallies, races, and decisive moments across multiple sports with GreenLight XR.",
        images: ["/images/events/sports/sportsbanner.jpg"],
    },
};

export default function SportsEventLayout({
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