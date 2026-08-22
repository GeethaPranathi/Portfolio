import { Section, SectionHeading } from "./Section";
import { learning } from "@/data/portfolio";

export function Learning() {
  return (
    <Section id="learning">
      <SectionHeading eyebrow="Currently Learning" title="Growing Beyond the Stack" />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {learning.map((item) => (
          <div key={item} className="glass card-hover flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center">
            <span className="font-mono text-xs font-semibold text-foreground/90">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
