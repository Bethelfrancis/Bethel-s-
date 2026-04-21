"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { skills } from "@/lib/content";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

const Skills = () => {
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

    const handleImageError = (skillLabel: string) => {
        setFailedImages(prev => new Set([...prev, skillLabel]));
    };
    const scrollRef = useRef<HTMLDivElement>(null);
    const speedRef = useRef(1);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        let position = 0;
        const animate = () => {
            position -= speedRef.current;
            if (position <= -element.scrollWidth / 2) position = 0;
            element.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        };
        animate();
    }, []);


    return (
        <motion.section
            id="skill"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="px-4 lg:px-10 py-20"
        >

            <motion.div variants={fadeInUp}>
                <button className="bg-transparent text-base text-foreground font-semibold rounded-full px-4 py-1.5 border border-foreground cursor-pointer group relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Skills</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">Skills</span>
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
    
                <div 
                    ref={scrollRef}
                    onMouseEnter={() => speedRef.current = 1}
                    onMouseLeave={() => speedRef.current = 3}
                    className="flex w-max py-10 gap-5"
                >
                    {
                        skills.concat(skills).map((skill, index) => (
                            <span 
                                key={index + skill.label} 
                                className="flex items-center gap-2 rounded-full border border-slate-400 bg-gray px-4 py-2 transition-all duration-500 hover:-translate-y-2 hover:scale-102 cursor-pointer"
                            >

                                {
                                    skill.icon && !failedImages.has(skill.label)
                                    ?  <Image 
                                            width={100}
                                            height={100}
                                            src={skill.icon}
                                            alt="Skill Icon"
                                            className="w-6 rounded-full"
                                            onError={() => handleImageError(skill.label)}
                                        />
                                    : skill.icon && <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center"><ImageIcon className="w-3 h-3 text-gray-600" /></div>
                                }
                                
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