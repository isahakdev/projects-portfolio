import {
    ArrowDown,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-5 pb-16 pt-28 transition-colors duration-300 dark:bg-[#050505] sm:px-8 lg:px-12"
        >
            {/* ================= BACKGROUND GLOW ================= */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10 sm:h-[500px] sm:w-[500px]" />

            <div className="pointer-events-none absolute left-0 top-1/4 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

            {/* ================= MAIN CONTAINER ================= */}

            <div className="relative mx-auto w-full max-w-7xl">

                <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="text-center lg:text-left">

                        {/* Availability Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-gray-600 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-sm">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />

                            Available for freelance & collaboration
                        </div>

                        {/* Small Heading */}

                        <div className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400 sm:text-sm sm:tracking-[0.28em] lg:justify-start">
                            <Sparkles size={15} />

                            Web Developer · AI Enthusiast
                        </div>

                        {/* Main Heading */}

                        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-500">
                                {portfolio.name}
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
                            {portfolio.subtitle}
                        </p>

                        {/* Buttons */}

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">

                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/20 dark:bg-white dark:text-black dark:hover:bg-cyan-400 sm:text-base"
                            >
                                View Projects

                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/15 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400 sm:text-base"
                            >
                                Let&apos;s Talk
                            </a>

                        </div>

                        {/* Social Links */}

                        <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">

                            <SocialLink
                                href={portfolio.social.github}
                                label="GH"
                            />

                            <SocialLink
                                href={portfolio.social.linkedin}
                                label="in"
                            />

                            <SocialLink
                                href={portfolio.social.facebook}
                                label="f"
                            />

                            <SocialLink
                                href={portfolio.social.twitter}
                                label="𝕏"
                            />

                        </div>

                        {/* Tech Stack */}

                        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">

                            {[
                                "React",
                                "Next.js",
                                "TypeScript",
                                "AI",
                                "Meta Ads",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-cyan-400/30 dark:hover:text-cyan-400 sm:px-4 sm:text-sm"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                    </div>

                    {/* =================================================
                        RIGHT SIDE - PREMIUM IMAGE CARD
                    ================================================= */}

                    <div className="relative flex justify-center lg:justify-end">

                        {/* Large Glow */}

                        <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl sm:h-[430px] sm:w-[430px] dark:bg-cyan-500/10" />

                        {/* Rotating Border Wrapper */}

                        <div className="relative">

                            {/* Rotating Gradient */}

                            <div className="absolute -inset-[2px] overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]">

                                <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#22d3ee_70deg,#3b82f6_150deg,transparent_220deg,#22d3ee_300deg,transparent_360deg)]" />

                            </div>

                            {/* Main Card */}

                            <div className="relative h-[430px] w-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b0d] p-2 shadow-2xl shadow-cyan-500/10 sm:h-[500px] sm:w-[370px] md:h-[540px] md:w-[400px]">

                                {/* Inner Image */}

                                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">

                                    <Image
                                        src="/profile.png"
                                        alt={`${portfolio.name} profile photo`}
                                        fill
                                        priority
                                        className="object-cover object-center transition duration-700 hover:scale-105"
                                        sizes="(max-width: 640px) 310px, (max-width: 768px) 370px, 400px"
                                    />

                                    {/* Image Overlay */}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />

                                    {/* Top Left Badge */}

                                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">

                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-300 sm:text-[10px] sm:tracking-[0.22em]">
                                            Sayem.dev
                                        </span>

                                    </div>

                                    {/* Top Right Icon */}

                                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md sm:right-5 sm:top-5">

                                        <Sparkles
                                            size={15}
                                            className="text-cyan-400"
                                        />

                                    </div>

                                    {/* Bottom Content */}

                                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                                        {/* Status */}

                                        <div className="mb-2 flex items-center gap-2">

                                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-300 sm:text-xs">
                                                Available for work
                                            </span>

                                        </div>

                                        {/* Name */}

                                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                                            {portfolio.name}
                                        </h3>

                                        {/* Role */}

                                        <p className="mt-1 text-sm text-cyan-400 sm:text-base">
                                            Web Developer · AI Enthusiast
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Floating Cyan Dot */}

                            <div className="absolute -right-3 top-1/4 h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

                            {/* Floating Blue Dot */}

                            <div className="absolute -bottom-3 left-1/4 h-3 w-3 animate-pulse rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]" />

                        </div>

                    </div>

                </div>

                {/* =================================================
                    SCROLL INDICATOR
                ================================================= */}

                <a
                    href="#about"
                    aria-label="Scroll to About"
                    className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition hover:text-cyan-500 dark:text-gray-500 dark:hover:text-cyan-400 sm:flex"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">
                        Scroll
                    </span>

                    <ArrowDown
                        size={16}
                        className="animate-bounce"
                    />
                </a>

            </div>
        </section>
    );
}


/* ============================================================
   SOCIAL LINK
============================================================ */

function SocialLink({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500 hover:shadow-lg hover:shadow-cyan-400/10 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-cyan-400"
        >
            {label}
        </a>
    );
}