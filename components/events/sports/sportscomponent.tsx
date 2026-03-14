"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTableTennis } from "react-icons/fa";

import TennisSection from "./sections/tennis";
import CombatSportsSection from "./sections/combatsports";
import SportsCoachingSection from "./sections/sportscoaching";

import "./sportsstyle.css";
import FormulaOneComponent from "./sections/formulaonecomponent";
import SupercrossSection from "./sections/supercross";
import VolleyballSection from "./sections/volleyball";

export default function SportsComponent() {
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
                    src="/images/events/sports/sportsbanner.jpg"
                    alt="Sports Events"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 sportsBannerOverlay flex items-center justify-center text-center">

                    <div className="max-w-3xl px-6">

                        <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3 fadeLeft">
                            Sports Reimagined in XR
                        </h1>

                        <p className="text-lg md:text-xl opacity-90 fadeRight">
                            GreenLight brings fans closer to the action with immersive XR experiences -
                            turning games, matches, and iconic plays into interactive moments that can
                            be explored, replayed, and shared.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= Intro ================= */}

            <section className="py-24 px-6 max-w-6xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Experience Sports Beyond the Broadcast
                </h2>

                <p className="text-lg opacity-80 leading-relaxed max-w-4xl mx-auto">
                    Sports are about precision, strategy, and moments of brilliance.
                    Traditional broadcasts show the result — but rarely the full story.
                    GreenLight captures sports in immersive XR, allowing fans to analyze
                    plays, relive decisive moments, and experience matches from perspectives
                    never possible before.
                </p>

            </section>

            <section className="relative">

                <div className="max-w-6xl mx-auto py-6 px-6 text-center">

                    <h3 className="text-2xl md:text-3xl font-bold">
                        Explore XR Across Sports
                    </h3>

                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-800">

                    <div className="bg-gray-50 dark:bg-gray-950">
                        <TennisSection />
                    </div>
                    <div className="bg-white dark:bg-gray-900">
                        <CombatSportsSection reverse />
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-950">
                        <SportsCoachingSection />
                    </div>
                    <div className="bg-white dark:bg-gray-900">
                        <FormulaOneComponent reverse />
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-950">
                        <SupercrossSection />
                    </div>
                    <div className="bg-white dark:bg-gray-900">
                        <VolleyballSection reverse />
                    </div>

                </div>

            </section>
            {/* ================= Conclusion ================= */}

            <section className="py-28 px-6 text-center bg-gray-50 dark:bg-gray-950">

                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        A New Perspective on Every Game
                    </h2>

                    <p className="text-lg opacity-80 leading-relaxed">
                        Across every sport, fans seek deeper understanding of the moments that shape the
                        outcome — the positioning, timing, and decisions that define performance.
                        GreenLight transforms those moments into immersive XR experiences, revealing the
                        strategy behind the spectacle. By turning plays, rallies, races, and exchanges
                        into interactive environments, GreenLight allows fans, athletes, and communities
                        to explore sports in ways traditional broadcasts never could.
                    </p>

                </div>

            </section>

        </div>
    );
}