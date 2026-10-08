import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                <div>
                    <a
                        href="#home"
                        className="text-xl font-bold text-white"
                    >
                        Sayem<span className="text-cyan-400">.</span>
                    </a>

                    <p className="mt-2 text-xs text-gray-600">
                        Web Developer · AI Enthusiast · Digital Marketer
                    </p>
                </div>

                <div className="flex items-center gap-3">
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

                    <a
                        href={portfolio.social.email}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-500 transition hover:border-cyan-400 hover:text-cyan-400"
                        aria-label="Email"
                    >
                        <Mail size={16} />
                    </a>
                </div>
            </div>

            <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} MD Sayem Islam. All rights reserved.
            </div>
        </footer>
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-500 transition hover:border-cyan-400 hover:text-cyan-400"
        >
            {label}
        </a>
    );
}