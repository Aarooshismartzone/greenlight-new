"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { FaPlayCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./homestyle.css";

const videos = [
    "birthday_family",
    "concert_light",
    "creator_studio",
    "guitar_closeup",
    "motocross",
    "supercross_jump",
    "tennis",
];

/* ================= BANNER ================= */

const bannerSlides = [
    {
        image: "/images/motocross.jpg",
        title: "Redefining Shared Presence",
        text: "Human connection takes center stage.",
    },
    {
        image: "/images/birthday.jpg",
        title: "Celebrate Without Distance",
        text: "Share birthdays, family moments, and milestones in immersive 3D environments.",
    },
    {
        image: "/images/fashion.jpg",
        title: "Immersion Meets Interaction",
        text: "Experience spatial video, avatars, and private rooms in shared virtual spaces.",
    },
    {
        image: "/images/concert.jpg",
        title: "From Viewing to Belonging",
        text: "Transform concerts and events into active, social experiences anywhere.",
    },
];

export default function HomeComponent() {
    const { theme } = useTheme();

    const [isNightmode, setIsNightmode] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [currentBanner, setCurrentBanner] = useState(0);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    /* Detect theme */
    useEffect(() => {
        setIsNightmode(theme === "dark");
    }, [theme]);

    /* Rotate background video */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    /* Reload video */
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => { });
        }
    }, [currentVideo]);

    /* Rotate banner slides */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % bannerSlides.length);
        }, 8000); // 8 seconds per slide

        return () => clearInterval(interval);
    }, []);


    return (
        <main className="w-full overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors">

            {/* ================= HERO ================= */}
            <section className="relative h-[calc(100vh-64.8px)] flex items-center justify-center">

                {/* Video */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover hero-video"
                    poster="/images/background.jpg"
                >
                    <source
                        src={`/videos/${videos[currentVideo]}.webm`}
                        type="video/webm"
                    />
                    <source
                        src={`/videos/${videos[currentVideo]}.mp4`}
                        type="video/mp4"
                    />
                </video>

                {/* Overlay */}
                <div
                    className={`absolute inset-0 ${isNightmode ? "bg-black/60" : "bg-white/60"
                        }`}
                />

                {/* Content */}
                <div className="relative z-10 max-w-4xl text-center px-8 py-12">

                    <h1
                        className={`text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${isNightmode
                            ? "from-green-400 to-emerald-500"
                            : "from-green-700 to-emerald-800"
                            }`}
                    >
                        GreenLight XR Media™
                    </h1>

                    <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-800 dark:text-gray-200">
                        Immersive, social-first 3D streaming that brings people together —
                        wherever they are.
                    </p>

                    {/* <div className="flex flex-wrap justify-center gap-5">

                        <button className="btn-primary">
                            <FaPlayCircle /> Request Demo
                        </button>

                        <button className="btn-outline">
                            Book a Call
                        </button>

                    </div> */}
                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="section-wrapper">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>

                        <h2 className="section-title">
                            Experience Events — Together
                        </h2>

                        <p className="section-text">
                            GreenLight XR Media creates shared digital spaces where concerts,
                            sports, recitals, and celebrations are experienced socially.
                        </p>

                        <p className="section-text">
                            Our platform blends volumetric video, AI processing, and spatial
                            interaction.
                        </p>

                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-2xl">

                        <img
                            src="/images/football.jpg"
                            alt="Live Sports"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </div>

            </section>


            {/* ================= VISION ================= */}
            <section className="bg-emerald-400 dark:bg-emerald-900 transition-colors">

                <div className="section-wrapper">

                    <h2 className="section-title text-center mb-12">
                        Vision & Mission
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="info-card">

                            <h3 className="text-xl font-semibold mb-3">
                                Our Vision
                            </h3>

                            <p className="section-text">
                                To pioneer spatially shared media where presence flows naturally.
                            </p>

                        </div>

                        <div className="info-card">

                            <h3 className="text-xl font-semibold mb-3">
                                Our Mission
                            </h3>

                            <p className="section-text">
                                To make immersive experiences accessible everywhere.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= BANNER ================= */}
            <section className="kenburns-banner">

                {bannerSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`kenburns-slide ${index === currentBanner ? "active" : ""
                            }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    />
                ))}

                {/* Overlay */}
                <div className="overlay bg-white/60 dark:bg-black/60"></div>

                {/* Content */}
                {/* Content */}
                <div
                    key={currentBanner} // Forces re-animation
                    className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 banner-content"
                >

                    <h2 className="banner-title text-3xl md:text-5xl font-bold mb-6">
                        {bannerSlides[currentBanner].title}
                    </h2>

                    <p className="banner-text max-w-3xl text-lg text-gray-800 dark:text-gray-200">
                        {bannerSlides[currentBanner].text}
                    </p>

                </div>

            </section>

            {/* ================= FEATURES ================= */}
            <section className="section-wrapper">

                <h2 className="section-title text-center mb-14">
                    What Sets Us Apart
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    <div className="feature-box">

                        <h3 className="text-lg font-semibold mb-3">
                            Real-Time 3D Streaming
                        </h3>

                        <p className="feature-text">
                            Professional volumetric capture.
                        </p>

                    </div>

                    <div className="feature-box">
                        <h3 className="text-lg font-semibold mb-3">
                            Multi-Format Access
                        </h3>

                        <p className="feature-text">
                            Works on all devices.
                        </p>
                    </div>

                    <div className="feature-box">

                        <h3 className="text-lg font-semibold mb-3">
                            Social Co-Viewing
                        </h3>

                        <p className="feature-text">
                            Shared environments.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-gradient-to-br from-green-600 to-emerald-700">

                <div className="section-wrapper text-center text-white">

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to Experience the Future?
                    </h2>

                    <p className="text-lg mb-12 text-gray-100 max-w-2xl mx-auto">
                        Discover how GreenLight XR can elevate your events.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">

                        <button className="btn-light flex items-center gap-2">
                            <FaPlayCircle /> Request Demo
                        </button>

                        <button className="btn-light-outline flex items-center gap-2">
                            <FaPhoneAlt /> Book a Call
                        </button>

                        <button className="btn-light-outline flex items-center gap-2">
                            <FaEnvelope /> Get in Touch
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
