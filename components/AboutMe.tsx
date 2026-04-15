"use client";

import { motion } from "framer-motion";
import { brandStats } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";

const AboutMe = () => {
    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
            className="px-4 lg:px-10 py-14"
        >

            <motion.div variants={fadeInUp}>
                <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer">
                    About Me
                </button>

                <motion.div 
                    variants={fadeInUp}
                    className="mt-7 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10"
                >
                    <h2 className="text-foreground lg:text-3xl text-2xl lg:max-w-2xl font-semibold">
                        I specialize in engineering efficient, production-ready systems, transforming ideas into fast, reliable, and user-focused digital experiences.
                    </h2>
                    
                    <p className="text-black text-base lg:max-w-sm lg:mt-0 ">
                        I design and engineer scalable, high-performance applications that bring digital visions to life.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div 
                variants={fadeInUp}
                className="flex flex-col lg:flex-row justify-between lg:items-center mt-18 gap-7 lg:gap-20"
            >

                <motion.div variants={fadeInUp} className="w-full">
                    <Image
                        src="/abot.png"
                        alt="about image"
                        width={900}
                        height={500}
                        className="w-500 h-full object-cover rounded-3xl"
                        priority
                    />
                </motion.div>
                    

                <motion.div 
                    variants={fadeInUp}
                    className="space-y-10"
                >

                    {
                        brandStats.map((brand, index) => (
                            <div
                                key={index}
                            >
                                <h4 className="text-5xl text-foreground mb-3 font-semibold">
                                    +{brand.value}
                                </h4>

                                <p className="text-base text-grey">
                                    {brand.desc}
                                </p>
                            </div>
                        ))
                    }
                    <div>
                        <h4>

                        </h4>
                    </div>

                </motion.div>
            </motion.div>
            
        </motion.section>
    );
}

export default AboutMe