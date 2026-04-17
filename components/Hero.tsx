"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden top-12">
            <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="lg:h-screen flex flex-col lg:justify-between mx-auto gap-12 px-4 lg:px-10 py-14"
            >

                <div className="hidden lg:block relative">
                    <motion.div
                        variants={fadeInUp}
                        className="w-60 h-70 absolute right-0 overflow-hidden rounded-4xl border border-slate-200/90"
                    >
                        <Image
                            src="/dope.png"
                            alt="Portfolio showcase image"
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
                </div>
                

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-5 gap-7 lg:gap-10">

                    <motion.h1
                        variants={fadeInUp}
                        className="lg:max-w-2xl text-6xl tracking-tight text-foreground lg:text-9xl lg:leading-35 "
                    >
                        {hero.role}
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="lg:max-w-130 text-lg leading-8 text-foreground sm:text-xl lg:text-right font-semibold"
                    >
                        {hero.description}
                    </motion.p>

                </div>

                <div className="lg:hidden block relative">
                    <motion.div
                        variants={fadeInUp}
                        className="w-full h-100 sm:h-180 overflow-hidden rounded-2xl border border-slate-200/90"
                    >
                        <Image
                            src="/dope.png"
                            alt="Portfolio showcase image"
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
                </div>

            </motion.div>

        </section>
    );
}

export default Hero