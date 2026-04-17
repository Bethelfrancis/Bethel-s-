"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type NavLink } from "@/lib/content";
import { navLinks, li } from "@/lib/content";
import { fadeInUp } from "@/lib/motion";

const Navbar = () => {
    return (
        <motion.header
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            className="fixed w-full top-0 z-30 border-b border-white/10 bg-background/60 backdrop-blur-xl"
        >

            <div className="mx-auto flex items-center justify-between px-4 py-3 lg:px-10 lg:py-4">

                <Link href="#home" className="text-2xl text-foreground font-medium">
                    Bethel
                </Link>

                <nav className="hidden md:flex items-center gap-10 text-base font-medium text-muted">

                    {
                        navLinks.map((link: NavLink) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${li}`}
                            >
                                {link.label}
                            </Link>
                        ))
                    }

                </nav>

                <button className="bg-transparent text-base text-foreground rounded-full px-4 py-1.5 border border-foreground cursor-pointer font-semibold">
                    Download CV
                </button>
            </div>

        </motion.header>
    );
}

export default Navbar