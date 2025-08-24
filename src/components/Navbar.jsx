import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../constants";

export default function Navbar({ onToggleTheme, isDark }) {
    const links = PROFILE.links
    const email = PROFILE.email
    return (
        <header className="px-4 top-0 z-50 backdrop-blur-md bg-white dark:bg-black/5 border-b border-gray-100 dark:border-gray-800">
            <nav className="container-section flex items-center justify-between h-16">
                {/* Brand / Logo */}
                <a href="" className="font-extrabold tracking-tight text-xl sm:text-2xl">
                    <span className="inline-flex items-center gap-1">
                        <span className="text-sky-500"></span>
                        <span className="bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent font-extrabold">
                            Portfolio
                        </span>
                    </span>

                </a>

                {/* Links (hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition">About</a>
                    <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Projects</a>
                    <a href="#education" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Education</a>
                    <a href="#experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Experience</a>
                    <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Contact</a>
                </div>

                {/* Right side buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400"
                    >
                        <Github size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>

                    <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-1 text-gray-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400"
                    >
                        <Linkedin size={18} />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>

                    <div className="sticky top-4 left-0">
                        <button
                            onClick={onToggleTheme}
                            aria-label="Toggle theme"
                            className="px-4 py-2 text-base font-medium rounded-lg border border-transparent 
                        bg-black text-white hover:border-indigo-400 
                        dark:bg-white dark:text-neutral-900 transition-colors duration-200"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                </div>
            </nav>
        </header>
    );
}
