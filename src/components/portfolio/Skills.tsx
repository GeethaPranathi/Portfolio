import { Code2, LayoutTemplate, Server, Cpu, Database, Wrench, BookOpen, Layers } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { skills } from "@/data/portfolio";

const getGroupIcon = (groupName: string) => {
  switch (groupName) {
    case "Programming Languages": return <Code2 className="size-5" />;
    case "Web Development": return <LayoutTemplate className="size-5" />;
    case "Backend & APIs": return <Server className="size-5" />;
    case "AI & Generative AI": return <Cpu className="size-5" />;
    case "Databases": return <Database className="size-5" />;
    case "Tools & Platforms": return <Wrench className="size-5" />;
    case "Coursework": return <BookOpen className="size-5" />;
    default: return <Layers className="size-5" />;
  }
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Technologies I Work With" description="A practical toolkit for building AI-powered applications, full-stack products, APIs, and data-driven solutions." />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="glass card-hover flex flex-col justify-start rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="bg-amber/15 text-amber flex size-10 items-center justify-center rounded-xl">
                {getGroupIcon(s.group)}
              </span>
              <h3 className="font-semibold text-foreground/90">{s.group}</h3>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2.5">
              {s.items.map((i) => (
                <span 
                  key={i} 
                  className="rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 font-mono text-[11px] font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
