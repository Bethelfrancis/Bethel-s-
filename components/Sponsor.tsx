"use client";

import { motion } from "framer-motion";
import { brands } from "@/lib/content";
import { staggerContainer } from "@/lib/motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";


const Sponsor = () => {
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

    const handleImageError = (brandLabel: string) => {
        setFailedImages(prev => new Set([...prev, brandLabel]));
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
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full overflow-hidden mt-7 mask-(--mask-fade-side)"
        >

            <div 
                ref={scrollRef}
                onMouseEnter={() => speedRef.current = 1}
                onMouseLeave={() => speedRef.current = 3}
                className="flex w-max py-10 gap-5"
            >
                {
                    brands.concat(brands).map((brand, index) => (
                        <span 
                            key={index + brand.label} 
                            className="flex items-center gap-2 rounded-full border border-slate-400 bg-gray px-5 py-2.5 transition-all duration-500 hover:-translate-y-2 hover:scale-102 cursor-pointer"
                        >
                            {
                                brand.icon && !failedImages.has(brand.label)
                                ?  <Image 
                                        width={100}
                                        height={100}
                                        src={brand.icon}
                                        alt="Brand Icon"
                                        className="w-6"
                                        onError={() => handleImageError(brand.label)}
                                    />
                                : brand.icon && <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center"><ImageIcon className="w-4 h-4 text-gray-600" /></div>
                            }

                            {brand.label}
                        </span>
                    ))
                }
            </div>

        </motion.section>
    );
}
 
export default Sponsor;