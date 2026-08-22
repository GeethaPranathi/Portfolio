import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic Journey" />

      <div className="mt-12 space-y-5">
        {education.map((e) => (
          <div key={e.degree} className="glass card-hover flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <span className="bg-violet/15 text-violet flex size-11 shrink-0 items-center justify-center rounded-xl">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{e.field}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 px-5 py-3 text-center">
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{e.metricLabel}</p>
              <p className="text-gradient mt-1 font-display text-xl font-bold">{e.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
