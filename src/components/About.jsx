import { motion } from "framer-motion";
import { Sparkles, Code, Users, GitBranch, BookOpen } from "lucide-react";

export default function About({ about, links }) {
    return (
        <section id="about" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {/* About Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-2 card p-10 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/80 dark:to-gray-800/70 shadow-xl rounded-2xl"
                >
                    <h2 className="text-3xl font-bold tracking-tight dark:bg-white bg-gray-950 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="mt-5 leading-relaxed text-gray-700 dark:text-gray-300 text-lg">
                        {about}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={links}
                            target="_blank"
                            className="btn-primary rounded-full border-2 px-6 py-2.5 text-sm"
                        >
                            Download Resume
                        </a>
                        <a href="#skills" className="btn-ghost rounded-full border-2 px-6 py-2.5 text-sm">
                            My Skills
                        </a>
                    </div>
                </motion.div>

                {/* Highlights Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="card p-8 bg-gradient-to-br from-sky-50 to-pink-50 dark:from-gray-800/80 dark:to-gray-900/70 shadow-lg rounded-2xl"
                >
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        
                        Highlights
                    </h3>
                    <ul className="mt-5 space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-sky-500" />
                            Strong foundation in DSA & Python Programming
                        </li>
                        <li className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-pink-500" />
                            Team Player, made project with team
                        </li>
                        <li className="flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-green-500" />
                            Clean, readable code with Git workflow
                        </li>
                        <li className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-purple-500" />
                            Curious, disciplined & quick learner
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
