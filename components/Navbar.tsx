"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type NavLink } from "@/lib/content";
import { navLinks, li } from "@/lib/content";
import { fadeInUp } from "@/lib/motion";
import Image from "next/image";

const Navbar = () => {
    return (
        <motion.header
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            className="fixed w-full top-0 z-30 border-b border-white/10 bg-background/60 backdrop-blur-xl"
        >

            <div className="mx-auto flex items-center justify-between px-4 py-3 lg:px-10 lg:py-4">

                <Link href="#home">
                    <Image 
                        src={'/logos.png'}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
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

                <a 
                    className="bg-transparent text-base text-foreground rounded-full px-4 py-1.5 border border-foreground cursor-pointer font-semibold group relative overflow-hidden inline-block"
                    href="/Bethel CV .pdf"
                    download="Bethel CV .pdf"
                >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Download CV</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">Download CV</span>
                </a>
            </div>

        </motion.header>
    );
}

export default Navbar