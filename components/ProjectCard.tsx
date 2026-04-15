"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30"
    >
      <div className="mb-5 h-48 overflow-hidden rounded-3xl bg-slate-100">
        <Image
          src="/ui.webp"
          alt="Project thumbnail"
          width={720}
          height={432}
          className="h-full w-full object-cover"
          priority={false}
        />
      </div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.24em] text-primary/90">{project.meta}oo</span>
        <Link
          href={project.href}
          className="text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80"
        >
          View work
        </Link>
      </div>
      <h3 className="mb-3 text-2xl font-semibold text-foreground">{project.title}a</h3>
      <p className="mb-5 text-sm leading-7 text-slate-600">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
