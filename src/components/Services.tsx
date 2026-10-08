import {
    ArrowUpRight,
    Brain,
    Code2,
    Megaphone,
    Video,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

const icons = [
    Code2,
    Brain,
    Megaphone,
    Video,
];

export default function Services() {
    return (
        <section
            id="services"
            className="bg-white px-5 py-24 transition-colors duration-300 dark:bg-[#050505] sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                            What I Do
                        </p>

                        <h2 className="text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
                            Services & expertise
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-gray-500">
                        Combining technology, creativity, and digital strategy to create
                        useful solutions.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {portfolio.services.map((service, index) => {
                        const Icon = icons[index];

                        return (
                            <div
                                key={service.title}
                                className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                                        <Icon size={22} />
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-gray-400 transition group-hover:text-cyan-500 dark:text-gray-600 dark:group-hover:text-cyan-400"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}