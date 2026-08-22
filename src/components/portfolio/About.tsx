import { Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="About Me" description="Building AI-powered products that solve real problems." />

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <div className="glass rounded-2xl p-7 lg:col-span-3 flex items-center">
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm a Computer Science Engineering student specializing in Artificial Intelligence and Data Science, with hands-on experience in Generative AI, full-stack development, backend engineering, and REST API development.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I enjoy turning real-world problems into practical software solutions — from designing APIs and integrating AI models to building responsive interfaces and deploying applications.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              My current focus is on AI Engineering, LLM applications, full-stack development, and scalable software systems, while continuously strengthening my problem-solving and system design skills.
            </p>
          </div>
        </div>

        <div className="glass rounded-2xl p-7 lg:col-span-2 flex flex-col justify-center items-center">
          <div className="relative mx-auto w-full max-w-[260px] aspect-square mt-4 mb-2 group animate-[float_6s_ease-in-out_infinite]">
            
            {/* Ambient Background Glow (fades in) */}
            <div className="absolute inset-0 rounded-full bg-amber/10 blur-2xl opacity-0 animate-[fadeInScale_1s_ease-out_forwards] transition-all duration-500 group-hover:opacity-100 group-hover:bg-amber/20" />
            
            {/* SVG Animated Border (Draws itself, then spins) */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 animate-[spin_15s_linear_infinite_1.5s]" 
              viewBox="0 0 100 100"
            >
              <circle 
                cx="50" cy="50" r="49" 
                fill="none" 
                stroke="var(--amber)" 
                strokeWidth="1.2"
                strokeLinecap="round"
                className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:stroke-[2]"
                style={{
                  strokeDasharray: 308,
                  strokeDashoffset: 308,
                  animation: 'drawCircle 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
                }}
              />
            </svg>
            
            {/* The Image Container (Fades and Scales in) */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-background m-[2px] opacity-0 animate-[fadeInScale_1s_ease-out_forwards]">
              <img 
                src="/gp-photo.jpeg" 
                alt="Geetha Pranathi" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
}
