"use client";

import Image from "next/image";
import {
    ArrowDown,
    ArrowRight,
    Sparkles,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-slate-50 px-5 pb-16 pt-28 transition-colors duration-300 dark:bg-[#050505] sm:px-8 lg:px-10"
        >
            {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

            <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-500/10" />

            <div className="pointer-events-none absolute right-[-180px] top-[25%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]" />

            <div className="pointer-events-none absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

            {/* =========================================
          MAIN CONTAINER
      ========================================= */}

            <div className="relative mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center">
                <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

                    {/* =====================================
              LEFT SIDE
          ===================================== */}

                    <div className="order-2 text-center lg:order-1 lg:text-left">

                        {/* Available Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-400">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                            </span>

                            Available for work
                        </div>

                        {/* Small Heading */}

                        <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-500 lg:justify-start">
                            <Sparkles size={16} />

                            <span>Web Developer · AI Enthusiast</span>
                        </div>

                        {/* Main Heading */}

                        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Hi, I&apos;m{" "}
                            <span className="text-cyan-500">
                                {portfolio.name}
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg lg:mx-0">
                            {portfolio.subtitle}
                        </p>

                        {/* Buttons */}

                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">

                            <a
                                href="#projects"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-400 hover:text-black sm:w-auto dark:bg-white dark:text-black dark:hover:bg-cyan-400"
                            >
                                View Projects

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition duration-300 hover:border-cyan-400 hover:text-cyan-500 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                            >
                                Let&apos;s Talk
                            </a>

                        </div>

                        {/* Social Links */}

                        <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">

                            <SocialLink
                                href="https://github.com"
                                label="GH"
                                title="GitHub"
                            />

                            <SocialLink
                                href="https://linkedin.com"
                                label="in"
                                title="LinkedIn"
                            />

                            <SocialLink
                                href="https://facebook.com"
                                label="f"
                                title="Facebook"
                            />

                            <SocialLink
                                href="https://x.com"
                                label="𝕏"
                                title="X"
                            />

                        </div>

                        {/* Tech Stack */}

                        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">

                            {[
                                "React",
                                "Next.js",
                                "TypeScript",
                                "AI",
                                "Meta Ads",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>
                    </div>

                    {/* =====================================
              RIGHT SIDE — PROFILE
          ===================================== */}

                    <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

                        <div className="relative">

                            {/* =================================
                  SOFT OUTER GLOW
              ================================= */}

                            <div className="hero-ring-glow pointer-events-none" />

                            {/* =================================
                  ROTATING COLOR RING
              ================================= */}

                            <div className="hero-ring pointer-events-none" />

                            {/* =================================
                  IMAGE FRAME
              ================================= */}

                            <div className="hero-image-frame h-[430px] w-[310px] border border-white/10 shadow-2xl shadow-cyan-500/10 sm:h-[500px] sm:w-[370px] md:h-[540px] md:w-[400px]">

                                {/* Profile Image */}

                                <Image
                                    src="/profile1.png"
                                    alt={`${portfolio.name} profile photo`}
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 310px, (max-width: 768px) 370px, 400px"
                                    className="object-cover object-center transition duration-700 hover:scale-105"
                                />

                                {/* Dark Overlay */}

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

                                {/* =================================
                    TOP BADGE
                ================================= */}
                                <div className="absolute left-5 top-5 z-10">
                                    <div className="float-badge flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/50 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                                        </span>

                                        <span className="text-emerald-300">Active</span>
                                    </div>
                                </div>

                                {/* =================================
                    IMAGE BOTTOM CONTENT
                ================================= */}

                                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">

                                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">

                                        <span className="hero-light-dot h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />

                                        Available for work
                                    </div>

                                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                        {portfolio.name}
                                    </h2>

                                    <p className="mt-1 text-sm text-white/70">
                                        Web Developer · AI Enthusiast
                                    </p>

                                </div>
                            </div>

                            {/* =================================
                  FLOATING DECORATIVE DOTS
              ================================= */}

                            <div className="hero-light-dot absolute -right-4 top-16 z-10 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] sm:-right-6" />

                            <div
                                className="hero-light-dot absolute -bottom-4 left-8 z-10 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                                style={{ animationDelay: "1s" }}
                            />

                            <div
                                className="hero-light-dot absolute -left-3 top-1/3 z-10 h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_#8b5cf6]"
                                style={{ animationDelay: "0.5s" }}
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

            <a
                href="#about"
                aria-label="Scroll to about section"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition hover:text-cyan-500 sm:flex"
            >
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                    Scroll
                </span>

                <ArrowDown
                    size={16}
                    className="animate-bounce"
                />
            </a>
        </section>
    );
}

/* =========================================
   SOCIAL LINK
========================================= */

function SocialLink({
    href,
    label,
    title,
}: {
    href: string;
    label: string;
    title: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            title={title}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
        >
            {label}
        </a>
    );
}