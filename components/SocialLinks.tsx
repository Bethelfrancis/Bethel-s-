"use client";

import Link from "next/link";
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/content";


const iconMap: Record<string, any> = {
    GitHub: SiGithub,
    LinkedIn: FaLinkedin,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    X: SiX,
    YouTube: FaYoutube,
    Email: MdEmail,
};

export const SocialLinks = () => {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {
                socialLinks.map((link) => {
                    const Icon = iconMap[link.label];
                    return (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-white/90 px-2 py-2 text-slate-800 transition-all duration-200 mt-5"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                        </motion.a>
                );
                })
            }
        </div>
    );
}