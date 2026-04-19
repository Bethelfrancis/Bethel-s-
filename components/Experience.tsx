"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const Experience = () => {
    return (
        <motion.section
            id="experience"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="bg-[#fafafa] py-14 mt-20"
        >

            <motion.div variants={fadeInUp} className="px-4 lg:px-10">
                <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer group relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Experience</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">Experience</span>
                </button>
                
                <motion.h2
                    variants={fadeInUp}
                    className="mt-7 text-foreground lg:text-3xl text-2xl lg:max-w-4xl font-semibold"
                >
                    A track record of building scalable, high performance frontend applications with clean architecture and production reliability.
                </motion.h2>

            </motion.div>

            <div className="mt-22">
                {
                    experience.map((item) => (
                        <motion.div
                            key={`${item.role}-${item.period}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="grid gap-6 border-t border-slate-200/80 sm:grid-cols-[1.5fr_0.5fr] sm:items-center hover:bg-[#f0eeee] cursor-pointer"
                        >
                            <div className="max-w-3xl">
                                <p className="px-4 lg:px-10 pt-8 text-sm text-slate-500">{item.company}</p>
                                <h3 className="px-4 lg:px-10 mt-2 text-xl font-semibold text-slate-950">{item.role}</h3>
                                <p className="px-4 lg:px-10 pb-8 mt-3 text-sm leading-7 text-slate-600">{item.details}</p>
                            </div>
                            <p className="px-4 lg:px-10 text-right text-base font-semibold text-slate-900">{item.period}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.section>
    );
}

export  default Experience