interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
      {label}
    </span>
  );
}
