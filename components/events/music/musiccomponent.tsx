"use client"

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMusic } from "react-icons/fa";

import "./musicstyle.css";
import MusicSection from "./sections/MusicSection";
import Conclusion from "./sections/Conclusion";

export default function MusicEventComponent() {

    const { theme } = useTheme();
    const [isNightmode, setIsNightmode] = useState(false);

    useEffect(() => {
        setIsNightmode(theme === "dark");
    }, [theme]);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">

            {/* ================= Banner ================= */}

            <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px] overflow-hidden">

                <Image
                    src="/images/events/music/musicbanner.jpg"
                    alt="Music Events"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 musicBannerOverlay flex items-center justify-center text-center">

                    <div className="max-w-3xl px-6">

                        <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3 fadeLeft">
                            Music Reimagined in XR
                        </h1>

                        <p className="text-lg md:text-xl opacity-90 fadeRight">
                            GreenLight transforms concerts into immersive 3D experiences —
                            letting fans step inside performances, revisit moments, and connect with music like never before.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= Intro ================= */}

            <section className="py-20 px-6 max-w-6xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Where Music Meets Immersive Technology
                </h2>

                <p className="text-lg opacity-80 leading-relaxed max-w-4xl mx-auto">
                    Music is emotional, visual, and deeply shared. Yet most digital formats reduce
                    concerts to flat video. GreenLight captures performances in immersive 3D,
                    allowing fans to explore shows from new perspectives, revisit defining
                    moments, and stay connected to music long after the final note.
                </p>

            </section>


            {/* ================= Sections ================= */}

            <MusicSection
                title="Music Festivals"
                images={[
                    "/images/events/music/mf1.jpg",
                    "/images/events/music/mf2.jpg"
                ]}
                reverse={false}
                points={[
                    "Festival fans often miss overlapping sets and defining moments.",
                    "GreenLight lets fans revisit performances in immersive 3D from stage or crowd.",
                    "View shows with friends in real time and relive entire festival experiences.",
                    "Creates premium replay assets extending value beyond the weekend.",
                    "Expands access to global audiences without impacting ticket sales.",
                    "Enables deeper sponsorship engagement tied to fan interaction."
                ]}
            />

            <MusicSection
                title="Orchestra"
                images={[
                    "/images/events/music/orc1.jpg",
                    "/images/events/music/orc2.jpg"
                ]}
                reverse={true}
                points={[
                    "83% of orchestra audiences show interest in immersive concert pilots.",
                    "Fans want to observe technique, ensemble dynamics, and conductor cues.",
                    "Traditional video hides musical interaction and artistic detail.",
                    "GreenLight reveals the depth of orchestral performance.",
                    "Concerts become long-term cultural archives for education and outreach.",
                    "Premium digital access supports institutional missions and sustainable revenue."
                ]}
            />

            <MusicSection
                title="Pop Music"
                images={[
                    "/images/events/music/pm1.jpg",
                    "/images/events/music/pm2.jpg"
                ]}
                reverse={false}
                points={[
                    "86% of pop fans show interest in immersive concert pilots.",
                    "Fans focus on iconic moments: dance breaks, lighting drops, and entrances.",
                    "GreenLight allows fans to replay moments from their own perspective.",
                    "XR access expands global reach without affecting ticket sales.",
                    "Iconic segments become premium digital replay assets.",
                    "Sponsors integrate into moments fans repeatedly watch and share."
                ]}
            />

            <MusicSection
                title="Rock Music"
                images={[
                    "/images/events/music/rm1.jpg",
                    "/images/events/music/rm2.jpg"
                ]}
                reverse={true}
                points={[
                    "90% of rock fans show interest in immersive concert pilots.",
                    "Fans want the raw energy of guitar solos, drum fills, and crowd interaction.",
                    "Livestreams miss the intensity and atmosphere of live rock shows.",
                    "GreenLight captures performances with presence and authenticity.",
                    "Concerts become replayable fan assets between tours.",
                    "Shared immersive experiences strengthen long-term fan loyalty."
                ]}
            />

            <Conclusion />

        </div>
    )
}