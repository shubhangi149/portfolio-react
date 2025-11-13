import { motion } from "framer-motion";
import { Code, Cpu, Globe, Database, Wrench } from "lucide-react";

export default function Skills({ skills }) {
    return (
        <section id="skills" className="container-section px-5 sm:px-10 py-0 sm:py-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text">
                    Skills
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
                {skills.map((s, i) => (
                    <motion.div
                        key={`${s}-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={{ scale: 1.07, rotate: [-1, 1, 0] }}
                        className="group relative card px-3 py-4 text-center rounded-2xl shadow-md bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60 backdrop-blur-sm hover:shadow-lg cursor-pointer max-w-[180px] w-full"
                    >
                        <div className="flex justify-center mb-3">
                            <Code className="w-6 h-6 text-sky-500 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{s}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
