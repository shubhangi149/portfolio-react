import { motion } from "framer-motion";

export default function Hero({ data }) {
    const name = data.name
    const tag = data.tag
    const location = data.contactInfo.location.text
    const photo = data.photo
    return (
        <section
            className="relative overflow-hidden"
            onMouseMove={(e) => {
                const r = document.documentElement;
                r.style.setProperty("--x", e.clientX + "px");
                r.style.setProperty("--y", e.clientY + "px");
            }}
        >
            <div className="container-section py-10 sm:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Photo */}
                    <div className="flex justify-center">
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg shadow-sky-500/20">
                            <img
                                src={photo}
                                alt={`${name} photo`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Availability */}
                    <p className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-black/20 dark:border-white/10">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Full-time
                    </p>

                    {/* Name */}
                    <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
                        Hi, I’m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-pink-500">
                            {name}
                        </span>
                    </h1>

                    {/* Tag + Location */}
                    <p className="mt-4 text-base sm:text-lg opacity-90">{tag}</p>
                    <p className="mt-1 text-sm opacity-70">{location}</p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <a href="#projects" className="btn-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg border-2">
                            View Projects
                        </a>
                        <a href="#contact" className="btn-ghost px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg border-2">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
