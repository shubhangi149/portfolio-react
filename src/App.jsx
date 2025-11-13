import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Stars from "./components/canvas/Stars.jsx";
import SunCanvas from "./components/canvas/SunCanvas.jsx";
import { PROFILE } from "./constants";
import { useTheme } from "./utils/theme.jsx";
import { Moon, Sun, ArrowUp } from "lucide-react";

export default function App() {
    const { dark, toggle } = useTheme();
    const [showTop, setShowTop] = useState(false);

    // Show "Back to Top" button after scrolling
    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Confetti effect on first open
    useEffect(() => {
        if (!sessionStorage.getItem("burst")) {
            sessionStorage.setItem("burst", "1");
            const emojis = ["✨", "🎉", "🎆", "🌸", "💫"];
            let i = 0;
            const id = setInterval(() => {
                if (i++ > 12) return clearInterval(id);
            }, 120);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-amber-100/50 dark:bg-black/50 relative overflow-hidden">
            {/* Backgrounds */}
            {dark ? <Stars /> : <SunCanvas />}

            <div className="sticky top-0 left-0">
                <Navbar onToggleTheme={toggle} isDark={dark} />
                <main>
                    <Hero data={PROFILE} />
                    <About about={PROFILE.about} links={PROFILE.social_media_links.Resume.url} />
                    <Skills skills={PROFILE.skills} />
                    <Projects projects={PROFILE.projects} />
                    <Education education={PROFILE.education} />
                    <Experience experiences={PROFILE.experiences} />
                    <Contact data={PROFILE}/>
                </main>
                <Footer data={PROFILE}/>
            </div>

            {/* Floating Buttons */}
            {/* Theme Toggle */}
            <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="fixed bottom-6 right-6 z-50 
                            p-3 rounded-full shadow-lg 
                            border border-gray-300 dark:border-gray-700 
                            bg-white dark:bg-gray-800 
                            text-gray-800 dark:text-gray-200 
                            hover:scale-110 transition-transform duration-200"
            >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Back to Top */}
            {showTop && (
                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-20 right-6 z-50 
            p-3 rounded-full shadow-lg 
            border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-gray-800 
            text-gray-800 dark:text-gray-200 
            hover:scale-110 transition-transform duration-200"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </div>
    );
}
