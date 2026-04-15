interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
}

export function SectionHeading({ title, subtitle, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
        {subtitle}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
