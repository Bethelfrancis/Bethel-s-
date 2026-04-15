"use client";

import { motion } from "framer-motion";
import { brands } from "@/lib/content";
import { staggerContainer } from "@/lib/motion";


const Sponsor = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full overflow-hidden mt-7 mask-(--mask-fade-side)"
        >

            <div className="flex w-max animate-scroll py-10 gap-5">
                {
                    brands.concat(brands).map((brand, index) => (
                        <span 
                            key={index + brand.label} 
                            className="rounded-full border border-slate-400 bg-gray px-4 py-2"
                        >
                            {brand.label}
                        </span>
                    ))
                }
            </div>

        </motion.section>
    );
}
 
export default Sponsor;