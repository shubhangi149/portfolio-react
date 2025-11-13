import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience({ experiences }) {
    return (
        <section id="experience" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text">
                    Experience
                </h2>
            </div>

            <div className="relative">
                {/* Central timeline line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/30 dark:bg-white/10" />

                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`card p-6 relative sm:w-1/2 rounded-2xl shadow-lg 
                                        bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60
                                        hover:shadow-2xl hover:scale-[1.02] transition cursor-pointer 
                                        ${i % 2 ? "sm:ml-auto" : "sm:mr-auto"}`}
                        >
                            {/* Period pill near the dot */}
                            <div className="absolute sm:left-1/2 sm:-translate-x-1/2 -top-5">
                                <span className="px-3 py-1 text-xs rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300 shadow-sm">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-sky-500 dark:text-sky-400">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                                    <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                                        {exp.company}
                                    </p>
                                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {exp.responsibilities.map((r, idx) => (
                                            <li key={idx}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
