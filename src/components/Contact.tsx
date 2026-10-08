import {
    ArrowUpRight,
    Mail,
    MessageCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-slate-50 px-5 py-24 transition-colors duration-300 dark:bg-[#080808] sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-10 lg:p-14">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                    <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                                Let&apos;s Connect
                            </p>

                            <h2 className="max-w-2xl text-3xl font-bold text-gray-950 dark:text-white sm:text-5xl">
                                Have an idea?
                                <br />
                                Let&apos;s build it together.
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                                Available for freelance projects, collaborations, digital
                                solutions, and interesting ideas.
                            </p>

                            <a
                                href={portfolio.social.email}
                                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400"
                            >
                                Send an Email
                                <ArrowUpRight size={17} />
                            </a>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <ContactLink
                                href={portfolio.social.github}
                                icon={<span className="text-xs font-bold">GH</span>}
                                label="GitHub"
                            />

                            <ContactLink
                                href={portfolio.social.linkedin}
                                icon={<span className="text-xs font-bold">in</span>}
                                label="LinkedIn"
                            />

                            <ContactLink
                                href={portfolio.social.facebook}
                                icon={<span className="text-sm font-bold">f</span>}
                                label="Facebook"
                            />

                            <ContactLink
                                href={portfolio.social.twitter}
                                icon={<span className="text-sm font-bold">𝕏</span>}
                                label="X / Twitter"
                            />

                            <ContactLink
                                href={portfolio.social.whatsapp}
                                icon={<MessageCircle size={18} />}
                                label="WhatsApp"
                            />

                            <ContactLink
                                href={portfolio.social.email}
                                icon={<Mail size={18} />}
                                label="Email"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactLink({
    href,
    icon,
    label,
}: {
    href: string;
    icon: ReactNode;
    label: string;
}) {
    const isEmail = href.startsWith("mailto:");

    return (
        <a
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-600 transition hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-black/20 dark:text-gray-400 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400"
        >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm dark:bg-white/5 dark:text-gray-300">
                {icon}
            </span>

            <span>{label}</span>

            <ArrowUpRight
                size={15}
                className="ml-auto text-gray-400 dark:text-gray-600"
            />
        </a>
    );
}