import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer({ data }) {
    const quickLinks = data.quickLinks;

    const contactInfo = Object.values(data.contactInfo)
    const socialLinks = Object.entries(data.social_media_links).map(([name, data]) => ({ name, ...data }));

    const name = data.displayName;
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    // Looping typewriter effect
    useEffect(() => {
        const speed = isDeleting ? 100 : 200;
        const timeout = setTimeout(() => {
            if (!isDeleting && index < name.length) {
                setDisplayText(name.slice(0, index + 1));
                setIndex((prev) => prev + 1);
            } else if (isDeleting && index > 0) {
                setDisplayText(name.slice(0, index - 1));
                setIndex((prev) => prev - 1);
            } else if (!isDeleting && index === name.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && index === 0) {
                setIsDeleting(false);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, name]);

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800/40 bg-white/70 dark:bg-black/20 backdrop-blur-md transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700 dark:text-gray-300">

                {/* LEFT SECTION */}
                <motion.div
                    className="text-center sm:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Name */}
                    <motion.div
                        className="flex items-center justify-center sm:justify-start space-x-2"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white border-2 border-gray-400 dark:border-white  px-3 py-1 rounded-lg shadow-[0_0_15px_-3px_#555]  dark:shadow-[0_0_15px_-3px_#2527ef] backdrop-blur-md">
                            {displayText}
                            <motion.span
                                className="inline-block w-1 h-6 bg-gray-950 dark:bg-white ml-1 animate-pulse"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Building intelligent systems through{" "}
                        <span className="text-gray-950 dark:text-white font-medium">
                            data science, AI, and statistical modeling
                        </span>{" "}
                        for innovative real-world solutions.
                    </motion.p>

                    {/* Social Icons */}
                    <motion.div
                        className="flex justify-center sm:justify-start space-x-5 mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-800 dark:text-gray-200 hover:text-sky-400 dark:hover:text-white transition-all"
                                whileHover={{ scale: 1.2, y: -2, textShadow: "0 0 10px #2527fb" }}
                            >
                                <i className={social.icon}></i>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* MIDDLE SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-gray-950 dark:text-white text-lg font-semibold mb-4">
                        Get in Touch
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {contactInfo.map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="flex items-center gap-3 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                                whileHover={{ x: 3 }}
                            >
                                <i className={item.icon}></i>
                                {/* <span>{item.icon}</span> */}
                                <span>{item.text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="text-gray-950 dark:text-white text-lg font-semibold mb-4">
                        Quick Links
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        {quickLinks.map((link, index) => (
                            <motion.a
                                key={`${link.name}-${index}`}
                                href={link.href}
                                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                                whileHover={{ x: 2 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* BOTTOM COPYRIGHT */}
            <motion.div
                className="border-t border-gray-300 dark:border-gray-800/40 mt-8 text-center py-4 text-xs text-gray-600 dark:text-gray-500 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                    {name}
                </span>{" "}
                — Built with React, Vite & Tailwind
            </motion.div>
        </footer>
    );
}
