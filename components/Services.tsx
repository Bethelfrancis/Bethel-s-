"use client";

import { motion } from "framer-motion";
import { featureCards } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Services = () => {
    return (
        <motion.section
            id="services"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 px-4 lg:px-10"
        >

            <motion.div 
                variants={fadeInUp} 
                className="max-w-2xl"
            >
                <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer mb-5 group relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Services</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">Services</span>
                </button>

                <h2 className="text-foreground lg:text-3xl text-2xl mb-3 font-semibold">
                    Everything I Build Is Designed to Work for You
                </h2>
                
                <p className="text-grey text-base">
                    The Services I Offer and the Standard I Keep
                </p>

                <button className="bg-foreground text-base text-background font-semibold rounded-full px-4 py-1.5 cursor-pointer mt-5">
                    Contact Me
                </button>
            </motion.div>

            <motion.div className="lg:w-[80%] grid justify-between gap-6 md:grid-cols-2 mt-5">
                {
                    featureCards.map((feature) => (
                        <motion.article
                            key={feature.title}
                            variants={fadeInUp}
                            className="relative w-full md:h-70 lg:h-80 hover:h-85 rounded-2xl border border-slate-300 bg-[#fafafa] p-3 md:p-4 transition-all duration-700 group hover:bg-grey cursor-pointer hover:scale-105"
                        >

                            <hr className="hidden md:block w-[40%] border text-slate-200 rounded-full mb-5"/>
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-slate-100 my-2.5 md:my-5">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-6 text-black group-hover:text-slate-200 group-hover:text-base mb-10 md:mb-0">
                                {feature.description}
                            </p>

                            <div className="absolute bottom-6 right-6 hidden md:block">
                                <ArrowRight 
                                    className="transition-all duration-600 scale-110 group-hover:-rotate-45 group-hover:scale-150 group-hover:text-slate-200" 
                                />
                            </div>

                        </motion.article>
                    ))
                }
            </motion.div>

        </motion.section>
    );
}

export default Services