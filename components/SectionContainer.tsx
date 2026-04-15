import { type PropsWithChildren } from "react";

interface SectionContainerProps {
  id: string;
  className?: string;
}

export function SectionContainer({
  children,
  id,
  className = "",
}: PropsWithChildren<SectionContainerProps>) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}
