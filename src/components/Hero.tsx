import { ArrowDown, ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:h-[450px] sm:w-[450px]" />

            <div className="relative mx-auto w-full max-w-6xl">
                <div className="mx-auto max-w-4xl text-center">

                    {/* Available Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-sm sm:text-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        Available for new projects
                    </div>

                    {/* Small Title */}
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
                        Web Developer · AI Enthusiast
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {portfolio.name}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                        {portfolio.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-400 sm:text-base"
                        >
                            View Projects

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:text-base"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex items-center justify-center gap-3">

                        {/* GitHub */}
                        <a
                            href={portfolio.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <span className="text-xs font-bold">GH</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={portfolio.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <span className="text-xs font-bold">in</span>
                        </a>

                        {/* Facebook */}
                        <a
                            href={portfolio.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <span className="text-xs font-bold">f</span>
                        </a>

                        {/* X */}
                        <a
                            href={portfolio.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <span className="text-xs font-bold">𝕏</span>
                        </a>

                    </div>

                    {/* Tech Stack */}
                    <div className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-2">
                        {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "AI",
                            "Meta Ads",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400 sm:px-4 sm:text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <a
                    href="#about"
                    aria-label="Scroll to About"
                    className="absolute -bottom-12 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-cyan-400 sm:flex"
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