import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../constants";

export default function Navbar() {
    const links = PROFILE.links;
    const social_media_links = PROFILE.social_media_links;

    return (
        <header className="px-4 top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-gray-100 dark:border-gray-800/40 sticky">
            <nav className="container-section flex items-center justify-between h-16">
                {/* Brand / Logo */}
                <a href="#" className="font-extrabold tracking-tight text-xl sm:text-2xl">
                    <span className="inline-flex items-center gap-1">
                        <span className="bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent font-extrabold">
                            Portfolio
                        </span>
                    </span>
                </a>

                {/* Navigation links */}
                <div className="hidden md:flex items-center gap-6 font-medium text-base">
                    <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition">About</a>
                    <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Projects</a>
                    <a href="#education" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Education</a>
                    <a href="#experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Experience</a>
                    <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Contact</a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400"
                    >
                        <Mail size={18} />
                        <span className="hidden sm:inline">Mail</span>
                    </a>

                    <a
                        href={social_media_links.GitHub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400"
                    >
                        <Github size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>

                    <a
                        href={social_media_links.LinkedIn.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-1 text-gray-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400"
                    >
                        <Linkedin size={18} />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>

                </div>
            </nav>
        </header>
    );
}
