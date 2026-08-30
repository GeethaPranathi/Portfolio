import { Award, ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Certifications" title="Certifications & Learning" description="Certifications and programs supporting my development in Generative AI, full-stack development, and data science." />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {certifications.map((c) => (
          <a key={c.name} href={c.link?.startsWith('/') ? `${import.meta.env.BASE_URL}${c.link.slice(1)}` : c.link} target="_blank" rel="noreferrer" className="glass card-hover group flex gap-4 rounded-2xl p-6 relative">
            <span className="bg-amber/15 text-amber flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-amber/25">
              <Award className="size-5" />
            </span>
            <div className="pr-6">
              <h3 className="text-sm font-semibold group-hover:text-amber transition-colors">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">{c.year}</p>
            </div>
            {c.link && (
              <ExternalLink className="absolute right-6 top-6 size-4 text-muted-foreground/50 opacity-0 transition-all group-hover:opacity-100 group-hover:text-amber" />
            )}
          </a>
        ))}
      </div>
    </Section>
  );
}
