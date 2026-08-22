import { Briefcase } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Experience & Industry Exposure" description="Hands-on experience across full-stack engineering, BFSI applications, cloud technologies, and Generative AI." />

      <div className="relative mt-12 space-y-6 border-l border-border pl-6 sm:pl-8">
        {experience.map((e) => (
          <div key={e.role} className="relative">
            <span className="bg-brand-gradient absolute top-7 -left-[31px] size-3 rounded-full sm:-left-[39px]" />
            <div className="glass card-hover rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-violet/15 text-violet flex size-9 items-center justify-center rounded-xl">
                  <Briefcase className="size-4" />
                </span>
                <h3 className="text-base font-semibold">{e.role}</h3>
                <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-accent mt-2 text-sm">{e.company}</p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="bg-accent mt-2 size-1 shrink-0 rounded-full" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
