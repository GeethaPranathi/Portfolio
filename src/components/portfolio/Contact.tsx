import { Code2, Code, User, Mail, Phone } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "GitHub", value: "View repositories", href: profile.github, Icon: Code },
  { label: "LinkedIn", value: "Let's connect", href: profile.linkedin, Icon: User },
  { label: "LeetCode", value: "Problem solving", href: profile.leetcode, Icon: Code2 },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let's Build Something" description="I'm open to Software Engineering, AI Engineering, and Full-Stack opportunities. If you're working on an interesting problem or would like to connect, feel free to reach out." />

      <div className="mt-12 flex flex-col lg:flex-row gap-10">
        
        {/* Left Side: Message */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's work <br/><span className="text-muted-foreground">together.</span></h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            I'm currently exploring new opportunities in Software and AI Engineering. Whether you have a project in mind or just want to connect, my inbox is always open.
          </p>
        </div>

        {/* Right Side: Contact List */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <a href={`mailto:${profile.email}`} className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:bg-foreground/5">
            <div className="flex items-center gap-5">
              <span className="bg-amber/15 text-amber flex size-12 items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-1">Email</p>
                <p className="font-medium text-foreground">{profile.email}</p>
              </div>
            </div>
            <div className="text-muted-foreground group-hover:text-amber transition-colors">
              <Code2 className="size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:bg-foreground/5">
            <div className="flex items-center gap-5">
              <span className="bg-violet/15 text-violet flex size-12 items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                <User className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-1">LinkedIn</p>
                <p className="font-medium text-foreground">Connect with me</p>
              </div>
            </div>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-6 transition-all hover:bg-foreground/5">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <Code className="size-6" />
              </span>
              <p className="font-medium text-sm">GitHub</p>
            </a>
            
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="glass group flex items-center gap-4 rounded-2xl p-6 transition-all hover:bg-foreground/5">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <Phone className="size-6" />
              </span>
              <p className="font-medium text-sm">Phone</p>
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3">
        <p className="font-mono text-[11px] text-muted-foreground">© 2026 Kanala Geetha Pranathi</p>
      </div>
    </footer>
  );
}
