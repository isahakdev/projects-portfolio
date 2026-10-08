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
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-5 pb-16 pt-28 transition-colors duration-300 dark:bg-[#050505] sm:px-8 lg:px-12"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10 sm:h-[500px] sm:w-[500px]" />

            <div className="pointer-events-none absolute left-0 top-1/4 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative mx-auto w-full max-w-6xl">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-gray-600 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        Available for freelance & collaboration
                    </div>

                    <div className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
                        <Sparkles size={15} />
                        Web Developer · AI Enthusiast
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 dark:text-white sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-500">
                            {portfolio.name}
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
                        {portfolio.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400 sm:text-base"
                        >
                            View Projects
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/15 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400 sm:text-base"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-3">
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

                    <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2">
                        {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "AI",
                            "Meta Ads",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 shadow-sm transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-cyan-400 sm:px-4 sm:text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-500 shadow-sm transition hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-cyan-400"
        >
            {label}
        </a>
    );
}