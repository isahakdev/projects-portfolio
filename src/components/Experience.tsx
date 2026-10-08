import {
    BriefcaseBusiness,
    GraduationCap,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-white px-5 py-24 transition-colors duration-300 dark:bg-[#050505] sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                        Journey
                    </p>

                    <h2 className="text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
                        Experience & Education
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                            <BriefcaseBusiness size={23} />
                        </div>

                        <p className="mt-6 text-sm text-gray-500">
                            Experience
                        </p>

                        <h3 className="mt-1 text-3xl font-bold text-gray-950 dark:text-white">
                            {portfolio.experience}
                        </h3>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {portfolio.experienceDetails.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-500 dark:border-white/10 dark:bg-transparent dark:text-gray-400"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                            <GraduationCap size={23} />
                        </div>

                        <p className="mt-6 text-sm text-gray-500">
                            Education
                        </p>

                        <h3 className="mt-2 text-xl font-semibold leading-8 text-gray-950 dark:text-white">
                            {portfolio.education}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            Computer Science & Engineering with a focus on technology and
                            practical digital skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}