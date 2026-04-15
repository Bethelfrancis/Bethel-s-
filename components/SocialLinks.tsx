"use client";

import Link from "next/link";
import { Phone ,Icon, Mail } from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:hello@bethelfrancis.dev" },
];

const iconMap: Record<string, typeof Icon> = {
  GitHub: Phone,
  LinkedIn: Icon,
  Email: Mail,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.label] ?? Phone;
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 transition-shadow duration-200 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
