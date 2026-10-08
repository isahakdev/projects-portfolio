"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed left-1/2 top-2 z-50 w-[calc(100%-20px)] max-w-6xl -translate-x-1/2">
            <nav className="rounded-2xl border border-black/10 bg-white/90 px-4 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#050505]/90 sm:px-5">
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="text-xl font-bold tracking-tight text-gray-950 dark:text-white"
                    >
                        Sayem<span className="text-cyan-500">.</span>
                    </a>

                    <div className="hidden items-center gap-6 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 transition hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 sm:flex">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                        >
                            {isDark ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        <a
                            href="#contact"
                            className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>

                    <div className="flex items-center gap-2 sm:hidden">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                        >
                            {isDark ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="border-t border-gray-200 py-4 dark:border-white/10 lg:hidden">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-cyan-500 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="mt-2 rounded-xl bg-gray-950 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-black"
                            >
                                Let&apos;s Talk
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}