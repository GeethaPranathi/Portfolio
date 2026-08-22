import { ArrowDown, Download, FileText, Code, User, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-50" />
      <div className="bg-violet/20 pointer-events-none absolute -top-24 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full blur-[130px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          <span className="bg-accent size-1.5 animate-pulse rounded-full" />
          {profile.status}
        </span>

        <p className="mt-8 font-mono text-sm text-muted-foreground">Hi, I'm</p>
        <h1 className="mt-2 text-4xl leading-[1.05] font-bold sm:text-6xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="mt-4 font-mono text-xs tracking-[0.18em] text-accent uppercase sm:text-sm">{profile.role}</p>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{profile.intro}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/Geetha_Pranathi_Resume.pdf" download className="bg-brand-gradient shadow-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            <Download className="size-4" /> Download Resume
          </a>
          <a href="#projects" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
            View Projects <ArrowDown className="size-4" />
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {[
            { href: profile.github, Icon: Code, label: "GitHub" },
            { href: profile.linkedin, Icon: User, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            { href: profile.leetcode, Icon: Code, label: "LeetCode" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="glass card-hover rounded-xl p-3 text-muted-foreground hover:text-foreground">
              <Icon className="size-4.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
