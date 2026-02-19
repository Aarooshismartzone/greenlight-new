"use client"

import React, { useEffect, useState } from "react"
import {
  FaUsers,
  FaMicrophone,
  FaGamepad,
  FaGlobe,
  FaTrophy,
  FaStar,
  FaBolt
} from "react-icons/fa"
import "./gestyle.css"
import { useTheme } from "next-themes"

export default function GreenLightExperienceComponent() {

  /* ---------------- Banner Slides ---------------- */
  const slides = [
    {
      image: "/images/greenlight_experience/fam.jpg",
      tagline: "Connect with loved ones anywhere in the world"
    },
    {
      image: "/images/greenlight_experience/augmented_reality.jpg",
      tagline: "Step into immersive augmented experiences"
    },
    {
      image: "/images/greenlight_experience/gifts.jpg",
      tagline: "Engage, achieve, and earn rewards"
    },
    {
      image: "/images/greenlight_experience/soccer.jpg",
      tagline: "Experience live events together in real time"
    }
  ]

  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const [isNightmode, setIsNightmode] = useState(false);

  useEffect(() => {
    setIsNightmode(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, []);

  /* ---------------- Component ---------------- */

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

      {/* ================= Banner ================= */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px] overflow-hidden">

        {/* Background Slides */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={`absolute w-full h-full object-cover object-top kenburns-img
              fade-transition ${index === active ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Adaptive Overlay */}
        <div
          className="
      absolute inset-0
      bg-white/60 dark:bg-black/60
      transition-colors duration-500
      flex flex-col justify-center items-center text-center px-6
    "
        >
          {/* Title */}
          <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${isNightmode
            ? "from-green-400 to-emerald-500"
            : "from-green-700 to-emerald-800"
            }`}>
            The GreenLight Experience
          </h1>

          {/* Floating Tagline */}
          <p
            key={active}
            className="
        floating-text
        text-lg md:text-xl
        max-w-2xl
        opacity-90
      "
          >
            {slides[active].tagline}
          </p>
        </div>
      </section >

      {/* ================= Key Features ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20 pt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8" >

        {
          [
            {
              icon: <FaUsers />,
              title: "Immersive Social Spaces",
              desc: "Attend live or on-demand events together inside spatial 3D venues that feel like shared lounges or private theaters."
            },
            {
              icon: <FaMicrophone />,
              title: "Interactive Communication",
              desc: "Voice chat, emojis, AR filters, and real-time reactions create natural, expressive interaction."
            },
            {
              icon: <FaGamepad />,
              title: "Gamification & Rewards",
              desc: "Capture 3D Moments, earn badges, complete quests, and build identity through achievements."
            },
            {
              icon: <FaGlobe />,
              title: "Branded Engagement",
              desc: "Host themed or sponsored watch parties with custom visuals that deepen audience loyalty."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10
            shadow-lg hover:shadow-2xl transition-all duration-300
            hover:-translate-y-2 bg-white dark:bg-white/5 backdrop-blur"
            >
              <div className="text-green-500 text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="opacity-75 text-sm">{item.desc}</p>
            </div>
          ))
        }
      </section >

      {/* ================= Experience Banner ================= */}
      < section className="py-20 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white" >
        <h3 className="text-3xl font-semibold max-w-3xl mx-auto">
          Feel present together - cheer, react, and celebrate as if seated
          side-by-side anywhere on Earth.
        </h3>
      </section >

      {/* ================= Real Connection Section ================= */}
      < section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center" >

        {/* Image */}
        < div className="relative overflow-hidden rounded-2xl shadow-xl group" >
          <img
            src="/images/greenlight_experience/seniors.jpg"
            alt="Family connecting online"
            className="w-full h-full object-cover object-center
      transition-transform duration-700 group-hover:scale-105"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        </div >

        {/* Content */}
        < div >
          <h3 className="text-3xl font-semibold mb-4">
            Bringing People Closer — Beyond Distance
          </h3>

          <p className="opacity-80 mb-4">
            Users can co-attend concerts, sports events, family gatherings, and
            educational experiences inside spatial virtual environments designed
            to feel personal and shared.
          </p>

          <p className="opacity-70">
            Friends and families across the globe can see, hear, and interact
            naturally — celebrating moments together as if seated side-by-side.
          </p>
        </div >

      </section >

      {/* ================= Interaction Features ================= */}
      < section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8" >

        {
          [
            {
              icon: <FaMicrophone />,
              title: "Spatial Voice Chat",
              desc: "Hear voices naturally based on proximity for real-world conversations."
            },
            {
              icon: <FaStar />,
              title: "Live Reactions",
              desc: "Express emotions instantly with emojis and dynamic responses."
            },
            {
              icon: <FaBolt />,
              title: "Real-Time Presence",
              desc: "See and interact with others inside shared virtual environments."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-100 dark:bg-white/5
            hover:shadow-xl transition"
            >
              <div className="text-green-500 text-2xl mb-4">{item.icon}</div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="opacity-75 text-sm">{item.desc}</p>
            </div>
          ))
        }
      </section >

      {/* ================= Green Engagement Section ================= */}
      < section className="bg-green-100 dark:bg-green-800 py-20" >
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-semibold mb-10">
            Engagement That Rewards Participation
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl bg-white dark:bg-white/5 shadow">
              <FaTrophy className="text-green-500 text-2xl mb-3 mx-auto" />
              <h4 className="font-semibold">3D Moments</h4>
              <p className="text-sm opacity-75">
                Capture and share immersive highlights as memorable clips.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-white/5 shadow">
              <FaStar className="text-green-500 text-2xl mb-3 mx-auto" />
              <h4 className="font-semibold">Badges & Achievements</h4>
              <p className="text-sm opacity-75">
                Earn recognition for participation, invitations, and engagement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-white/5 shadow">
              <FaGamepad className="text-green-500 text-2xl mb-3 mx-auto" />
              <h4 className="font-semibold">Quests & Leaderboards</h4>
              <p className="text-sm opacity-75">
                Join challenges, compete socially, and unlock exclusive rewards.
              </p>
            </div>

          </div>
        </div>
      </section >

      {/* ================= Why It Matters ================= */}
      < section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 text-center" >

        <div>
          <h4 className="font-semibold mb-2">Shared Experience</h4>
          <p className="opacity-75 text-sm">
            Fans interact and react together in real time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Stronger Community</h4>
          <p className="opacity-75 text-sm">
            Engagement tools build loyalty and deeper participation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Memorable Moments</h4>
          <p className="opacity-75 text-sm">
            AR features and 3D captures turn events into lasting memories.
          </p>
        </div>

      </section >

      {/* ================= Closing ================= */}
      < section className="text-center pb-24 px-6" >
        <h3 className="text-3xl font-semibold max-w-3xl mx-auto">
          Explore. Connect. Experience events together — beyond screens,
          beyond distance.
        </h3>
      </section >

    </div >
  )
}
