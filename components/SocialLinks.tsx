"use client";

import Link from "next/link";
import { Phone ,Icon, Mail } from "lucide-react";
import { socialLinks } from "@/lib/content";


const iconMap: Record<string, typeof Icon> = {
    GitHub: Phone,
    LinkedIn: Icon,
    Email: Mail,
};

export const SocialLinks = () => {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {
                socialLinks.map((link) => {
                    const Icon = iconMap[link.label] ?? Phone;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-slate-800 transition-all duration-200 mt-5"
                        >
                            <Phone className="h-4 w-4" aria-hidden="true" />
                            {link.label}
                        </Link>
                );
                })
            }
        </div>
    );
}