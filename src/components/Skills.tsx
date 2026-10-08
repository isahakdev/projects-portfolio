import { Check } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-slate-50 px-5 py-24 transition-colors duration-300 dark:bg-[#080808] sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                        Tech Stack
                    </p>

                    <h2 className="text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
                        Tools I use to build{" "}
                        <span className="text-cyan-500 dark:text-cyan-400">
                            digital products.
                        </span>
                    </h2>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                    {portfolio.skills.map((skill) => (
                        <div
                            key={skill}
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:bg-cyan-400/5 dark:hover:text-white"
                        >
                            <Check
                                size={15}
                                className="text-cyan-500 dark:text-cyan-400"
                            />

                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}