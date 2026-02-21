"use client"

import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import {
    FaCube,
    FaBroadcastTower,
    FaVrCardboard,
    FaVolumeUp,
    FaUsers
} from "react-icons/fa";

import "./gtstyle.css";

export default function GreenLightTechnologyComponent() {

    const { theme } = useTheme();
    const [isNightmode, setIsNightmode] = useState(false);

    useEffect(() => {
        setIsNightmode(theme === "dark");
    }, [theme]);

    /* =========================
       VIDEOS + TEXT
    ========================== */

    const videos = [
        {
            src: "/videos/greenlight_technology/augmented_reality.mp4",
            text: "Immersive augmented experiences in real time."
        },
        {
            src: "/videos/greenlight_technology/holographic_displays.mp4",
            text: "Next-generation holographic visualization."
        },
        {
            src: "/videos/greenlight_technology/machine_learning.mp4",
            text: "AI-driven reconstruction and intelligent capture."
        },
        {
            src: "/videos/greenlight_technology/spatial_audio.mp4",
            text: "Sound positioned naturally in 3D space."
        },
        {
            src: "/videos/greenlight_technology/volumetric_reconstruction.mp4",
            text: "Free-viewpoint volumetric video streaming."
        }
    ];

    const [index, setIndex] = useState(0);

    /* =========================
       GPU OPTIMIZED SWITCHING
    ========================== */

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        videoRefs.current.forEach((video) => {
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => { });
            }
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % videos.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    /* ========================= */

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">

            {/* ================= HERO SECTION ================= */}

            <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px] overflow-hidden">

                {/* GPU Video Stack */}
                <div className="absolute inset-0">

                    {videos.map((video, i) => (
                        <video
                            key={i}
                            ref={(el) => {
                                videoRefs.current[i] = el;
                            }}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className={`absolute inset-0 w-full h-full object-cover kenburns gpu-video transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <source src={video.src} type="video/mp4" />
                        </video>
                    ))}

                </div>

                {/* Overlay */}
                <div
                    className="
      absolute inset-0
      bg-white/60 dark:bg-black/85
      transition-colors duration-500
      flex flex-col justify-center items-center text-center px-6
    "
                ></div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

                    <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${isNightmode
                        ? "from-green-400 to-emerald-500"
                        : "from-green-700 to-emerald-800"
                        }`}>
                        The GreenLight Technology
                    </h1>

                    <p className="text-lg md:text-xl text-gray-900 dark:text-gray-200 transition-opacity duration-700">
                        {videos[index].text}
                    </p>

                </div>
            </section>

            {/* ================= INTRO ================= */}

            <section className="max-w-6xl mx-auto px-6 py-16 text-center">

                <h2 className="text-3xl font-bold mb-6">
                    Next-Level Tech for Real-Time Capture
                </h2>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    GreenLight XR Media™ transforms live events into immersive,
                    interactive 3D experiences—realtime, device-ready, and socially connected.
                </p>

            </section>

            {/* ================= TECHNOLOGY CARDS ================= */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        {
                            icon: <FaCube />,
                            title: "3D Video From Any Device",
                            text: "AI reconstruction converts smartphones, rigs, and 360° cameras into free-viewpoint 3D capture systems."
                        },
                        {
                            icon: <FaBroadcastTower />,
                            title: "Edge-Optimized Streaming",
                            text: "GPU-accelerated pipelines minimize latency for real-time immersive broadcasting."
                        },
                        {
                            icon: <FaVrCardboard />,
                            title: "Display-Agnostic Output",
                            text: "Works across VR, AR, holographic displays, 3D TVs, and standard screens."
                        },
                        {
                            icon: <FaVolumeUp />,
                            title: "Spatial Audio",
                            text: "Ambisonic audio positioning recreates real-world presence and directionality."
                        },
                        {
                            icon: <FaUsers />,
                            title: "Social Engagement",
                            text: "Avatars, co-watching, chat, gestures, and synchronized interaction layers."
                        }
                    ].map((item, i) => (

                        <div key={i}
                            className="gt-card p-8 rounded-2xl shadow-lg
                            bg-white dark:bg-zinc-900
                            hover:shadow-2xl transition duration-300">

                            <div className="text-3xl mb-4 text-green-500">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300">
                                {item.text}
                            </p>

                        </div>
                    ))}

                    {/* ===== IMAGE TILE (fills empty desktop space) ===== */}

                    <div className="relative overflow-hidden rounded-2xl shadow-xl group min-h-[280px]">

                        <img
                            src="/images/greenlight_technology/vse.jpg"
                            alt="Volumetric Streaming Engine"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-0 p-6 text-white">
                            <h3 className="text-xl font-semibold mb-2">
                                Volumetric Streaming Engine
                            </h3>
                            <p className="text-sm text-gray-200">
                                Real-time capture, reconstruction, and immersive delivery pipeline.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* ================= TECH DETAILS : SECTION 1 ================= */}

            <section className="bg-gray-100 dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

                    {/* Image */}
                    <img
                        src="/images/greenlight_technology/vr.jpg"
                        className="rounded-2xl shadow-2xl hover:scale-[1.02] transition duration-500"
                        alt="GreenLight XR Platform"
                    />

                    {/* Content */}
                    <div className="space-y-10">

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                AI-Driven Volumetric Platform
                            </h3>

                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>• Real-time, device-agnostic volumetric 3D video streaming</li>
                                <li>• Integrated social interaction and immersive layers</li>
                                <li>• Powered by computer vision and machine learning systems</li>
                                <li>• Supports both professional and user-generated content</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                                Edge-Optimized Real-Time Reconstruction
                            </h3>

                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>• Proprietary AI volumetric scene estimation</li>
                                <li>• Low-latency processing directly on edge devices</li>
                                <li>• Removes dependency on heavy compute clusters</li>
                                <li>• Enables scalable live-event streaming worldwide</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>



            {/* ================= TECH DETAILS : SECTION 2 ================= */}

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

                    {/* Content FIRST (alternating layout) */}
                    <div className="space-y-10 order-2 lg:order-1">

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                Universal Rendering Engine
                            </h3>

                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>• AR/VR headsets and immersive XR displays</li>
                                <li>• 3D TVs and holographic visualization systems</li>
                                <li>• Spatial light modulator-based displays</li>
                                <li>• Flat screens and glassless 3D projectors</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                                Inclusive by Design
                            </h3>

                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>• Hardware-independent viewing experience</li>
                                <li>• Accessible across consumer and enterprise devices</li>
                                <li>• Expands global reach and audience participation</li>
                                <li>• Improves scalability and commercial viability</li>
                            </ul>
                        </div>

                    </div>

                    {/* Second Image */}
                    <img
                        src="/images/greenlight_technology/eye.jpg"
                        className="rounded-2xl shadow-2xl hover:scale-[1.02] transition duration-500 order-1 lg:order-2"
                        alt="GreenLight XR Vision Technology"
                    />

                </div>
            </section>

        </div>
    );
}