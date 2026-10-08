import {
    ArrowUpRight,
    FolderCode,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-slate-50 px-5 py-24 transition-colors duration-300 dark:bg-[#080808] sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                            Selected Work
                        </p>

                        <h2 className="text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
                            Featured Projects
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-gray-500">
                        A collection of web, AI, and digital projects. More work will be
                        added soon.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {portfolio.projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]"
                        >
                            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white/70 text-cyan-600 shadow-sm dark:border-white/10 dark:bg-black/30 dark:text-cyan-400">
                                    <FolderCode size={28} />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <ArrowUpRight
                                        size={19}
                                        className="shrink-0 text-gray-400 transition group-hover:text-cyan-500 dark:text-gray-600 dark:group-hover:text-cyan-400"
                                    />
                                </div>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-gray-200 px-2.5 py-1 text-[11px] text-gray-500 dark:border-white/10 dark:text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}