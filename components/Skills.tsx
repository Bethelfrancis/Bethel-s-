"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { skills } from "@/lib/content";

const Skills = () => {
    return (
        <motion.section
            id="skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="px-4 lg:px-10 py-14"
        >

            <motion.div variants={fadeInUp}>
                <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer">
                    Skills
                </button>

                <motion.h2
                    variants={fadeInUp}
                    className="mt-7 text-foreground lg:text-3xl text-2xl lg:max-w-6xl font-semibold"
                >
                    I design and build scalable frontend systems that balance performance, usability, and clean architecture—using modern technologies to deliver reliable, production-ready web experiences.
                </motion.h2>
            </motion.div>

            <div
                className="w-full overflow-hidden mt-7 mask-(--mask-fade-side)"
            >
    
                <div className="flex w-max animate-scroll py-10 gap-5">
                    {
                        skills.concat(skills).map((skill, index) => (
                            <span 
                                key={index + skill.label} 
                                className="rounded-full border border-slate-400 bg-gray px-4 py-2"
                            >
                                {skill.label}
                            </span>
                        ))
                    }
                </div>
    
            </div>

        </motion.section>
    );
}
export default Skills