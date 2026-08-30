import { Check, Code, Zap } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { projects, profile } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Featured Projects" description="AI, full-stack engineering, and backend development applied to practical problems." />

      <div className="mt-12 space-y-8">
        {projects.map((p) => (
          <article key={p.title} className="glass card-hover overflow-hidden rounded-3xl flex flex-col lg:flex-row">
            
            {/* Content Section */}
            <div className="p-7 lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-violet/15 flex size-12 shrink-0 items-center justify-center rounded-2xl text-2xl">{p.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-accent rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {p.repoLink && (
                      <a href={p.repoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary">
                        <Code className="size-4" /> Code
                      </a>
                    )}
                    {p.demoLink && (
                      <a href={p.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-amber-500/20">
                        <Zap className="size-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-foreground/80">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">Key features</p>
                  <ul className="mt-3 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                        <Check className="text-accent mt-0.5 size-4 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    <Zap className="text-amber size-3.5" /> Impact
                  </p>
                  <p className="mt-2 text-sm text-foreground/85">{p.impact}</p>
                </div>
              </div>
            </div>

            {/* Image / Preview Section */}
            {p.image && (
              <div className="relative min-h-[300px] w-full lg:w-5/12 border-t lg:border-t-0 lg:border-l border-border/50 bg-black/40 overflow-hidden flex items-center justify-center p-6 lg:p-8">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                <img 
                  src={p.image.startsWith('/') ? `${import.meta.env.BASE_URL}${p.image.slice(1)}` : p.image} 
                  alt={`${p.title} Preview`}
                  className="relative z-10 h-auto w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/5 transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
