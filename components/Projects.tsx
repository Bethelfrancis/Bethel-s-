"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ArrowUpRightIcon, ImageIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

    const handleImageError = (title: string) => {
        setFailedImages(prev => new Set([...prev, title]));
    };
    return (
        <motion.section
            id="work"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="px-4 lg:px-10 py-14"
        >

            <motion.div variants={fadeInUp}>
                <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer group relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Portfolio</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">Portfolio</span>
                </button>

                <motion.h2
                    variants={fadeInUp}
                    className="mt-7 text-foreground lg:text-3xl text-2xl lg:max-w-5xl font-semibold"
                >
                    A collection of projects focused on building scalable, high-performance frontend applications with clean architecture and real-world usability.
                </motion.h2>

            </motion.div>


                <motion.div 
                    variants={fadeInUp} 
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-18"
                >
                    {
                        portfolioItems.map((item) => (
                            <Link
                                href={item.link}
                                key={item.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-end h-80 md:h-75 lg:h-70 group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-102 cursor-pointer"
                            >
                                {
                                    !failedImages.has(item.title) ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={640}
                                            height={448}
                                            className="h-full w-full absolute top-0 left-0 object-cover transition-all duration-200 group-hover:scale-103"
                                            onError={() => handleImageError(item.title)}
                                        />
                                    ) : (
                                        <div className="h-full w-full absolute top-0 left-0 bg-gray-400 flex items-center justify-center">
                                            <ImageIcon className="w-12 h-12 text-gray-600 opacity-50" />
                                        </div>
                                    )
                                }

                                <div className="w-full flex flex-col items-start text-background p-3 relative z-10">
                                    <button className="z-0 text-xs uppercase font-semibold rounded-full px-3 py-1 border lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-700">
                                        {item.category}
                                    </button>

                                    <div className="w-full flex items-center justify-between lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-700 delay-150">
                                        <h3 className="z-0 my-3 text-xl font-semibold">
                                            {item.title}
                                        </h3>

                                        <ArrowUpRightIcon 
                                            className="scale-150 text-inherit md:mr-6"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </motion.div>

        </motion.section>
    );

}
export default Projects