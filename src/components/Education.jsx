import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

export default function Education({ education }) {
    return (
        <section id="education" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text">
                    Education
                </h2>
            </div>

            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/30 dark:bg-white/10" />

                <div className="space-y-8">
                    {education.map((e, i) => (
                        <motion.div
                            key={e.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`card p-6 relative sm:w-1/2 rounded-2xl shadow-xl 
                                        bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60
                                        hover:shadow-2xl transition cursor-pointer ${i % 2 ? "sm:ml-auto" : "sm:mr-auto"}`}
                        >
                            {/* Timeline dot aligned to center line */}
                            <div className="flex items-start gap-4">
                                <div className="text-sky-500 dark:text-sky-400">
                                    {i === 0 ? <GraduationCap size={24} /> : <School size={24} />}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{e.title}</h3>
                                    <p className="text-sm opacity-70">{e.period}</p>
                                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {e.detail}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Score: {e.marks}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
