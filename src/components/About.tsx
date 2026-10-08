import {
    ArrowUpRight,
    Code2,
    Lightbulb,
    Rocket,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function About() {
    return (
        <section
            id="about"
            className="bg-white px-5 py-24 transition-colors duration-300 dark:bg-[#050505] sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                            About Me
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
                            Building ideas into{" "}
                            <span className="text-cyan-500 dark:text-cyan-400">
                                digital experiences.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                            {portfolio.about}
                        </p>

                        <a
                            href="#contact"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
                        >
                            Let&apos;s work together
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-3">
                    <InfoCard
                        icon={<Code2 size={22} />}
                        title="Build"
                        text="Modern and responsive web applications."
                    />

                    <InfoCard
                        icon={<Lightbulb size={22} />}
                        title="Explore"
                        text="AI tools and emerging technologies."
                    />

                    <InfoCard
                        icon={<Rocket size={22} />}
                        title="Grow"
                        text="Digital solutions focused on real-world results."
                    />
                </div>
            </div>
        </section>
    );
}

function InfoCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                {icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-500">
                {text}
            </p>
        </div>
    );
}