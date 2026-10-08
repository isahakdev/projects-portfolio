"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
            <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/80 px-4 shadow-2xl backdrop-blur-xl sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight text-white sm:text-2xl"
                    >
                        Sayem<span className="text-cyan-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm text-gray-300 transition hover:text-cyan-400"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400 lg:block"
                    >
                        Let&apos;s Talk
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="border-t border-white/10 pt-4">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
                            >
                                Let&apos;s Talk
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}