import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-[11px] tracking-[0.25em] text-accent uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}
    </div>
  );
}

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-20 sm:py-24 ${className}`}>{children}</section>
  );
}
